import mongoose from "mongoose";    // Librería para conectar la base de datos
import { MONGODB_URI, MONGODB_URI_SECONDARY } from './config.js' // Llamado a la DB desde la variable de entorno

// Se exporta la función asíncrona connectDB:
export const connectDB = async () => { 
    try {
        await mongoose.connect(MONGODB_URI, {dbName: 'chessDB'});
        console.log('Main database connected');
        } catch (error) {
        console.error("Error connecting to database", error);
        //Si falla, sale de la ejecucion
        process.exit(1);
    }
}

export const connect_secondary_DB = async () => { 
    try {
        const secondaryConnection = mongoose.createConnection(MONGODB_URI_SECONDARY, {dbName: 'chess_problems'});
        console.log('Chess_problems database connected');
        return secondaryConnection;
    } catch (error) {
        console.error("Error connecting to database", error);
        //Si falla, sale de la ejecucion
        process.exit(1);
    }
}