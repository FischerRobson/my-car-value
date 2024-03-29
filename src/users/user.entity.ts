import { AfterInsert, AfterRemove, AfterUpdate, Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  
  @PrimaryGeneratedColumn()
  id: number;
  
  @Column()
  email: string;
  
  @Column()
  password: string;
  
  @AfterInsert()
  logInsert() {
    console.log(`User ${this.id} inserted`);
  }

  @AfterUpdate()
  logUpdate() {
    console.log(`User ${this.id} updated`);
  }

  @AfterRemove()
  logRemove() {
    console.log(`User ${this.id} removed`);
  }
}
