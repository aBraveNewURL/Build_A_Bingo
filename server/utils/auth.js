const jwt = require("jsonwebtoken");

const secret = process.env.ACCESS_TOKEN_SECRET;
const expiration = "2h";

module.exports = {
  authMiddleware: function ({ req }) {
    // allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;

    // We split the token string into an array and return actual token
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
    }

    // if token can be verified, add the decoded user's data to the request so it can be accessed in the resolver
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }

    // return the request object so it can be passed to the resolver as `context`
    return req;
  },
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
