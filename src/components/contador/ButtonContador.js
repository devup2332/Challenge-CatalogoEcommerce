import React from 'react';



function ButtonContador({handler, icon,buttonRef,btnAllow}) {
   return (
      <div>
         <button onClick={handler} className={btnAllow?"button-on-contador disabled": "button-on-contador"} ref={buttonRef} disabled={btnAllow}>{icon}</button>
      </div>
   )
}

export default ButtonContador
