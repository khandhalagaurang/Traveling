const jwt = require('jsonwebtoken');

// const generateToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, {
//     expiresIn: '30d',
    
//   });
// };
const generateToken = (id) => {
  const secret = process.env.JWT_SECRET || 'secure';
  return jwt.sign({ id }, secret, { expiresIn: '30d' });
};


module.exports = { generateToken };