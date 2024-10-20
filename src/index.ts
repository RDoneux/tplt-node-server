import dotenv from "dotenv";
dotenv.config();

import express, { Request, Response } from 'express';
import logger from './middleware/logger';
import actuatorController from "./controllers/actuator";
import { errorLog, infoLog } from "./globals/logging-globals";

const application = express();
const PORT = process.env.PORT || 3000;

// middleware
application.use(logger);

// controllers
application.use(actuatorController)

// root endpoints
application.get("/", (request: Request, response: Response) => {
    response.send("hello world");
})

application.listen(PORT, (error?: Error) => {
    if (error) {
        errorLog(error)
        return;
    }
    infoLog(`Server launched successfully, listening at: http://localhost:${PORT}`);
})