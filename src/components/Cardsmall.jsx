import React from 'react'

const callouts = [
    {
      date: 'JULY 4, 2016',
      name: 'Concept design of Trigan Metaverse has begun!',
      imageSrc: 'https://uploads-ssl.webflow.com/62b42d69bf74cf28f620f5cb/62b4fc4536e470d71277705b_triganconcept-03.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit dui, fermentum id facilisis sit amet, imperdiet ut est.',
          href: '#',
    },
    {
        date: 'JULY 4, 2016',
        name: ' Our team is growing day by day',
        imageSrc: 'https://uploads-ssl.webflow.com/62b42d69bf74cf28f620f5cb/62b4fd423eba995c7f94c92f_Image3.png',
        imageAlt: '.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit dui, fermentum id facilisis sit amet, imperdiet ut est.',
            href: '#',
      },
      {
        date: 'JULY 4, 2016',
        name: '  How to show and hide content with Webflow click interactions',
        imageSrc: 'https://uploads-ssl.webflow.com/62b42d69bf74cf28f620f5cb/62b42d69bf74cfabd920f5da_Photo-5.jpg',
        imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean velit dui, fermentum id facilisis sit amet, imperdiet ut est.',
            href: '#',
      },
     
  ]

export const Cardsmall = () => {
  return (
   <>
       <div className="mt-6 mb-20 pb-12 space-y-12 lg:space-y-6  lg:grid lg:grid-cols-3 gap-x-10">
          {callouts.map((callout) => (
<div key={callout.name}  className="overflow-hidden  rounded-sm h-90 w-96  cursor-pointer m-auto">
    {/* a  */}
    <div href="#" className="w-full block overflow-hidden  h-full">
        <div className="  hover:bg-[#531fff]">
        <img alt={callout.imageAlt} src={callout.imageSrc} className="max-h-40  hover:opacity-70 w-full object-cover"/>
     </div>
        <div className="bg-white dark:bg-gray-800 w-full px-1 py-3">
            {/* //create date here */}
            <div className=" mb-2 text-[#bdbdbd] text-sm uppercase">{callout.date}</div>
            <p className=" text-[#5e1fff] hover:text-black mb-4 text-base block font-medium">
            {/* Concept design of Trigan Metaverse has begun! */}
            {callout.name}
            </p>
       
            <p className=" text-black dark:text-gray-300 text-sm ">
                 {callout.description}
            </p>
        </div>
    </div>
</div>
            ))}
</div>


</>

  )
}