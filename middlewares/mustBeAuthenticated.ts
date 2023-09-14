import * as express from 'express';

export default function mustBeAuthenticated(req: express.Request, res: express.Response, next: express.NextFunction) {
  if (!req.session.userId) {
    res.status(400);
    res.send({
      'code': 'MUST_BE_AUTHENTICATED',
      'message': 'User must be authenticated'
    });
    return;
  }
  next();
}