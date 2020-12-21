import { saveUser, LoginUser } from '../model/user'
import { Message, MessageType } from '../model/notification'

export const getLogin = (req, res) => {
  res.render('login')
}

export const postLogin = (req, res) => {
  const email = req.body.email
  const password = req.body.password
  const user = LoginUser(email, password)

  console.log(user)

  if (user) {
    req.session.user = user
    req.session.notification = {
      messageType: MessageType.SUCCESS,
      message: Message.USER_LOGIN,
    }
    res.redirect('dashboard')
  } else {
    req.session.notification = {
      messageType: MessageType.ERROR,
      message: Message.USER_NOT_FOUND,
    }
    res.redirect('login')
  }
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
    req.session.user = user
    req.session.notification = {
      messageType: MessageType.SUCCESS,
      message: Message.USER_CREATE,
    }
    res.redirect('dashboard')
  } else {
    res.render('sign-up', {
      notification: {
        messageType: MessageType.ERROR,
        message: Message.USER_ERROR,
      },
    })
  }
}
