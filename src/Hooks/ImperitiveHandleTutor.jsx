import React,{ useRef } from 'react';
import Button from '../Components/Button'


function ImperitiveHandleTutor(props) {
    const buttonRef = useRef(null)
    
    const onClick =  () => {
       buttonRef.current.alterToogle()
    }
    return (
        <div>
             <button
               onClick={onClick}
             >
                Button from Parent
             </button>
             <Button  ref={buttonRef}/>
        </div>
    );
}

export default ImperitiveHandleTutor;