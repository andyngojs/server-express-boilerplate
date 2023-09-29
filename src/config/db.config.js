import 'dotenv/config';
import {MongoClient, ServerApiVersion} from 'mongodb';

let mExpensesDatabaseInstance = null;

const mongoClientInstance = new MongoClient(process.env.MONGODB_URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

export const CONNECT_DB = async () => {
  await mongoClientInstance.connect();

  mExpensesDatabaseInstance = mongoClientInstance.db(process.env.DATABASE_NAME);
};

/**
 * Close connection to Database when it needs
 */
export const CLOSE_DB = async () => {
  await mongoClientInstance.close();
};

/**
 * This function GET_DB (not Async function),
 * it exports Database Instance after connected to MongoDB successfully
 * to use it at anywhere.
 * Note: Make sure this function calls only after it connected to MongoDB successfully.
 * @returns mExpensesDatabaseInstance
 */
export const GET_DB = () => {
  if (!mExpensesDatabaseInstance) {
    throw new Error('Must connect to Database first.');
  }

  return mExpensesDatabaseInstance;
};
