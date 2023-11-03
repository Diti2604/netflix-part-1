
{/**
import { createCheckoutSession, getStripePayments } from '@stripe/firestore-stripe-payments';
import app from '../firebase';


const payments = getStripePayments(app, {
  productsCollection: "products",
  customersCollection: 'customers',
})

const loadCheckout = async (priceId: string) => {
  await createCheckoutSession(payments, {
    price: priceId,
    success_url: window.location.origin,
    cancel_url: window.location.origin,
  })
    .then((snapshot) => window.location.assign(snapshot.url))
    .catch((error) => console.log(error.message))
}



export default payments;
export { loadCheckout}
 */}
export async function createCheckoutSession(uid: string) {
  const firestore = firebase.firestore();

  // Create a new checkout session in the subollection inside this users document
  const checkoutSessionRef = await firestore
    .collection("users")
    .doc(uid)
    .collection("checkout_sessions")
    .add({
      // replace the price_XXX value with the correct value from your product in stripe.
      price: "price_XXX ",
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });

  // Wait for the CheckoutSession to get attached by the extension
  checkoutSessionRef.onSnapshot(async (snap) => {
    const { sessionId } = snap.data();
    if (sessionId) {
      // We have a session, let's redirect to Checkout
      // Init Stripe
      const stripe = await getStripe();
      stripe.redirectToCheckout({ sessionId });
    }
  });
}
