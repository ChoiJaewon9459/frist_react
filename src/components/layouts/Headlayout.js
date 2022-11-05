import Headers from 'components/Hearder'
import React from 'react'

const Headlayout = ({ children }) => {
  return (
    <div>
      <Headers />
      {children}
    </div>
  )
}

export default Headlayout;


