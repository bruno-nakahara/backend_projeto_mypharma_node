import jwt from 'jsonwebtoken';

function VerifyToken(req, res, next) {
  const token = req.headers['authorization'];

  jwt.verify(token, process.env.JWT_SECRET, err => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    return next();
  });
}

export default VerifyToken;
