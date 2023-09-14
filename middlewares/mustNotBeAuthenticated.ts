import * as express from 'express';

export default function mustNotBeAuthenticated(req: express.Request, res: express.Response, next: express.NextFunction) {
  if (req.session.userId) {
    res.status(400);
    res.send({
      'code': 'MUST_NOT_BE_AUTHENTICATED',
      'message': 'User must not be authenticated'
    });
    return;
  }
  next();
}