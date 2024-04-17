import express from "express"
import userRoutes from './routes/userRoutes.js';
import vechicleRoutes from './routes/vechicleRoutes.js'


const app = express();

app.use('/', (req, resp) => {
    resp.send("Test działania")
});

app.use('/users', userRoutes);
app.use('/vechicle', vechicleRoutes);

const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(8800, ()=> {
    console.log("Connected to backend!")
})
