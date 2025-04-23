import { AutoIncrement, BelongsTo, BelongsToMany, Column, CreatedAt, DataType, Default, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { User } from "./user.models.js";
import { Tag } from "./tag.model.js";
import { StudyEventTag } from "./study_event_tag.model.js";

@Table({ timestamps: true, tableName: 'study_events', modelName: 'StudyEvent' })
export class StudyEvent extends Model<StudyEvent> {

    @PrimaryKey
    @AutoIncrement
    @Column({type: DataType.BIGINT, autoIncrement: true, allowNull: false})
    declare id: number

    @ForeignKey(() => User)
    @Column({type: DataType.BIGINT, allowNull: false })
    declare user_id: number

    @Column({type: DataType.STRING, allowNull: false})
    declare title: string

    @Column({type: DataType.TEXT, allowNull: false})
    declare description: string

    @Column({type: DataType.DATE, allowNull: false})
    declare start_time: Date

    @Column({type: DataType.DATE, allowNull: false})
    declare end_time: Date

    @Default('low')
    @Column({type: DataType.ENUM('low', 'medium', 'high')})
    declare priority_level: string

    @Default('pending')
    @Column({type: DataType.ENUM('pending', 'in_progress', 'completed')})
    declare status: string

    @Default('#FFD700')
    @Column({type: DataType.STRING(7)})
    declare color: string

    @Default(0)
    @Column({type: DataType.BIGINT})
    declare reminder_minutes: number

    @CreatedAt
    @Column(DataType.DATE)
    declare createdAt: Date
  
    @UpdatedAt
    @Column(DataType.DATE)
    declare updatedAt: Date

    @BelongsTo(() => User, { foreignKey: 'user_id' })
    declare user: User;

    @BelongsToMany(() => Tag, () => StudyEventTag)
    declare tags: Tag[]; 
}
