import React,{useImperativeHandle, forwardRef, useState} from 'react';

const Button = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false)

    useImperativeHandle(ref, ()=> ({
        alterToogle() {
          setToggle(!toggle)
       }
    }))

    return (
        <div>
             <button>
               Button from Child
             </button>
             <br/>
             {toggle && <span>Toogle</span>}
        </div>
    );
});

export default Button;