import React from 'react';
import { Link } from 'gatsby';
import tw from "twin.macro"
import styled from "@emotion/styled"

import BSG500 from "../../images/bsg-500x500.jpg"


const TWCard = () => {
    return (
        <Wrapper>
            <Img src={BSG500} alt={`logo`}></Img>
            <TextWrapper>
                <H1>TWCard</H1>
                <P1>Lorem ipsum dolor sit amet consectetur adipisicing elit In odit exercitationem fuga. Travel nearly doubled in size since last year. They integrated Stripe to deliver se</P1>
                <Button>Read More</Button>
            </TextWrapper>
        </Wrapper>
    )
}

export default TWCard

const Wrapper = styled.div`
    ${tw`md:flex bg-white rounded-lg p-6`}
    
`
// ${tw`w-2/3 p-4`}
const TextWrapper = styled.div`
    ${tw`text-center md:text-left`}    
`

const Button = tw.button`
    px-6 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded
`

const H1 = tw.h1`
    text-gray-900 font-bold text-2xl
`

const P1 = tw.p`
text-gray-600
`


const Img = tw.img`
    h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6
`




// 1  <div class="bg-white rounded-lg p-6">
// 2    <img class="h-16 w-16 rounded-full" src="avatar.jpg">
// 3    <div>
// 4      <h2>Erin Lindford</h2>
// 5      <div>Product Engineer</div>
// 6      <div>erinlindford@example.com</div>
// 7      <div>(555) 765-4321</div>
// 8    </div>
// 9  </div>

{/* <div class="md:flex bg-white rounded-lg p-6">
2    <img class="h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6" src="avatar.jpg">
3    <div class="text-center md:text-left">
4      <h2 class="text-lg">Erin Lindford</h2>
5      <div class="text-purple-500">Product Engineer</div>
6      <div class="text-gray-600">erinlindford@example.com</div>
7      <div class="text-gray-600">(555) 765-4321</div>
8    </div>
9  </div> */}