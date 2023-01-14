import React from "react";
import Header from "./Header";
import About from "./About";
import Articlelist from "./Articlelist";
import blogData from "../data/blog";

console.log(blogData);


function App() {
  const heading = "Overreacted"
  const imageSrc= 'https://overreacted.io/static/profile-pic-c715447ce38098828758e525a1128b87.jpg'
  const aboutText= "Personal blog by Dan Abramov. I explain with words and code."
 
  return (
    <div className="App">
       <Header heading= {heading} />
       <About image = {imageSrc}  text= {aboutText}/>
       <Articlelist/>
    </div>
  );
}

export default App;
