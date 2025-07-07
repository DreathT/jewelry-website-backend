import { getGoldPrice } from "../utils/goldPriceApi.js";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Gerçek yolu doğru oluştur
const productsPath = path.join(__dirname, "../data/products.json");

const productsData = await fs.readFile(productsPath, "utf-8");
const products = JSON.parse(productsData);

const getAllProducts = async (req, res) => {
    try {

        const goldPrice = await getGoldPrice();

        const result = products.map(product => {
            const price = ((product.popularityScore + 1) * product.weight * goldPrice).toFixed(2);
            return {
                ...product,
                price: price,
                popularityScoreDisplay: (product.popularityScore * 5).toFixed(1),
            };
        });
        res.status(200).json(result);

    } catch (error) {
        console.error("Error fetching products:", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { getAllProducts };