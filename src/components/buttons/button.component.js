import React, { useEffect } from 'react'

const ButtonComponent = ({ text, onClick }) => {
  const handleClick = () => {
    if (onClick) onClick()
  }

  useEffect(() => {
    console.log('Button onload')
  }, [])

  return <button onClick={handleClick}> {text} </button>
}

export default ButtonComponent
