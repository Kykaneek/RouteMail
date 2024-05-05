// swagger.js

import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Swagger API',
      version: '1.0.0',
      description: 'Documentation for your API',
    },
  },
  apis: ['./routes/*.js'], // Tutaj określ ścieżkę do twoich plików z trasami (endpoints)
};

const specs = swaggerJSDoc(options);

export default function (app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
