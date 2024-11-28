import React from 'react'
import CommonRecipe from '../Common/CommonRecipe';
import { Link } from 'react-router-dom';

const Recipes = () => {
  return (
    <>
      <section className='pt-[183px]' id='recipe'>
        <div className="container">
          <div className="row">
            <h2 className='text-[48px] font-inter font-semibold text-black tracking-[-4%] text-center'>Simple and tasty recipes</h2>
            <p className='w-[706px] text-base font-normal font-inter text-black leading-[28px] mt-[24px] text-center mx-auto opacity-[60%]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <div className='flex flex-wrap justify-evenly gap-[40px] mt-[96px]'>
              <Link>
                <CommonRecipe image={<img src="images/r1.png" alt="bg" />} details={'Big and Juicy Wagyu Beef Cheeseburger'} time={'30 Minutes'} name={'Snack'}/>
              </Link>
              <Link>
                <CommonRecipe image={<img src="images/r2.png" alt="bg" />} details={'Fresh Lime Roasted Salmon with Ginger Sauce'} time={'30 Minutes'} name={'Fish'}/>
              </Link>
              <Link>
                <CommonRecipe image={<img src="images/r3.png" alt="bg" />} details={'Strawberry Oatmeal Pancake with Honey Syrup'} time={'30 Minutes'} name={'Breakfast'}/>
              </Link>
              <Link>
                <CommonRecipe image={<img src="images/r4.png" alt="bg" />} details={'Fresh and Healthy Mixed Mayonnaise Salad'} time={'30 Minutes'} name={'Healthy'}/>
              </Link>
              <Link >
                <CommonRecipe image={<img src="images/r5.png" alt="bg" />} details={'Chicken Meatballs with Cream Cheese'} time={'30 Minutes'} name={'Meat'}/>
              </Link>
              <Link >
                  <img className='w-[400px] h-[414px] mt-[20px] rounded-[20px]' src="images/Ads.png" alt="ads" />
              </Link>
              <Link >
                <CommonRecipe image={<img src="images/r6.png" alt="bg" />} details={'Fruity Pancake with Orange & Blueberry'} time={'30 Minutes'} name={'Sweet'}/>
              </Link>
              <Link >
                <CommonRecipe image={<img src="images/r7.png" alt="bg" />} details={'The Best Easy One Pot Chicken and Rice'} time={'30 Minutes'} name={'Snack'}/>
              </Link>
              <Link >
                <CommonRecipe image={<img src="images/r8.png" alt="bg" />} details={'The Creamiest Creamy Chicken and Bacon Pasta'} time={'30 Minutes'} name={'Noodles'}/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Recipes
