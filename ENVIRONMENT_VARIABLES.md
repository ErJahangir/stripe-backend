# Environment Variables

This project requires the following environment variables to be set:

## Required Variables

- **STRIPE_SECRET_KEY**: Your Stripe secret key for payment processing
  - Get this from your Stripe dashboard (https://dashboard.stripe.com/apikeys)
  - Use test keys for development: `sk_test_...`
  - Use live keys for production: `sk_live_...`

## Optional Variables

- **PORT**: The port number for the server (defaults to 4242)

## Setting Environment Variables on Vercel

1. Go to your Vercel dashboard
2. Navigate to your project settings
3. Go to "Environment Variables"
4. Add the required variables:
   - Name: `STRIPE_SECRET_KEY`
   - Value: Your Stripe secret key
   - Environment: Production (and Preview if needed)

## Local Development

Create a `.env` file in the root directory with:

```
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key_here
PORT=4242
```
