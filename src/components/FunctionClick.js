import React from 'react'

const FunctionClick = () => {
    const handleClick =()=>{
        console.log("buttton clicked");
    }
  return (
    <div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FunctionClick