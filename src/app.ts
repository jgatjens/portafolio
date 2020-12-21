import express from 'express'
import path from 'path'
import session from 'express-session'
import bodyParser from 'body-parser'
import morgan from 'morgan'

// controllers
import { getLogin, postLogin, getSignUp, postSignUp } from './controllers/login'
import { getHome, getDashboard } from './controllers/home'
import { sessionChecker, sessionDestroy } from './controllers/session'

// Create a new express app instance
const app: express.Application = express()

app.use(express.static('static'))
app.set('views', path.join(__dirname, '../src/views'))
app.set('view engine', 'pug')

app.use(morgan('dev'))
app.use(
  session({
    secret: 'hisoka22',
    resave: false,
    saveUninitialized: false,
  })
)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', getHome)
app.get('/logout', sessionDestroy)
app.get('/login', getLogin)
app.post('/login', postLogin)
app.get('/sign-up', getSignUp)
app.post('/sign-up', postSignUp)

app.get('/dashboard', sessionChecker, getDashboard)

app.get('/*', (_req, res) => res.render('404'))
app.listen(3000, () => console.log('App is listening on port 3000!'))
