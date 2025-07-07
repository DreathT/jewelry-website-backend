import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    popularityScore: {
        type: Number,
        required: [true, "popularityScore is required"]
    },
    weight: {
        type: Number,
        required: [true, "weight is required"]
    },
    images: [
        {
            type: String,
            required: [true, "Image URL is required"]
        }
    ]
})

export default mongoose.model("Product", productSchema);