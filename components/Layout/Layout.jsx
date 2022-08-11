import React from 'react'
import Footer from './Footer'
import Header from './header'
import Banner from './Banner'

const Layout = ({children,isAuth=false}) => {
  return (
    <>
   <Header/>
   <Banner/>
    {children}
    <Footer/>
    </>
  )
}

export default Layout