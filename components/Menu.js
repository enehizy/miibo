import React from 'react';
import MenuList from "./MenuList";
import ModalOverlay from "./ModalOverlay";
import MiiboLogo from "./MiiboLogo";
import { Transition } from "@headlessui/react";
export default function Menu({isOpen,close}) {
    
    
    return (

        <ModalOverlay show={isOpen}>
          <div className="delay-500" ></div>
            <Transition.Child as="div"
            enter={`transition-transform duration-300 `}
            enterFrom="-translate-x-64"
            enterTo="translate-x-0"
            leave="transition-transform duration-300"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-64"
            className={`bg-white w-[80%] md:w-[30%] lg:w-[21%] h-full`}
            >
            <header className="flex justify-between border-b-2 w-full p-3">
                <span className="block"> <MiiboLogo/></span>
                <button className="block" onClick={(e)=>{close(e)}}>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5 6.91L18.09 5.5L12.5 11.09L6.91 5.5L5.5 6.91L11.09 12.5L5.5 18.09L6.91 19.5L12.5 13.91L18.09 19.5L19.5 18.09L13.91 12.5L19.5 6.91Z" fill="black"/>
                </svg>
                </button>
            </header>
            <ul className="p-4 space-y-7">
    <MenuList text="Cart"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.90352 3.57145L3.63247 3H3.63506L3.91674 3.59932L3.90352 3.57145ZM7.50352 11.1615L4.58109 5H5.21H20C20 5.00186 19.9999 5.00362 19.9998 5.00524L16.4244 11.487L16.4232 11.4892C16.2558 11.7945 15.9287 12 15.55 12H8.1H7.51585L7.72296 11.6241L7.50352 11.1615ZM6.12584 14.5226L6.2544 14.2893L6.22986 14.3875L6.19986 14.5075L6.17 14.6269V14.75C6.17 15.4423 6.72772 16 7.42 16H7C6.45228 16 6 15.5477 6 15C6 14.8214 6.04586 14.6628 6.11824 14.5361L6.12209 14.5294L6.12584 14.5226ZM6.01 20C6.01 19.4457 6.4588 19 7 19C7.54772 19 8 19.4523 8 20C8 20.5477 7.54772 21 7 21C6.4588 21 6.01 20.5543 6.01 20ZM16.01 20C16.01 19.4457 16.4588 19 17 19C17.5477 19 18 19.4523 18 20C18 20.5477 17.5477 21 17 21C16.4588 21 16.01 20.5543 16.01 20Z" stroke="black" strokeWidth="2"/>
      </svg> 
     </MenuList>
     <MenuList text="Spaces">
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_234:1414" fill="white">
<path fill-rule="evenodd" clip-rule="evenodd" d="M22 12L12 3L2 12V21H22V12Z"/>
</mask>
<path d="M12 3L13.3379 1.51341L12 0.309275L10.6621 1.51341L12 3ZM22 12H24V11.1093L23.3379 10.5134L22 12ZM2 12L0.662071 10.5134L0 11.1093V12H2ZM2 21H0V23H2V21ZM22 21V23H24V21H22ZM10.6621 4.48659L20.6621 13.4866L23.3379 10.5134L13.3379 1.51341L10.6621 4.48659ZM3.33793 13.4866L13.3379 4.48659L10.6621 1.51341L0.662071 10.5134L3.33793 13.4866ZM4 21V12H0V21H4ZM22 19H2V23H22V19ZM20 12V21H24V12H20Z" fill="black" mask="url(#path-1-inside-1_234:1414)"/>
</svg>

     </MenuList>
     <MenuList text="Request for space">
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
     <path d="M18 13H17.32L15.32 15H17.23L19 17H5L6.78 15H8.83L6.83 13H6L3 16V20C3 21.1 3.89 22 4.99 22H19C20.1 22 21 21.11 21 20V16L18 13ZM17 7.95L12.05 12.9L8.51 9.36L13.46 4.41L17 7.95ZM12.76 2.29L6.39 8.66C6 9.05 6 9.68 6.39 10.07L11.34 15.02C11.73 15.41 12.36 15.41 12.75 15.02L19.11 8.66C19.5 8.27 19.5 7.64 19.11 7.25L14.16 2.3C13.78 1.9 13.15 1.9 12.76 2.29Z" fill="black"/>
    </svg>

     </MenuList>
     <MenuList text="List your space">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <mask id="path-1-inside-1_234:1426" fill="white">
       <path fill-rule="evenodd" clip-rule="evenodd" d="M17 12L9.5 3L2 12V21H17V12Z"/>
       </mask>
       <path d="M9.5 3L11.0364 1.71963L9.5 -0.1241L7.96356 1.71963L9.5 3ZM17 12H19V11.2759L18.5364 10.7196L17 12ZM2 12L0.463557 10.7196L0 11.2759V12H2ZM2 21H0V23H2V21ZM17 21V23H19V21H17ZM7.96356 4.28037L15.4636 13.2804L18.5364 10.7196L11.0364 1.71963L7.96356 4.28037ZM3.53644 13.2804L11.0364 4.28037L7.96356 1.71963L0.463557 10.7196L3.53644 13.2804ZM4 21V12H0V21H4ZM17 19H2V23H17V19ZM15 12V21H19V12H15Z" fill="black" mask="url(#path-1-inside-1_234:1426)"/>
       <path d="M17.472 11.3V8.388H14.56V7.212H17.472V4.3H18.648V7.212H21.56V8.388H18.648V11.3H17.472Z" fill="black"/>
       </svg>

     </MenuList>
     <MenuList text="Notifications">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z" fill="black"/>
       </svg>

     </MenuList>
     <MenuList text="Favourite">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M16.5 3C14.76 3 13.09 3.81 12 5.09C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.42 2 8.5C2 12.28 5.4 15.36 10.55 20.04L12 21.35L13.45 20.03C18.6 15.36 22 12.28 22 8.5C22 5.42 19.58 3 16.5 3ZM12.1 18.55L12 18.65L11.9 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 5.99 11.07 7.36H12.94C13.46 5.99 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55Z" fill="black"/>
       </svg>
     </MenuList>
     <MenuList text="Settings">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M19.14 12.936C19.176 12.636 19.2 12.324 19.2 12C19.2 11.676 19.176 11.364 19.128 11.064L21.156 9.47999C21.336 9.33599 21.384 9.07199 21.276 8.86799L19.356 5.54399C19.236 5.32799 18.984 5.25599 18.768 5.32799L16.38 6.28799C15.876 5.90399 15.348 5.59199 14.76 5.35199L14.4 2.80799C14.364 2.56799 14.16 2.39999 13.92 2.39999H10.08C9.83998 2.39999 9.64799 2.56799 9.61199 2.80799L9.25199 5.35199C8.66398 5.59199 8.12399 5.91599 7.63199 6.28799L5.24398 5.32799C5.02798 5.24399 4.77598 5.32799 4.65598 5.54399L2.73598 8.86799C2.61598 9.08399 2.66398 9.33599 2.85598 9.47999L4.88398 11.064C4.83598 11.364 4.79998 11.688 4.79998 12C4.79998 12.312 4.82398 12.636 4.87198 12.936L2.84398 14.52C2.66398 14.664 2.61598 14.928 2.72398 15.132L4.64398 18.456C4.76398 18.672 5.01598 18.744 5.23198 18.672L7.61998 17.712C8.12398 18.096 8.65198 18.408 9.23998 18.648L9.59999 21.192C9.64798 21.432 9.83998 21.6 10.08 21.6H13.92C14.16 21.6 14.364 21.432 14.388 21.192L14.748 18.648C15.336 18.408 15.876 18.084 16.368 17.712L18.756 18.672C18.972 18.756 19.224 18.672 19.344 18.456L21.264 15.132C21.384 14.916 21.336 14.664 21.144 14.52L19.14 12.936ZM12 15.6C10.02 15.6 8.39998 13.98 8.39998 12C8.39998 10.02 10.02 8.39999 12 8.39999C13.98 8.39999 15.6 10.02 15.6 12C15.6 13.98 13.98 15.6 12 15.6Z" fill="black"/>
       </svg>

     </MenuList>
     <li className="flex  space-x-3 translate-y-4">
     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.3834 12.7516H7.51174V11.2515H20.3834L16.8653 7.73343L17.926 6.67279L23.2548 12.0015L17.926 17.3304L16.8653 16.2697L20.3834 12.7516Z" fill="black"/>
<path d="M16.5 0.75V2.25H2.25V21.75H16.5V23.25H0.75V0.75H16.5Z" fill="black"/>
</svg>

<p className="font-semibold">Logout</p>
</li>
       </ul>
        
        
    
</Transition.Child>
        
    </ModalOverlay>

       
    )
}
