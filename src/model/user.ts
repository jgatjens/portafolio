let users = []

interface User {
  name: string
  email: string
  password: string
}

export const saveUser = (user: User) => {
  if (user) {
    return users.push(user)
  }
  return false
}
