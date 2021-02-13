import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity("user")
@Unique(["username"])
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column({ default: true })
  isActive: boolean;
}