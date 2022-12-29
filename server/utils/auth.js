const jwt = require('jsonwebtoken');

const secret = 'mysecretssshhhhhhh';
const expiration = '2h';

module.exports = {
  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};






// const jwt = require('jsonwebtoken')
// app.use(express.json())
// // TODO 'posts' variable can be commented out or removed completely once tested 
// const posts = [
//   {
//     username: 'TEST1',
//     title: 'First post'
//   },
//   {
//     username: 'TEST2',
//     title: 'Second post'
//   },
//   {
//     username: 'TEST3',
//     title: 'Third post'
//   }
// ]
// app.get('/posts', authenticateToken, (req, res) => {
//   res.json(posts.filter(post = post.username === req.user.name))
// })
// app.post('/login', (req, res) => {
//   // user will need authentication - bcrypt? 
//   const username = req.body.username
//   const user = { name: username }
//   const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET)
//   res.json({ accessToken: accessToken })
// })
// function authenticateToken(req, res, next) {
//   const authHeader = req.headers['authorization']
//   const token = authHeader && authHeader.split(' ')[1]
//   if (token == null)
//     return res.sendStatus(401)
//   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
//     if (err) return res.sendStatus(403)
//     req.user = user
//     next()
//   })
// }
