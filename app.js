import express from "express";
import cors from "cors";
import globalConfig from "./configs/globalConfig.js";

const app = express();

// Use Libraries
app.use(cors())
app.use(express.json())


const port = globalConfig.port || 5000;
const server = app.listen(port, () => {
    console.log(`Server started on PORT: ${port} in ${globalConfig.environment}`);
});