const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY); 

//'https://react-gym-bice.vercel.app'
const YOUR_DOMAIN = 'https://react-gym-bice.vercel.app'

const submitPayment = async (req, res) => {
  const {priceId , email} = req.body;

  const session = await stripe.checkout.sessions.create({
    success_url: `${YOUR_DOMAIN}/registration`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    customer_email: email,
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
