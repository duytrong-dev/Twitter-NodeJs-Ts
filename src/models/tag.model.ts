import { AutoIncrement, BelongsTo, BelongsToMany, Column, CreatedAt, DataType, Default, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { User } from "./user.models.js";
import { StudyEvent } from "./study_event.model.js";
import { StudyEventTag } from "./study_event_tag.model.js";

@Table({ timestamps: true, tableName: 'tags', modelName: 'Tag', indexes: [{ unique: true, fields: ['user_id', 'name']}] })
export class Tag extends Model<Tag> {

    @PrimaryKey
    @AutoIncrement
    @Column({type: DataType.BIGINT, autoIncrement: true, allowNull: false})
    declare id: number

    @ForeignKey(() => User)
    @Column({type: DataType.BIGINT, allowNull: false })
    declare user_id: number

    @Column({type: DataType.STRING(100), allowNull: false})
    declare name: string

    @Default('#FFD700')
    @Column({type: DataType.STRING(7), allowNull: false})
    declare color: string

    @CreatedAt
    @Column(DataType.DATE)
    declare createdAt: Date

    @UpdatedAt
    @Column(DataType.DATE)
    declare updatedAt: Date

    @BelongsTo(() => User, { foreignKey: 'user_id' })
    declare user: User;

    @BelongsToMany(() => StudyEvent, () => StudyEventTag)
    declare studyEvents: StudyEvent[];

}