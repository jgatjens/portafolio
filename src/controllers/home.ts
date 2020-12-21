export const getHome = (req, res) => {
  if (req.session.user) {
    res.render('home', {
      ...req.session.user,
    })
  } else {
    res.render('home')
  }
}

export const getDashboard = (req, res) => {
  if (req.session.user) {
    res.render('dashboard', {
      ...req.session.user,
      ...req.session.message,
    })
  } else {
    res.redirect('/login')
  }
}
