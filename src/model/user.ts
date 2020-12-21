let users = [
  {
    name: 'Jairo Gatjens',
    email: 'jgatjens@gmail.com',
    password: 'inuyasha22',
  },
  {
    name: 'Teban',
    email: 'egatjens@gmail.com',
    password: 'password',
  },
  {
    name: 'Bruno',
    email: 'bgatjens@gmail.com',
    password: 'password',
  },
  {
    name: 'Yez',
    email: 'andgatjens@gmail.com',
    password: 'password',
  },
]

interface User {
  name: String
  email: String
  password: String
}

export const saveUser = (user: User) => {
  if (!user) users.push(user)
  return true
}

export const LoginUser = (email, password) => {
  const user = getUser(email)

  if (user && password == user.password) {
    return user
  } else {
    return null
  }
}

export const getUser = (email: String): User | null => {
  const user = users.find((user: User) => user.email === email)
  return user ? user : null
}
