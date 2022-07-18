import React from 'react'

export const Card = () => {
  return (
   
<div className="overflow-hidden shadow-lg rounded-sm h-90 w-96  cursor-pointer m-auto">
    {/* a  */}
    <div href="#" className="w-full block overflow-hidden group-hover:opacity-7 h-full">
        <div className=" hover:opacity-50">
        <img alt="blog photo" src="https://uploads-ssl.webflow.com/62b42d69bf74cf28f620f5cb/62b4fc4536e470d71277705b_triganconcept-03.jpg" className="max-h-40 w-full object-cover"/>
     </div>
        <div className="bg-white dark:bg-gray-800 w-full px-1 py-3">
            {/* //create date here */}
            <div className=" mb-2 text-[#bdbdbd] text-xs uppercase">July 4, 2016</div>
            <p className=" text-[#5e1fff] mb-4 text-base block font-medium">
            Concept design of Trigan Metaverse has begun!
            </p>
       
            <p className=" text-black dark:text-gray-300 text-sm ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit dui, fermentum id facilisis sit amet, imperdiet ut est.
            </p>
        </div>
    </div>
</div>

  )
}
