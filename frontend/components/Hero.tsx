"use client";
import React from 'react'
import { Vortex } from './ui/vortex';


import { WavyBackground } from './ui/wavy-background'

const Hero = () => {
    return (
      <div className='pb-20 pt-36'>
        <WavyBackground className="max-w-4xl mx-auto pb-40" backgroundFill='lavenderblush'>
            <p className="text-2xl md:text-4xl lg:text-7xl text-black font-bold inter-var text-center">
                Find Your Perfect Stone
            </p>
            <p className="text-base md:text-lg mt-4 text-black font-normal inter-var text-center">
                Discover the stone that resonates with your soul.
            </p>
        </WavyBackground>
        <div className=" pt-32 max-w-4xl mx-auto pb-40">
        <Vortex
        backgroundColor="black"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
      >
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Discover Your Unique Stone
            </p>
            <p className="text-xl md:text-2xl lg:text-4xl text-white font-bold inter-var text-center">
            Crafted for Your Soul and Aligned with the Stars.
            </p>
            <p className="text-xl md:text-lg mt-4 text-white font-normal inter-var text-center">
            Within each of us lies a unique energy, shaped by our soul and the influences of the cosmos. That’s why we’ve created stones that reflect your spiritual identity, intertwined with the alignment of the stars at the moment of your birth. These stones are not just beautiful pieces, but powerful talismans carrying deep meaning and protection.
            </p>
      </Vortex>
    </div>
        
        
      </div>
    );
  }

export default Hero