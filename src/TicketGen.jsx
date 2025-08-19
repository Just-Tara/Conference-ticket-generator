 HEAD
import React from "react";
import logo from "./assets/logo-full.svg";
import patternLine from "./assets/pattern-lines.svg";
import patternLineTop from "./assets/pattern-squiggly-line-top.svg";
import patternLineBottom from "./assets/pattern-squiggly-line-bottom-desktop.svg";
import patterCircle from "./assets/pattern-circle.svg";
import ticketContainer from "./assets/pattern-ticket.svg";
import githubImage from "./assets/icon-github.svg";

function TicketReady({ name, email, userName, avatar }) {
  return (
    <div className="min-h-screen flex items-center justify-center 
      bg-[url('./assets/background-desktop.png')] bg-cover bg-center relative overflow-hidden">
      
      {/* Background Patterns */}
      <img src={patternLine} alt="pattern-line" className="brightness-55 absolute inset-0 w-full h-full object-cover" />
      <img src={patternLineTop} alt="top-pattern-line" className="absolute top-6 right-0 w-[40%] sm:w-[50%] max-w-[250px]" />
      <img src={patternLineBottom} alt="bottom-pattern-line" className="absolute bottom-0 left-0 w-[70%] sm:w-[60%] max-w-[500px] object-cover" />
      <img src={patterCircle} alt="circle-pattern" className="absolute top-[-50px] left-4 w-[120px] sm:w-[160px] brightness-50" />
      <img src={patterCircle} alt="circle-pattern" className="absolute right-[5%] w-[120px] sm:w-[160px] brightness-50" />

      {/* Main Content */}
      <div className="w-full max-w-md p-6 sm:p-8 text-center text-white mt-[-60px] sm:mt-[-100px] relative z-10">
        {/* Heading */}
        <div className="mb-8 sm:mb-12">
          <p className="flex justify-center mb-6">
            <img src={logo} alt="Logo-Image" className="w-[140px] sm:w-[180px]" />
          </p>
          <h1 className="text-xl sm:text-2xl font-bold mb-3">
            Congrats, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f37362] to-[#ffffff]">{name}!</span> <br />
            Your ticket is ready.
          </h1>
          <p className="text-sm sm:text-base">
            We've emailed your ticket to 
            <span className="text-[#f37362]"> {email}</span> and will send updates in the run up to he event.
          </p>
        </div>

        {/* Ticket Container */}
        <div className="relative w-[85%] sm:w-[400px] mx-auto">
          {/* Ticket Background */}
          <img src={ticketContainer} alt="ticket-container" className="w-full h-auto" />

          {/* Ticket Content */}
          <div className="absolute inset-0 flex flex-col px-4 sm:px-6 mt-2 sm:mt-3 text-start">
            {/* Logo + Date */}
            <img src={logo} alt="" className="w-[120px] sm:w-[200px]" />
            <p className="text-[10px] sm:text-xs text-gray-400 ml-6 sm:ml-12 mt-2">
              Jan 31, 2025 / Austin, TX
            </p>

            {/* User Info */}
            <div className="flex items-center justify-between mt-[25px] sm:mt-10">
              
              <div className="flex items-center">
                <img 
                  src={avatar} 
                  alt="avatar" 
                  className="w-8 h-8  sm:w-12 sm:h-12 rounded-md object-cover" 
                />
                <div className="ml-2 sm:ml-3 text-left">
                  <p className="font-semibold text-[12px]  sm:text-base">{name}</p>
                  <div className="flex items-center">
                    <img src={githubImage} alt="Github-icon" className="w-3 sm:w-4 mr-1" />
                    <p className="text-[11px] sm:text-sm text-gray-400">@{userName}</p>
                  </div>
                </div>
                    </div>
             
             <div>
             <p className=" text-gray-500 font-semibold text-[14px] sm:text-[16px] 
                 [writing-mode:vertical-rl] rotate-0" >#01609</p>
                </div>
              
 
               </div>
              </div>
              
            
         
        </div>
      </div>
    </div>
  );
}

export default TicketReady;
