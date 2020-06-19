import { Router, Request, Response } from 'express';
import AuthService from '../../services/auth';
import { Container } from 'typedi';
import winston from 'winston';

// import middlewares from '../middlewares';
const route = Router();

export default (app: Router) => {
  app.use('/user', route);

  route.get('/me', (req: Request, res: Response) => {
    return res.json({ message : "It`s a me Mario" }).status(200);
  });

  app.post('/user/login', async (req, res) => {
    const email = req.body.user.email;
    const password = req.body.user.password;
    try {

      const Logger = Container.get<winston.Logger>('logger');
      Logger.debug('Calling user/signup endpoint with body: %o', req.body )
      const authServiceInstance = Container.get(AuthService);
      const { user, token } = await authServiceInstance.Login(email, password);
      return res.status(200).json({ user, token }).end();
    } catch(e) {
      return res.json(e).status(500).end();
    }
  })
  
  route.post('/signup', async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body.user;
      
      const Logger = Container.get<winston.Logger>('logger');
      Logger.debug('Calling user/signup endpoint with body: %o', req.body )
      const authServiceInstance = Container.get(AuthService);
      const { user, token } = await authServiceInstance.SignUp(email, password, name);
      return res.json({ user, token }).status(200).end();
    } catch (e) {
      return res.json(e).status(500).end();
    }
  })

};