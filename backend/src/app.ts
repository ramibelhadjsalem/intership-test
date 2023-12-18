import express ,{ NextFunction, Request, Response }  from 'express';
import createHttpError, { isHttpError } from "http-errors";
import cors from 'cors';
import fromsRoutes from "./routes/forms"

const app = express();
const port = 3000;


app.use(express.json())
app.use(cors());

/*************** adding routes ****************/
app.use("/api/forms",fromsRoutes)

/*************** handel notfound routes ****************/
app.use((req, res, next) => {
    next(createHttpError(404, "Endpoint not found"));
});

/*************** Error handling middleware for Express ****************/

app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
    // console.error(error);
    let errorMessage = "An unknown error occurred";
    let statusCode = 500;
    if (isHttpError(error)) {
        statusCode = error.status;
        errorMessage = error.message;
    }
    res.status(statusCode).json({ error: errorMessage });
});

export default app;