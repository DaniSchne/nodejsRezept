import { EntityRepository, Repository, Connection } from 'typeorm';
import winston from 'winston';
import { Container } from 'typedi';
import {User} from '../models/user';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

     public async findOneUser(email: String): Promise<User> {

        const Logger = Container.get<winston.Logger>('logger');
        Logger.debug('Calling UserRepository' );

        return this.createQueryBuilder()
            .select()
            .where('user.email = :email', { email: email })
            .getOne();   
    }

}