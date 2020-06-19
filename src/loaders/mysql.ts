import {DatabaseProvider} from '../databases/index';
import { Connection } from 'typeorm';

// export default async (): Promise<Connection> => {
export default async (): Promise<void> => {
 
DatabaseProvider.configure({
  type: process.env.DATABASE_TYPE as any ,
  database: process.env.MYSQL_DATABASE ,
  username: process.env.MYSQL_USER ,
  password: process.env.MYSQL_PASSWORD ,
  host: process.env.MYSQL_HOST_IP || 'localhost',
  port: +process.env.DATABASE_PORT || 3306
});

await DatabaseProvider.getConnection();
};