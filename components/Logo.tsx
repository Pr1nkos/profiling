import React from "react"

function Logo() {
  return (
    <svg id='logo' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
      <title>Logo</title>
      <g>
        <g id='' transform='translate(35.000000, 35.000000)'>
          <path fill='currentColor' />
        </g>
        <path
          stroke='currentColor'
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z'
        />
      </g>
    </svg>
  )
}

export default Logo
