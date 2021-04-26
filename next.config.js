module.exports = {
  env: {
    api_key: process.env.API_KEY,
    delivery_token: process.env.DELIVERY_TOKEN,
    environment: process.env.ENVIRONMENT,
    region: process.env.REGION ? process.env.REGION : 'us',
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
