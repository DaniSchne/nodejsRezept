import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
 
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public email: string;
 
  @Column()
  public password: string;
 
  @Column()
  public salt: string;

  @Column()
  public name: string;  
}
