import * as jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';


const authenticateJWT = (req : Request, res : Response, next : NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
      const token = authHeader.split(' ')[1];

      jwt.verify(token, 'MySuP3R_z3kr3t.', (err, user) => {
          if (err) {
              return res.sendStatus(403);
          }

          req.user = user;
          next();
      });
  } else {
      res.sendStatus(401);
  }
}
export default authenticateJWT;