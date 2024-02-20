import React from 'react'

function ButtonComponent({ children,funCounter}) {
  console.log();
  return (
    <div>
      <button onClick={children=='increase'? ()=>funCounter("increase"): funCounter}>{children}</button>
    </div>
  )
}

export default ButtonComponent;
