import React from 'react';
import { Link } from 'gatsby';
import tw from "twin.macro"
import styled from "@emotion/styled"

import BSG500 from "../images/bsg-500x500.jpg"

const Card1 = () => {
    return (
        <Wrapper>
            <CenteredCard>
                <H2>A Heading</H2>
                <p>Date</p>
                <p>Excerpt</p>
                <button>Read More</button>
            </CenteredCard>
        </Wrapper>
    )
}

// export default Card1

const Wrapper = tw.div`
    min-h-screen flex items-center justify-center bg-gray-100
`
const CenteredCard = tw.div`
    max-w-md px-10 py-12 bg-white rounded-lg shadow-lg
`

const H2 = tw.h2`
  text-2xl text-gray-900 uppercase font-bold leading-snug
`

// 
const Card2 = () => {
    return (
        <PadTop5>
        <Wrapper2>
            <Padxy>
                <ImgLeft src={BSG500} alt={`${name} Logo`} />
                <TextBold>A Heading</TextBold>
                <TextP>Date</TextP>
                <TextP>Excerpt</TextP>
                <button>Read More</button>
            </Padxy>
        </Wrapper2>
        </PadTop5>
    )
}

export default Card2

const PadTop5 = tw.div`
    pt-5
`

const Wrapper2 = tw.div`
max-w-sm rounded overflow-hidden shadow-lg bg-white
`

const Padxy = tw.div`
px-6 py-4
`

const ImgLeft = tw.img`
    w-full
`

const TextBold = tw.div`
    font-bold text-xl mb-2
`

const TextP = tw.p`
text-gray-700 text-base
`