import React from 'react'
import CommonBlogRecipe from '../Common/CommonBlogRecipe'
import TastyRecipe from '../Common/TastyRecipe'

const Recipes = () => {
  return (
    <>
        <section id='recipe' className='mt-[80px] mb-40'>
          <div className="container">
            <div className="row flex gap-10">
              <div className='flex flex-col gap-8'>
                
              <CommonBlogRecipe image={<img src="images/blog1.png" alt="recipe" />} head={'Crochet Projects for Noodle Lovers'} body={'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim '} personImg={<img src="images/b-p-1.png" alt="person" />} personName={'Wade Warren'} date={'12 November 2021'}/>

              <CommonBlogRecipe image={<img src="images/blog2.png" alt="recipe" />} head={'10 Vegetarian Recipes To Eat This Month'} body={'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim '} personImg={<img src="images/b-p-2.png" alt="person" />} personName={'Robert Fox'} date={'12 November 2021'}/>

              <CommonBlogRecipe image={<img src="images/blog3.png" alt="recipe" />} head={'Full Guide to Becoming a Professional Chef'} body={'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim  '} personImg={<img src="images/b-p-3.png" alt="person" />} personName={'Dianne Russell'} date={'12 November 2021'}/>

              <CommonBlogRecipe image={<img src="images/blog4.png" alt="recipe" />} head={'Simple & Delicious Vegetarian Lasagna'} body={'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim '} personImg={<img src="images/b-p-4.png" alt="person" />} personName={'Leslie Alexander'} date={'12 November 2021'}/>

              <CommonBlogRecipe image={<img src="images/blog5.png" alt="recipe" />} head={'Plantain and Pinto Stew with Aji Verde'} body={'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim  '} personImg={<img src="images/b-p-5.png" alt="person" />} personName={'Courtney Henry'} date={'12 November 2021'}/>

              <CommonBlogRecipe image={<img src="images/blog6.png" alt="recipe" />} head={'We’re Hiring a Communications Assistant!'} body={'Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim  '} personImg={<img src="images/b-p-6.png" alt="person" />} personName={'Albert Flores'} date={'12 November 2021'}/>

              </div>
              <div>
                  <h2 className='text-[32px] font-semibold font-inter text-black tracking-[-4%] pb-8'>Tasty Recipes</h2>
                  <div className='flex flex-col gap-6'>

                  <TastyRecipe image={<img src="images/b-t-1.png" alt="recipe" />} body={'Chicken Meatballs with Cream Cheese '} name={'By Andreas Paula'}/>
                  
                  <TastyRecipe image={<img src="images/b-t-2.png" alt="recipe" />} body={'Traditional Bolognaise Ragu'} name={'By Andreas Paula'}/>
                  
                  <TastyRecipe image={<img src="images/b-t-3.png" alt="recipe" />} body={'Pork and Chive Chinese Dumplings'} name={'By Andreas Paula'}/>
                  
                  </div>
                  <div className='mt-20'>
                    <img src="images/Ads.png" alt="ads" />
                  </div>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Recipes
