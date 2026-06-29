import logger from "../config/logger.js";

const errorHandler = (err, req, res, next) => {

    logger.error(err);

    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({

        success: false,

        message:
            process.env.NODE_ENV === "production"
                ? "Internal Server Error"
                : err.message,

        stack:
            process.env.NODE_ENV === "production"
                ? null
                : err.stack

    });

};

export default errorHandler;