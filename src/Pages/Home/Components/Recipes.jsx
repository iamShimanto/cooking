import React from 'react'
import CommonRecipe from '../Common/CommonRecipe';
import { Link } from 'react-router-dom';

const Recipes = () => {
  return (
    <>
      <section className='pt-[183px]'>
        <div className="container">
          <div className="row">
            <h2 className='text-[48px] font-inter font-semibold text-black tracking-[-4%] text-center'>Simple and tasty recipes</h2>
            <p className='w-[706px] text-base font-normal font-inter text-black leading-[28px] mt-[24px] text-center mx-auto opacity-[60%]'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
            <div className='flex flex-wrap justify-evenly gap-[40px]'>
              <Link>
                <CommonRecipe image={<img src="images/r1.png" alt="bg" />} details={'Big and Juicy Wagyu Beef Cheeseburger'} time={'30 Minutes'} name={'Snack'}/>
              </Link>
              <Link>
                <CommonRecipe image={<img src="images/r1.png" alt="bg" />} details={'Big and Juicy Wagyu Beef Cheeseburger'} time={'30 Minutes'} name={'Snack'}/>
              </Link>
              <Link>
                <CommonRecipe image={<img src="images/r1.png" alt="bg" />} details={'Big and Juicy Wagyu Beef Cheeseburger'} time={'30 Minutes'} name={'Snack'}/>
              </Link>
              <Link>
                <CommonRecipe image={<img src="images/r1.png" alt="bg" />} details={'Big and Juicy Wagyu Beef Cheeseburger'} time={'30 Minutes'} name={'Snack'}/>
              </Link>
              <Link>
                <CommonRecipe image={<img src="images/r1.png" alt="bg" />} details={'Big and Juicy Wagyu Beef Cheeseburger'} time={'30 Minutes'} name={'Snack'}/>
              </Link>
              <Link>
                  <img className='w-[400px] h-[414px] mt-[20px] rounded-[20px]' src="images/Ads.png" alt="ads" />
              </Link>
              <Link>
                <CommonRecipe image={<img src="images/r1.png" alt="bg" />} details={'Big and Juicy Wagyu Beef Cheeseburger'} time={'30 Minutes'} name={'Snack'}/>
              </Link>
              <Link>
                <CommonRecipe image={<img src="images/r1.png" alt="bg" />} details={'Big and Juicy Wagyu Beef Cheeseburger'} time={'30 Minutes'} name={'Snack'}/>
              </Link>
              <Link>
                <CommonRecipe image={<img src="images/r1.png" alt="bg" />} details={'Big and Juicy Wagyu Beef Cheeseburger'} time={'30 Minutes'} name={'Snack'}/>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Recipes
