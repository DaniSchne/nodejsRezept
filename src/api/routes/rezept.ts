import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import winston from 'winston';

import  RezeptService  from '../../services/RezeptService';

const route = Router();

export default (app: Router) => {
  app.use('/rezept', route);

  route.get('/all', async (req: Request, res: Response) => {

    const Logger = Container.get<winston.Logger>('logger');
    Logger.debug('Calling rezept/all endpoint with body: %o', req.body )

    const rezeptServiceInstance = Container.get(RezeptService);
    const { user, company } = await rezeptServiceInstance.ReadItAll();
    
    return res.json({ message : user }).status(200);
  });
};