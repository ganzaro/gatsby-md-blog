import React from 'react';
import { Link } from 'gatsby';
import tw from "twin.macro"
import styled from "@emotion/styled"

import BSG500 from "../../images/bsg-500x500.jpg"


const BackpackCard = () => {
    return (
        <Wrapper>
            <Img src={BSG500} alt={`logo`}></Img>
            <TextWrapper>
                <H1>Backpack</H1>
                <P1>Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam qui</P1>
                <Button>Read More</Button>
            </TextWrapper>
        </Wrapper>
    )
}

export default BackpackCard

const Wrapper = styled.div`
    ${tw`p-3`}
    ${tw`flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden`}
    
`
// ${tw`w-2/3 p-4`}

const H1 = tw.h1`
    text-gray-900 font-bold text-2xl
`

const P1 = tw.p`
    mt-2 mb-2 text-gray-600 text-sm
`

const Button = tw.button`
    px-6 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded
`

const Img = tw.img`
    w-1/3 bg-cover
`

const TextWrapper = styled.div`
    ${tw`w-2/3 p-4`}    
`

// https://tailwindcomponents.com/component/product-card-with-evaluation
// <!-- component -->
// <div class="py-6">
//   <div class="flex max-w-md bg-white shadow-lg rounded-lg overflow-hidden">
//     <div class="w-1/3 bg-cover" style="background-image: url('https://images.unsplash.com/photo-1494726161322-5360d4d0eeae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80')">
//     </div> 
//     <div class="w-2/3 p-4">
//       <h1 class="text-gray-900 font-bold text-2xl">Backpack</h1>
//       <p class="mt-2 text-gray-600 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga id nam quia</p>
//       <div class="flex item-center mt-2">
//         <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
//           <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
//         </svg>
//         <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
//           <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
//         </svg>
//         <svg class="w-5 h-5 fill-current text-gray-700" viewBox="0 0 24 24">
//           <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
//         </svg>
//         <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
//           <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
//         </svg>
//         <svg class="w-5 h-5 fill-current text-gray-500" viewBox="0 0 24 24">
//           <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
//         </svg>
//       </div>
//       <div class="flex item-center justify-between mt-3">
//         <h1 class="text-gray-700 font-bold text-xl">$220</h1>
//         <button class="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">Add to Card</button>
//       </div>
//     </div>
//   </div>
// </div>