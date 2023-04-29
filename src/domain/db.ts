// db.ts
import { Database, open } from 'sqlite';
import sqlite3 from 'sqlite3';

let dbInstance: Database | null = null;
var initialized = false

const connect = async (): Promise<Database> => {
    if (dbInstance) {
        return dbInstance
    }

    dbInstance = await open({
        filename: './db.sqlite',
        driver: sqlite3.Database
    });

    if(!initialized){
        // 테이블 생성
        initialized = true
        await dbInstance.exec(`
            CREATE TABLE IF NOT EXISTS posts (
                id INTEGER PRIMARY KEY,
                visitor INTEGER,
                title TEXT,
                post_type TEXT,
                post_src TEXT
            )
        `);
    }

    return dbInstance;
};

export default connect;