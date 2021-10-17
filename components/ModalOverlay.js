import React from 'react';
import {createPortal} from 'react-dom';
import { Transition } from '@headlessui/react';


const Overlay=({children,show})=>{
        
        React.useEffect(()=>{

        },[])
        return(
             <Transition
            show={show}
            className={`fixed inset-0  bg-black  bg-opacity-90`}
            enter="transition-opacity  duration-50"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            >
           
              {children}
          
            </Transition>
            // <Transition as="div" className={`fixed inset-0  bg-black  bg-opacity-90 `}
            // show={show}
            // enter="transition-opacity duration-100"
            // enterFrom="opacity-0"
            // enterTo="opacity-100"
            // leave="transition-opacity delay-200 duration-300"
            // leaveFrom="opacity-100"
            // leaveTo="opacity-0"
            // >
               
            // {children} 
            
        
            // </Transition>
        )
    
    
}


export default function ModalOverlay({children,show}){
  
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
    
      setMounted(true)
       return () => setMounted(false)
    }, [show])
  if(mounted){
      return (
          createPortal(<Overlay show={show}>{children}</Overlay>,
            document.getElementById('modals'))
      )
      
  }
    return (<></>)
    

}