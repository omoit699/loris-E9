import dotenv from "dotenv";

dotenv.config();

import app from "./app.js";

import connectDatabase from "./config/database.js";

import swaggerDocs from "./config/swagger.js";

import errorHandler from "./middleware/errorHandler.js";

import notFound from "./middleware/notFound.js";

const PORT = process.env.PORT || 5000;

await connectDatabase();

swaggerDocs(app);

app.use(notFound);

app.use(errorHandler);

app.listen(PORT, () => {

    console.log(`🚀 Server running on port ${PORT}`);

});