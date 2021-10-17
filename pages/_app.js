import React, { useEffect } from 'react';
// import 'tailwindcss/tailwind.css'
import ButtomNav from '../components/BottomNav';
import '../styles/tailwind.css';
import Nav from '../components/Nav';
import MiiboLogo from '../components/MiiboLogo';
import MenuList from '../components/MenuList';
import Menu from '../components/Menu';
import ModalOverlay from '../components/ModalOverlay';
export default function MyApp({Component,pageProps}) {
    const [isOpen,setIsopen]=React.useState(false);
    React.useEffect(()=>{
     window.isOpen= isOpen;
    },[isOpen])
    const open=(e)=>{
      
      setIsopen(!isOpen)
    }
    const close=(e)=>{
        setIsopen(!isOpen)
    }
    return (
        <>
          {/* <ButtomNav/> */}
       <Nav open={open}/>
        <Component {...pageProps}/>
       
         <Menu isOpen={isOpen} close={close}/>
        </>
    )
}
