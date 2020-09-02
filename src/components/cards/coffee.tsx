import React from 'react';
import { Link } from 'gatsby';
import tw from "twin.macro"
import styled from "@emotion/styled"

import BSG500 from "../../images/bsg-500x500.jpg"


const CoffeeCard = () => {
    return (
        <Wrapper>
            
            {/* <CardWrapper> */}
            <Img src={BSG500} alt={`logo`}></Img>
            <TextWrapper>
                <H1>CoffeeCard</H1>
                <p>date</p>
                <P1>Coffee nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud.</P1>
                <Button2>Read More</Button2>
            </TextWrapper>
            {/* </CardWrapper> */}
        </Wrapper>
    )
}

export default CoffeeCard

const Wrapper = styled.div`
    ${tw`max-w-md w-full lg:flex md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64`}
    
`

const CardWrapper = styled.div`
${tw`md:flex border-r border-b border-l border-gray-200 lg:border-l-0 lg:border-t lg:border-gray-100 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal`}
${tw`mb-8`}
`

const H1 = tw.h1`
    text-gray-900 font-bold text-2xl
`

const P1 = tw.p`
    mt-2 mb-2 text-gray-600 text-sm
`

const Button = tw.button`
    flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900
`

const Img = tw.img`
h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden
`

const Img2 = tw.img`
    w-1/5 bg-cover md:rounded-t-none md:rounded-l-lg md:rounded-r-lg
`

const TextWrapper = styled.div`
    ${tw`w-2/3 p-4`}    
`

const Button2 = tw.button`
    px-6 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded
`

// https://tailwindcomponents.com/component/horizontal-card

// <!-- component -->
// <div class="max-w-md w-full lg:flex">
//   <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" style="background-image: url('https://tailwindcss.com/img/card-left.jpg')" title="Woman holding a mug">
//   </div>
//   <div class="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
//     <div class="mb-8">
//       <p class="text-sm text-grey-dark flex items-center">
//         <svg class="text-grey w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
//           <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
//         </svg>
//         Members only
//       </p>
//       <div class="text-black font-bold text-xl mb-2">Can coffee make you a better developer?</div>
//       <p class="text-grey-darker text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
//     </div>
//     <div class="flex items-center">
//       <img class="w-10 h-10 rounded-full mr-4" src="https://pbs.twimg.com/profile_images/885868801232961537/b1F6H4KC_400x400.jpg" alt="Avatar of Jonathan Reinink">
//       <div class="text-sm">
//         <p class="text-black leading-none">Jonathan Reinink</p>
//         <p class="text-grey-dark">Aug 18</p>
//       </div>
//     </div>
//   </div>
// </div>