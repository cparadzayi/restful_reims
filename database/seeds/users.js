const bcrypt = require('bcryptjs')

const users = [
  {
    username: 'kudakwashe',
    password: hashedPassword('kp'),
    department: 'engineering'
  },
  {
    username: 'garikai',
    password: hashedPassword('gg'),
    department: 'finance'
  }
]

function hashedPassword (password) {
  return bcrypt.hashSync(password, 10)
}

exports.seed = (knex, Promise) => knex('users').del()
    .then(() => knex('users').insert(users))
