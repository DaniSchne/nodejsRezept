import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
 
@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  public id: number;
 
  @Column()
  public name: string;
 
  @Column()
  public email: string;

  @Column()
  public active: boolean;  
}
