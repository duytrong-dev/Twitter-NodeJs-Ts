import {
    Table,
    Column,
    Model,
    DataType,
    PrimaryKey,
    AutoIncrement,
    CreatedAt,
    UpdatedAt,
    Default,
    HasMany
} from 'sequelize-typescript';
import { StudyEvent } from './study_event.model.js';
  
@Table({ timestamps: true, tableName: 'users', modelName: 'User' })
export class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Column({ type: DataType.BIGINT, autoIncrement: true, allowNull: false, primaryKey: true })
    declare id: number;
  
    @Column({type: DataType.STRING, allowNull: false})
    declare name: string;
  
    @Column({type: DataType.STRING, allowNull: false, unique: true})
    declare email: string;
  
    @Column({type: DataType.STRING, allowNull: false})
    declare password: string;
  
    @Default('')
    @Column({type: DataType.TEXT})
    declare avatar_url: string;
  
    @Default(0)
    @Column({type: DataType.BIGINT})
    declare xp: number;
  
    @Default(1)
    @Column({type: DataType.INTEGER})
    declare level: number;

    @Default(false)
    @Column({type: DataType.BOOLEAN})
    declare is_verified: boolean;

    @Default('')
    @Column({type: DataType.STRING})
    declare email_verify_token: string;
  
    @CreatedAt
    @Column(DataType.DATE)
    declare createdAt: Date;
  
    @UpdatedAt
    @Column(DataType.DATE)
    declare updatedAt: Date;

    @HasMany(() => StudyEvent, { foreignKey: 'user_id' })
    declare studyEvents: StudyEvent[];
}
