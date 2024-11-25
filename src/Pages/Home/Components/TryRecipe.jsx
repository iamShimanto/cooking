import React from 'react'
import CommonTryRecipe from '../Common/CommonTryRecipe'

const TryRecipe = () => {
  return (
    <>
      <section className='mt-[180px]'>
        <div className="container">
          <div className="row">
            <div className='flex justify-between px-[75px] items-center mb-20'>
              <h2 className='w-[511px] text-[48px] font-inter font-semibold text-black tracking-[-4%]'>Try this delicious recipe
              to make your day</h2>
              <p className='w-[620px] text-base font-normal font-inter text-black leading-[28px] opacity-[60%]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            </div>
            <div className='flex flex-wrap gap-[72px] justify-center '>
                <CommonTryRecipe image={<img src="images/recipe11.png" alt="recipe" />} details={"Mixed Tropical Fruit Salad with Superfood     Boosts "} time={"30 Minutes"} name={"Healthy"}/>
                <CommonTryRecipe image={<img src="images/recipe12.png" alt="recipe" />} details={"Big and Juicy Wagyu Beef Cheeseburger "} time={"30 Minutes"} name={"Western"}/>
                <CommonTryRecipe image={<img src="images/recipe13.png" alt="recipe" />} details={"Healthy Japanese Fried Rice with Asparagus "} time={"30 Minutes"} name={"Healthy"}/>
                <CommonTryRecipe image={<img src="images/recipe14.png" alt="recipe" />} details={"Cauliflower Walnut Vegetarian Taco Meat "} time={"30 Minutes"} name={"Eastern"}/>
                <CommonTryRecipe image={<img src="images/recipe15.png" alt="recipe" />} details={"Rainbow Chicken Salad with Almond Honey Mustard Dressing "} time={"30 Minutes"} name={"Healthy"}/>
                <CommonTryRecipe image={<img src="images/recipe16.png" alt="recipe" />} details={"Barbeque Spicy Sandwiches with Chips  "} time={"30 Minutes"} name={"Snack"}/>
                <CommonTryRecipe image={<img src="images/recipe17.png" alt="recipe" />} details={"Firecracker Vegan Lettuce Wraps - Spicy!  "} time={"30 Minutes"} name={"Seafood"}/>
                <CommonTryRecipe image={<img src="images/recipe18.png" alt="recipe" />} details={"Chicken Ramen Soup with Mushroom  "} time={"30 Minutes"} name={"Japanese"}/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default TryRecipe
