const jwt = require('jsonwebtoken');
const APP_SECRET = 'secret';

function getUserId(context) {
  const auth = context.request.get('Auhtorization');
  if(auth) {
    const token = auth.replace('Bearer ', '');
    const { userId } = jwt.verify(token, APP_SECRET);
    return userId;
  }

  throw new Error('Not authenticated');
}

module.exports = {
  APP_SECRET,
  getUserId
}