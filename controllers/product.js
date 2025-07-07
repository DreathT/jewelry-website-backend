import products from "../data/products.json" assert { type: "json" };
import { getGoldPrice } from "../utils/goldPriceApi.js";

const getAllProducts = async (req, res) => {
    try {

        const goldPrice = await getGoldPrice();

        const result = products.map(product => {
            const price = ((product.popularityScore + 1) * product.weight * goldPrice).toFixed(2);
            return {
                ...product,
                price: `${price} USD`,
                popularityScoreDisplay: (product.popularityScore * 5).toFixed(1),
            };
        });
        res.status(200).json(result);

    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}

export { getAllProducts };