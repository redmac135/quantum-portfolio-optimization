"use client";

import { Inter, Linefont } from "next/font/google";
import Image from "next/image";
import logo from "../../../../quantum-portfoilo-optimization/client/src/app/images/WQC.png";
import triangle1 from "../../../../quantum-portfoilo-optimization/client/src/app/images/topTriangle.png";
import triangle2 from "../../../../quantum-portfoilo-optimization/client/src/app/images/bottomTriangle.png";
import box1 from "../../../../quantum-portfoilo-optimization/client/src/app/images/darkestBlueBox.png";
import box2 from "../../../../quantum-portfoilo-optimization/client/src/app/images/blueBox.png";
import box3 from "../../../../quantum-portfoilo-optimization/client/src/app/images/lightBlueBox.png";
import background from "../../../../quantum-portfoilo-optimization/client/src/app/images/background.png";
import './page.module.css';
import React from "react";

export default function Home() {

  // return <main>Hello</main>;
  return (
    <div>
      <div
      style={{
        position: 'absolute',
        width: '1000000000000000000000px',
        height: '100000000000000000000px',
        background: '#061137'
      }}
      >
      </div>

      {/* background image */}
      <div
      style={{
        position: 'absolute',
        width: '657px',
        height: '900px',
      }}
      >
        <Image src={background} alt="Background" width={657} height={900}/>
      </div>
      
      {/* Navbar white rectangle */}
      <div
      style={{
        position: 'absolute',
        width: '983px',
        height: '70px',
        top: '51.81px',
        left: '297px',
        background: '#FFFFFF'
      }}>
      </div>

      {/* Top triangle */}
      <div
      style={{
        position: 'absolute',
        width: '44px',
        height: '46.11px',
        top: '49px',
        left: '280px',
      }}
      >
        <Image src={triangle1} alt="Triangle1" width={44} height={46.11}/>
      </div>

      {/* Bottom triangle */}
      <div
      style={{
        position: 'absolute',
        width: '38.11px',
        height: '36px',
        top: '88px',
        left: '280px',
      }}
      >
        <Image src={triangle2} alt="Triangle2" width={38.11} height={36}/>
      </div>

      {/* Navbar white square */}
      <div
      style={{
        position: 'absolute',
        width: '41px',
        height: '70px',
        top: '51.81px',
        background: '#FFFFFF'
      }}
      >
      </div>

      {/* WQC logo */}
      <div
      style={{
        position: 'absolute',
        width: '246px',
        height: '85px',
        top: '42.81px',
        left: '51px'
      }}
      >
        <Image src={logo} alt="Logo" width={246} height={85}/>
      </div>

      {/* Dark blue box */}
      <div
      style={{
        position: 'absolute',
        width: '651px',
        height: '234.07px',
        top: '168px',
        left: '598px',
        borderRadius: '5px'
      }}
      >
        <Image src={box1} alt="Box1" width={651} height={234.07}/>
      </div>

      {/* blue box */}
      <div
      style={{
        position: 'absolute',
        width: '651px',
        height: '234.07px',
        top: '381.29px',
        left: '598px',
        borderRadius: '5px'
      }}
      >
        <Image src={box2} alt="Box2" width={651} height={234.07}/>
      </div>

      {/* light blue box */}
      <div
      style={{
        position: 'absolute',
        width: '651px',
        height: '184px',
        top: '595px',
        left: '598px',
        borderRadius: '5px'
      }}
      >
        <Image src={box3} alt="Box3" width={651} height={184}/>
      </div>

      {/* Eliminate guesswork text */}
      <div
      style={{
        position: 'absolute',
        width: '828px',
        height: '43px',
        top: '448px',
        left: '61px',
        border: '1px',
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '36px',
        lineHeight: '43.57px'
      }}
      >
        Eliminate the guesswork.
      </div>

      {/* Eliminate guesswork description text */}
      <div
      style={{
        position: 'absolute',
        width: '434px',
        height: '340px',
        top: '501px',
        left: '61px',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '24.2px'
      }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </div>

      {/* Stock selection text */}
      <div
      style={{
        position: 'absolute',
        width: '455px',
        height: '43x',
        top: '193px',
        left: '695px',
        border: '1px',
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '29.05px',
        textAlign: 'center',
      }}
      >
        Stock Selection
      </div>

      {/* Stock selection description text */}
      <div
      style={{
        position: 'absolute',
        width: '607px',
        height: '61x',
        top: '228px',
        left: '619px',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '24.2px',
        textAlign: 'center',
      }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </div>

      {/* Read the report button */}
      <div
      style={{
        position: 'absolute',
        width: '226px',
        height: '46px',
        top: '290px',
        left: '810px',
        borderRadius: '50px',
        border: '1px',
        textAlign: 'center',
        backgroundColor: "#FFFFFF",
        color: "#000000",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        Read the report
      </div>

      {/* Quantum computation text */}
      <div
      style={{
        position: 'absolute',
        width: '333px',
        height: '43x',
        top: '416px',
        left: '757px',
        border: '1px',
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '29.05px',
        textAlign: 'center',
      }}
      >
        Quantum Computation
      </div>

      {/* Quantum computation description text */}
      <div
      style={{
        position: 'absolute',
        width: '607px',
        height: '61x',
        top: '449px',
        left: '620px',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '24.2px',
        textAlign: 'center',
      }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </div>

      {/* About the algorithm button */}
      <div
      style={{
        position: 'absolute',
        width: '226px',
        height: '46px',
        top: '504px',
        left: '802px',
        borderRadius: '50px',
        border: '1px',
        textAlign: 'center',
        backgroundColor: "#FFFFFF",
        color: "#000000",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        About the algorithm
      </div>

      {/* Data-Driven insights text */}
      <div
      style={{
        position: 'absolute',
        width: '333px',
        height: '43x',
        top: '621px',
        left: '757px',
        border: '1px',
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '24px',
        lineHeight: '29.05px',
        textAlign: 'center',
      }}
      >
        Data-Driven Insights
      </div>

      {/* Data-Driven insights description text */}
      <div
      style={{
        position: 'absolute',
        width: '607px',
        height: '61x',
        top: '659px',
        left: '620px',
        fontFamily: 'Inter',
        fontWeight: 400,
        fontSize: '20px',
        lineHeight: '24.2px',
        textAlign: 'center',
      }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </div>

      {/* Optimize my portfolio button */}
      <div
      style={{
        position: 'absolute',
        width: '241px',
        height: '46px',
        top: '720px',
        left: '802px',
        borderRadius: '50px',
        border: '1px',
        textAlign: 'center',
        backgroundColor: "#FFFFFF",
        color: "#000000",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      >
        Optimize my portfolio
      </div>

      {/* Navbar */}
      <div
      style={{
        fontFamily: 'Inter',
        fontWeight: 600,
        fontSize: '24px',
        position: 'absolute',
        top: '74px',
        left: '488px',
        width: '761px',
        height: '31px',
        background: '#FFFFFF',
        color: '#061137',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
      }}
      >
        <div>Home</div>
        <div>Preferences</div>
        <div>Portfolio</div>
        <div>WQC Report</div>
        <div>Algorithm</div>
      </div>

    </div>
  );
}
