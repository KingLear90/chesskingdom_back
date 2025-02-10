import dotenv from 'dotenv'

dotenv.config();

export const PORT = process.env.PORT
export const MONGODB_URI = process.env.MONGODB_URI 
export const MONGODB_URI_SECONDARY = process.env.MONGODB_URI_SECONDARY
export const SECRET = process.env.SECRET