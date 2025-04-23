import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import { StudyEvent } from "./study_event.model.js";
import { Tag } from "./tag.model.js";

@Table({ timestamps: true, tableName: 'study_event_tags', modelName: 'StudyEventTag' })
export class StudyEventTag extends Model<StudyEventTag> {
    
    @ForeignKey(() => StudyEvent)
    @Column({ type: DataType.BIGINT, allowNull: false })
    declare study_event_id: number;
  
    @ForeignKey(() => Tag)
    @Column({ type: DataType.BIGINT, allowNull: false })
    declare tag_id: number;

}