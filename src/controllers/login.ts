import { saveUser } from '../model/user'

export const getLogin = (req, res) => {
  res.render('login')
}

export const getSignUp = (req, res) => {
  res.render('sign-up')
}

export const postSignUp = (req, res) => {
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }

  if (saveUser(user)) {
    res.render('sign-up')
  }
}
