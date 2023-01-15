import React from 'react'
import Footer from './footer/footer'
import Header from './header/header'
import Navbar from './navbar/navbar'


const Layout = ({children}) => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <main> {children} </main>
        <Footer/>
    </div>
  )
}

export default Layout