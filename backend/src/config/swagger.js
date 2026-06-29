import swaggerJsDoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";

const options = {

    definition: {

        openapi: "3.0.0",

        info: {

            title: "Loris E-9 API",

            version: "1.0.0",

            description: "Enterprise Hardware ERP API"

        },

        servers: [

            {
                url: "http://localhost:5000/api/v1"
            }

        ]

    },

    apis: ["./src/routes/*.js"]

};

const specs = swaggerJsDoc(options);

const swaggerDocs = (app) => {

    app.use(
        "/api/docs",
        swaggerUI.serve,
        swaggerUI.setup(specs)
    );

};

export default swaggerDocs;