import * as express from 'express';

export default function mustNotBeAuthenticated(req: express.Request, res: express.Response, next: express.NextFunction) {
  console.log(req.session);
  if (req.session.userId) {
    res.status(400);
    res.send({
      'code': 'USER_ALREADY_AUTHENTICATED',
      'message': 'User is already authenticated'
    });
    return;
  }
  next();
}