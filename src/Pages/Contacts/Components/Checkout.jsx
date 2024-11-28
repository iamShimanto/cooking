import React from 'react'
import CommonCheckout from '../Common/CommonCheckout'

const Checkout = () => {
  return (
    <>
        <section className='mt-[160px]' id='recipe'>
          <div className="container">
            <div className="row">
              <h2 className='text-4xl font-semibold font-inter text-black tracking-[-4%] text-center pb-20'>Check out the delicious recipe</h2>
              <div className='flex justify-between'>
                <CommonCheckout image={<img src="images/checkout-contact-1.png" alt="checkout" />} body={'Mixed Tropical Fruit Salad with Superfood Boosts '} time={'30 Minutes'} name={'Healthy'}/>

                <CommonCheckout image={<img src="images/checkout-contact-1.png" alt="checkout" />} body={'Mixed Tropical Fruit Salad with Superfood Boosts '} time={'30 Minutes'} name={'Healthy'}/>

                <CommonCheckout image={<img src="images/checkout-contact-1.png" alt="checkout" />} body={'Mixed Tropical Fruit Salad with Superfood Boosts '} time={'30 Minutes'} name={'Healthy'}/>

                <CommonCheckout image={<img src="images/checkout-contact-1.png" alt="checkout" />} body={'Mixed Tropical Fruit Salad with Superfood Boosts '} time={'30 Minutes'} name={'Healthy'}/>

              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Checkout
