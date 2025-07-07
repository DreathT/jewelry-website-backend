import axios from 'axios';

export const getGoldPrice = async () => {
    try {
        const response = await axios.get('https://www.goldapi.io/api/XAU/USD', {
            headers: { 'x-access-token': 'MY_API_KEY' }
        });
        return response.data.price;
    } catch (err) {
        console.error(err);
        return 70; // fallback
    }
};