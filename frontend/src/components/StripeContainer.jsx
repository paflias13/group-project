import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import styled from "styled-components"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = 'pk_test_51JefzZEZIPXBEfAYBIwC4YLrbyiGtOO5WN9VPZlh6IH8XcqGhkCq3Ft0gMlOQ9xILFWLu9Dd6eYD9kQoH4eoSnFX00g5xm3l6Q '

const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
    return (
        <Elements stripe={stripeTestPromise}>
            <PaymentForm />
        </Elements>
    )

}
export default StripeContainer