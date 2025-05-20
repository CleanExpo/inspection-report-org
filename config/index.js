require('dotenv').config();

const config = {
    // Database Configuration
    dbUri: process.env.DB_URI,
    
    // JWT Configuration
    jwtSecret: process.env.JWT_SECRET,
    
    // Xero Configuration
    xero: {
        clientId: process.env.XERO_CLIENT_ID,
        clientSecret: process.env.XERO_CLIENT_SECRET,
        tenantId: process.env.XERO_TENANT_ID
    },
    
    // Server Configuration
    port: process.env.PORT || 3000,
    vercelUrl: process.env.VERCEL_URL
};

// Validate required environment variables
const requiredEnvVars = [
    'DB_URI',
    'JWT_SECRET',
    'XERO_CLIENT_ID',
    'XERO_CLIENT_SECRET',
    'XERO_TENANT_ID'
];

const missingEnvVars = requiredEnvVars.filter(envVar => !process.env[envVar]);

if (missingEnvVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvVars.join(', ')}`);
}

module.exports = config; 