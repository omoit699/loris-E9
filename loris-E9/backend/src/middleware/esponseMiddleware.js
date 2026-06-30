const responseMiddleware = (req, res, next) => {

    res.success = (message, data = null) => {

        res.json({
            success: true,
            message,
            data
        });
    };

    res.fail = (message, status = 400) => {

        res.status(status).json({
            success: false,
            message
        });
    };

    next();
};

export default responseMiddleware;