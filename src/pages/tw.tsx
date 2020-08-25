import tw from "twin.macro"
import React from "react"

const Heading = tw.h1`
  text-2xl text-red-500 uppercase
`

export default () => (
  <div>
    <Heading>Hello, world!</Heading>
  </div>
)