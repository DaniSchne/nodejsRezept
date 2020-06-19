import { EntityRepository, Repository, Connection } from 'typeorm';
import winston from 'winston';
import { Container } from 'typedi';
import {Customer} from '../models/customer';

@EntityRepository(Customer)
export class CustomerRepository extends Repository<Customer> {

     public async find(): Promise<Customer[]> {

        const Logger = Container.get<winston.Logger>('logger');
        Logger.debug('Calling CustomerRepository' );

        return this.createQueryBuilder()
            .select()
            .getMany();        
    }

}