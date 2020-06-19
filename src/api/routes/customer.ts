import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import winston from 'winston';
import  isAuth  from '../../middlewares/isAuth';

import  CustomerService  from '../../services/customerService';

const route = Router();

export default (app: Router) => {
  app.use('/customer', route);

  route.get('/all', isAuth,  async (req : Request, res : Response) => {

    const Logger = Container.get<winston.Logger>('logger');

    Logger.debug(req.headers.authorization);

    Logger.debug('Calling customer/all endpoint with body: %o', req.body );

    const user = req.user; 
    Logger.debug('User: %o', req.user );
    const customerService = Container.get(CustomerService);
    const customer = await customerService.ReadItAll();

    return res.json({ message : customer }).status(200);
  });
};

