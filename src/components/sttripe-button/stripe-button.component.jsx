import React from 'react'
import StripeCheckout from 'react-stripe-checkout'


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishablekey = 'pk_test_51HZ85uIWmXOJgVcoNgcb3JXy8BEuQlRRHNFeeFo2MgVRoDaMyn3lVpJZye4w0xXfZodVoHTrd3yZ8vNHtKaUSBFD00RHwlBthA'


const onToken = token => {
    console.log('====================================');
    console.log(token);
    console.log('====================================');
    alert('Payment Successful')
}

    return (
        <StripeCheckout
            label = "Pay Now"
            name = 'Black Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your totall is $${price}`}
            amount = {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripekey= {publishablekey}
        />
    )
}


export default StripeCheckoutButton