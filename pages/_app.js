import React from 'react';
// import 'tailwindcss/tailwind.css'
import ButtomNav from '../components/BottomNav';
import '../styles/tailwind.css';
import Nav from '../components/Nav';
export default function MyApp({Component,pageProps}) {
    return (
        <>
          {/* <ButtomNav/> */}
       <Nav/>
        <Component {...pageProps}/>
        </>
    )
}
