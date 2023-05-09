const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 

//'https://react-gym-bice.vercel.app'
const YOUR_DOMAIN = 'https://react-gym-bice.vercel.app'

const submitPayment = async (req, res) => {
  const {priceId} = req.body;

  const session = await stripe.checkout.sessions.create({
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    payment_method_types: ['card'],
    line_items: [
      {price: priceId, quantity: 1},
    ],
    mode: 'subscription',
  });
  res.redirect(303, session.url);
};

module.exports = {
  submitPayment
};
