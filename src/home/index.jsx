//import {useState} from "react";
import Navbar from "../components/navbar.jsx"
import Content from "../components/content.jsx"
import "./home.css";

export default function Home(){
   return(
    <>
       <div className="container">
          <Navbar />
          <Content />
       </div>
       
    </>
   )
} 