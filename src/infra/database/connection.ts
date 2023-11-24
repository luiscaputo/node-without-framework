import { Client } from 'pg';

export const ConnectToDatabase = new Client({
  user: 'qjlshscu',
  host: 'flora.db.elephantsql.com',
  port: 5432,
  password: '1mPfQNQLPZo_KD94ZFDRXQB6KNf5FaDf',
  database: 'qjlshscu'
})