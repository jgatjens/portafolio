import express from 'express'
import path from 'path'
import session from 'express-session'
import bodyParser from 'body-parser'

// controllers
import { getLogin, getSignUp, postSignUp } from './controllers/login'
import { getHome } from './controllers/home'

// Create a new express app instance
const app: express.Application = express()

app.use(express.static('static'))
app.set('views', path.join(__dirname, '../src/views'))
app.set('view engine', 'pug')

app.use(
  session({
    secret: 'Jota-site',
    resave: false,
    saveUninitialized: true,
  })
)

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', getHome)
app.get('/login', getLogin)
app.get('/sign-up', getSignUp)

app.post('/sign-up', postSignUp)

app.get('/*', (req, res) => res.render('404'))
app.listen(3000, () => console.log('App is listening on port 3000!'))
