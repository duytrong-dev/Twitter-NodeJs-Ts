import { Sequelize } from 'sequelize-typescript';
import { User } from '~/models/user.models.js';
import dotenv from 'dotenv';
import { StudyEvent } from '~/models/study_event.model.js';
import { associations } from '~/models/associations.model.js';
import { Tag } from '~/models/tag.model.js';
import { StudyEventTag } from '~/models/study_event_tag.model.js';
dotenv.config();

export const sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    models: [User, StudyEvent, Tag, StudyEventTag], 
    logging: false,
});

export const connectDB = async (): Promise<void> => {
    try {
        associations(); // thiết lập quan hệ giữa các model
        await sequelize.authenticate();
        console.log('✅ Database connected');
        try {
            await sequelize.sync({ force: true }) // xóa hết tạo lại
            console.log('✅ Database synced') 
        } catch (error) {
            console.error('❌ Sync failed', error);
        }
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
    }
}

