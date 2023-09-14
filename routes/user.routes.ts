import express from 'express';
import { Request, Response } from 'express';
import mustBeAuthenticated from '../middlewares/mustBeAuthenticated';
import UserService from '../services/user.service';

const router = express.Router();

router.get('/me',mustBeAuthenticated, async (req: Request, res: Response) => {
  res.send(await UserService.getMe(+req.session.userId!));
});

export default router;