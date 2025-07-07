import express from "express";
import cors from "cors";
import globalConfig from "./configs/globalConfig.js";

const app = express();

// Use Libraries
app.use(cors())
app.use(express.json())

// Import Routes
import productRoutes from "./routes/product.js";

// Use Routes
app.use("/api/v1", productRoutes);

const port = globalConfig.port || 5000;
const server = app.listen(port, () => {
    console.log(`Server started on PORT: ${port} in ${globalConfig.environment}`);
});