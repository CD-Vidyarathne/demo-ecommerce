import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

const stripe = new Stripe(process.env.STRIPE_SEC, {
  apiVersion: "2020-08-27",
});

const router = express.Router();

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (!stripeErr) {
        res.status(200).json(stripeRes);
      } else {
        res.status(500).json(stripeErr);
      }
    }
  );
});

export default router;
