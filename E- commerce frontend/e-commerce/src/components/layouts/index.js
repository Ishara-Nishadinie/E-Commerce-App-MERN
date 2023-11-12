import React from 'react'; 
import { Header } from '../Header/index';

/**
* @author
* @function Layout
**/

export const Layout = (props) => {
  return(
    <>
    <Header/>
    {props.children}
    </>
   )

 }