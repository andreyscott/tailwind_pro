import React from 'react'


const teams = [
    {
      job: 'CEO / CTO',
      name: 'Aaron SarginSon',
      imageSrc: 'https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b510183218d5e6f542a017_Aaron.png',
      imageAlt: 'Aaron SarginSon.',
      description: 'Aaron is a technologist, believing that technology can solve many of the problems affecting humanity today. An innovator with a keen interest in building as big as he talks, Aaron is the conceptual founder and main driving force behind Trigan and the Smartest City project. He has a Computer Science degree and experience in software and hardware architecture, embedded systems design, programming, project management, business leadership, web development, network administration and systems administration.',
          href: '#',
    },
    {
        job: 'CMO',
        name: 'Farooq Chisty',
        imageSrc: 'https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b510183eba99e9d7956011_Farooq.png',
        imageAlt: 'Farooq Chisty.',
        description: 'Farooq is a growth marketer with 7+ years of entrepreneurial and marketing experience in commerce, blockchain, ed-tech, DeFi, fintech and SaaS.He has managed Marketing budgets of over $10 million in the past 5 years. While leading marketing at a fintech company Farooq generated more than $80 million in revenue within 2 years. Built a web3 game-fi project called solgames.fun and won Solana India hackathon under NFT P2E category 2021 for solgames.fun, an NFT gaming marketplace. He has worked as a web3 marketing consultant for Midas Capital, PENX DAO, Hobblyns NFTs, Superteam DAO, Quadra, Questbook and more.',
            href: '#',
      },
      {
        job: 'CSO',
        name: 'Oscar Sanz-Paris',
        imageSrc: 'https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b5101836e4705c8d77ffd3_Oscar.png',
        imageAlt: 'Oscar Sanz-Paris',
        description: 'Oscar brings over two decades of experience in banking, capital markets and finance to Trigan. His current efforts are focused on ESG investments - social impact in particular, and DeFi. He is based between Washington D.C. and London. He has held board positions in multinational companies, is founder of Castille Capital Global Markets, an alternative asset manager, and is a senior associate research fellow for the digital economy at Globec, a European think tank.',
            href: '#',
      },
      {
        job: 'COO',
        name: 'Dr. Gunel Sarginson',
        imageSrc: 'https://uploads-ssl.webflow.com/62b42d68bf74cf04cd20f5c7/62b51018ed3ca312442ebb44_Gunel.png',
        imageAlt: 'Dr. Gunel Sarginson',
        description: 'Gunel is very interested in the application of technology to solve health and wellbeing issues. A Medical Doctor (Paediatrician), she also holds a second degree in Health and Social Policy. Gunel has a wide, varied background in sales / marketing and management at major corporations in multiple countries, including the UK. Additionally, she has held board positions previously and has strong entrepreneurial experience. Gunel is extremely excited about top tier blockchain related projects (especially Trigan!) and is fully fluent in 5 languages.',
            href: '#',
      },
     
  ]

export const About  = ( ) => {
  return (
<section className="relative py-20 overflow-hidden bg-white">
    <div className="container mx-auto  justify-center items-center text-center px-4">
<p className="  bg tracking-wide mb-4 text-center mt-5 text-2xl lg:text-3xl font-normal text-black  ">
LEADERSHIP</p>
        <h2 className=" mt-5  mb-10 px-12 text-base   leading-tight ">
        A team with a wide sector experience from finance, development, medicine and innovation with a passion for change
    </h2>
    </div>
    {/* <span className="absolute top-0 right-0 flex flex-col items-end mt-0 -mr-16 opacity-60">
        <span className="container hidden w-screen h-32 max-w-xs mt-20 transform rounded-full rounded-r-none md:block md:max-w-xs lg:max-w-lg 2xl:max-w-3xl bg-blue-50">Test</span>
    </span> */}

    <span className="absolute bottom-0 left-0"> </span>

    <div className="relative px-16 mx-auto  max-w-7xl">
        <div className="grid  w-full grid-cols-2 gap-10 sm:gr id-cols-3 lg:grid-cols-4">
         {teams.map((team) => (
<div key={team.name} className="flex flex-col items-center justify-center col-span-1">
                <div className="relative p-5">
                    <div className="absolute z-10  w-full h-full -mt-5 -ml-5 rounded-full  bg-blue-50"></div>
                    <img className="relative z-20 w-full   rounded-full" src={team.imageSrc} alt={team.imageAlt} />
     
                </div>
                <div className="mt-3 space-y-2 text-center">
                    <div className="space-y-1 text-lg font-medium leading-6">
                        <h3>{team.name }</h3>
                        <p className="text-blue-600">{team.job}</p>
                        <p className="text-gray-500 box-border  text-center lg:text-left text-sm leading-6 flex"> {team.description} </p>
                    </div>
                    <div className="relative flex items-center justify-center space-x-3">
                        <a href="#_" className="text-gray-300 hover:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
                        </a>
                        <a href="#_" className="text-gray-300 hover:text-gray-400">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
                        </a>
                    </div>
                </div>
            </div>

))}
        </div>
    </div>
</section>

  )
}
