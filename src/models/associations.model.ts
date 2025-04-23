import { StudyEvent } from "./study_event.model.js";
import { StudyEventTag } from "./study_event_tag.model.js";
import { Tag } from "./tag.model.js";
import { User } from "./user.models.js";

export const associations = (): void => {

    // User has many StudyEvents
    User.hasMany(StudyEvent, { foreignKey: 'user_id' });
    StudyEvent.belongsTo(User, { foreignKey: 'user_id' });

    // User has many Tags
    User.hasMany(Tag, { foreignKey: 'user_id' });
    Tag.belongsTo(User, { foreignKey: 'user_id' });

    // StudyEvent belongs to many Tags through StudyEventTag
    StudyEvent.belongsToMany(Tag, { through: StudyEventTag, foreignKey: 'study_event_id' });
    Tag.belongsToMany(StudyEvent, { through: StudyEventTag, foreignKey: 'tag_id' });
    
};