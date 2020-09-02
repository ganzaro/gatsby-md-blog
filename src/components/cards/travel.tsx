import React from 'react';
import { Link } from 'gatsby';
import tw from "twin.macro"
import styled from "@emotion/styled"

import BSG500 from "../../images/bsg-500x500.jpg"


const TravelCard = () => {
    return (
        <Wrapper>
            
            {/* <CardWrapper> */}
            <Img src={BSG500} alt={`logo`}></Img>
            <TextWrapper>
                <H1>TravelCard</H1>
                <p>date</p>
                <P1>Travel nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud.</P1>
                <Button2>Read More</Button2>
            </TextWrapper>
            {/* </CardWrapper> */}
        </Wrapper>
    )
}

export default TravelCard

const Wrapper = styled.div`
    ${tw`md:flex shadow-lg  mx-6 md:mx-auto my-10 max-w-lg md:max-w-2xl h-64`}
    
`

const CardWrapper = styled.div`
${tw`w-full md:w-2/3 px-4 py-4 bg-white rounded-lg`}
${tw`flex items-center`}
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
h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5
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






// https://tailwindcomponents.com/component/product-preview

// <!-- component -->
// <!-- item card -->
// <div class="md:flex shadow-lg  mx-6 md:mx-auto my-40 max-w-lg md:max-w-2xl h-64">
//    <img class="h-full w-full md:w-1/3  object-cover rounded-lg rounded-r-none pb-5/6" src="https://ik.imagekit.io/q5edmtudmz/FB_IMG_15658659197157667_wOd8n5yFyXI.jpg" alt="bag">
//    <div class="w-full md:w-2/3 px-4 py-4 bg-white rounded-lg">
//       <div class="flex items-center">
//          <h2 class="text-xl text-gray-800 font-medium mr-auto">Your Travel Buddy</h2>
//          <p class="text-gray-800 font-semibold tracking-tighter">
//             only
//             <i class="text-gray-600 line-through">60$</i>
//             48$
//          </p>
//       </div>
//       <p class="text-sm text-gray-700 mt-4">
//          Lorem, ipsum dolor sit amet consectetur Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequ adipisicing elit. Amet veritatis ipsam reiciendis numquam tempore commodi ipsa suscipit laboriosam, sit earum at sequi.
//       </p>
//       <div class="flex items-center justify-end mt-4 top-auto">
//          <button class="bg-white text-red-500 px-4 py-2 rounded mr-auto hover:underline">Delete</button>
//          <button class=" bg-gray-200 text-blue-600 px-2 py-2 rounded-md mr-2">Edit</button>
//          <button class=" bg-blue-600 text-gray-200 px-2 py-2 rounded-md ">Publish</button>
//       </div>
//    </div>
// </div>