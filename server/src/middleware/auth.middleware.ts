import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];

    if (token) {
      jwt.verify(token, 'key', (err, decoded) => {
        if (err) {
          res.status(401).json({ message: 'Invalid token' });
        } else {
          req.user = decoded;
          next();
        }
      });
    } else {
      res.status(401).json({ message: 'No token provided' });
    }
  }
}