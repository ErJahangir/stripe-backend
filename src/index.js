if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const cors = require("cors");
const Stripe = require("stripe");

const app = express();
app.use(cors());
app.use(express.json());

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-08-16",
});

// Create Payment Intent
app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount = 500, currency = "usd" } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method_types: ["card", "card_google_pay"], // ADD THIS
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: "never",
      },
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Export Express app to Vercel
module.exports = app;

// Local development only
if (require.main === module) {
  const port = process.env.PORT || 4242;
  app.listen(port, () => console.log(`Server running on port ${port}`));
}
