import { Service, Inject} from 'typedi';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { EventDispatcher, EventDispatcherInterface } from '../decorators/eventDispatcher';
import events from '../subscribers/events';

import {Customer} from '../models/customer';
import { CustomerRepository } from '../repositories/CustomerRepository';


@Service()
export default class CustomerService {

  constructor(
    @OrmRepository() private customerRepository: CustomerRepository,
    @Inject('logger') private logger,
    @EventDispatcher() private eventDispatcher: EventDispatcherInterface,
) {} 

    public async ReadItAll(): Promise<Customer[]> {
      this.logger.silly('ReadItAll called ');

      const customers = await this.customerRepository.find();

      this.eventDispatcher.dispatch(events.user.signUp);

      return customers;
    }
  }


  