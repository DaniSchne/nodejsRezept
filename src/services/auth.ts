import * as crypto from 'crypto';
import { OrmRepository } from 'typeorm-typedi-extensions';
import { User } from '../models/user';
import winston from 'winston';
import { UserRepository } from '../repositories/UserRepository';
import { Container } from 'typedi';


import * as jwt from 'jsonwebtoken'

export default class AuthService {
    constructor(
        @OrmRepository() private userRepository: UserRepository,
    ) { }

    public async Login(email : string, password : crypto.BinaryLike): Promise<any> {
          const userRecord = await this.userRepository.findOne({ email });


          const Logger = Container.get<winston.Logger>('logger');
          Logger.debug(userRecord.password); 
          
          
          if (!userRecord) {
            throw new Error('User not found')
          } else {
            const passwordHashToCheck = crypto.pbkdf2Sync(password, userRecord.salt, 1000, 64, `sha512`).toString(`hex`);
            Logger.debug(passwordHashToCheck);

            if (passwordHashToCheck !== userRecord.password) {
              throw new Error('Incorrect password')
            }
          }

          return {
            user: {
              email: userRecord.email,
              name: userRecord.name,
            },
            token: this.generateJWT(userRecord),
          }
    }

    public async LoginAs(email): Promise<any> {
        //   const userRecord = await UserModel.findOne({ email });
        //   console.log('Finding user record...');
        //   if (!userRecord) {
        //     throw new Error('User not found');
        //   }
        //   return {
        //     user: {
        //       email: userRecord.email,
        //       name: userRecord.name,
        //     },
        //     token: this.generateJWT(userRecord),
        //   }
    }

    public async SignUp(email : string, password : crypto.BinaryLike, name : string): Promise<any> {
        const salt = crypto.randomBytes(32).toString(`hex`);

        // Hashing user's salt and password with 1000 iterations, 
        // 64 length and sha512 digest 
        const passwordHashed = crypto.pbkdf2Sync(password, salt, 1000, 64, `sha512`).toString(`hex`);

        const user = new User();
        user.password = passwordHashed;
        user.email = email;
        user.name = name;
        user.salt = salt;
        const userRecord = await this.userRepository.save(user);

        const token = this.generateJWT(userRecord);
        return {
            user: {
                email: userRecord.email,
                name: userRecord.name,
            },
            token,
        }
    }

    private generateJWT(user : User) {

        return jwt.sign({
            data: {
                name: user.name,
                email: user.email
            }
        }, 'MySuP3R_z3kr3t.', { expiresIn: '6h' }); // @TODO move this to an env var
    }

}