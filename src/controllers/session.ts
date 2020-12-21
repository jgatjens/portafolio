import { Message, MessageType } from '../model/notification'

// middleware function to check for logged-in users
export const sessionChecker = (req, res, next) => {
  if (req.session.user) {
    console.log(req.session.user)
    res.render('dashboard', {
      ...req.session.user,
      ...req.session.notification,
    })
  } else {
    next()
  }
}

export const sessionDestroy = (req, res) => {
  req.session.destroy(function (err) {
    res.redirect('/')
  })
}
