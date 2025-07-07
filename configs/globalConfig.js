import dotenv from 'dotenv';

// .env dosyasını yükle
dotenv.config();

const globalConfig = {

    // environment and port
    environment: process.env.NODE_ENV,
    port: process.env.PORT,

}

export default globalConfig;