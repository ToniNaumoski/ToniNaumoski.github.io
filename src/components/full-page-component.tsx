import React from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeaderComponent from './header-component';
const { useEffect, useRef, useState } = React;


const Box = ({ children }: any) => <div className="box">{children}</div>;
const Container = ({ children }: any) => <div><Box>Nested Box</Box></div>;

export default function FullPageComponent() {

//   gsap.registerPlugin(ScrollTrigger);
//   const el = useRef<HTMLDivElement>(null);
//   const q = gsap.utils.selector(el);


//   useEffect(() => {
//     gsap.to(".box", {
//       scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
//       x: 500
//     });
// });



return (
  <div className="app" >
      <HeaderComponent />
  </div>
);

}
