"use client";
import Image from "next/image";
import React from 'react'
import { Carousel, Card } from './ui/apple-cards-carousel';
import { Vortex } from './ui/vortex';


import { WavyBackground } from './ui/wavy-background'

const Hero = () => {

  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

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
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Unlock the Power Within: Crystals for Balance, Healing, and Transformation.
      </h2>
      <Carousel items={cards} />

        </div>
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


  const DummyContent = () => {
    return (
      <>
        {[...new Array(3).fill(1)].map((_, index) => {
          return (
            <div
              key={"dummy-content" + index}
              className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
            >
              <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
                <span className="font-bold text-neutral-700 dark:text-neutral-200">
                  The first rule of Apple club is that you boast about Apple club.
                </span>{" "}
                Keep a journal, quickly jot down a grocery list, and take amazing
                class notes. Want to convert those notes to text? No problem.
                Langotiya jeetu ka mara hua yaar is ready to capture every
                thought.
              </p>
              <Image
                src="https://assets.aceternity.com/macbook.png"
                alt="Macbook mockup from Aceternity UI"
                height="500"
                width="500"
                className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              />
            </div>
          );
        })}
      </>
    );
  };
   
  const data = [
    {
      category: "Energetic Support",
      title: "Crystals naturally emit vibrations that help harmonize the body and mind, promoting inner peace and balance.",
      src: "https://images.unsplash.com/photo-1551232864-0b336dcdc028?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      content: <DummyContent />,
    },
    {
      category: "Healing for Body and Soul",
      title: "Many crystals, like amethyst or rose quartz, aid in emotional healing, stress reduction, and support physical recovery.",
      src: "https://images.unsplash.com/photo-1576616604564-aac751caf9cd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fGNyeXN0YWx8ZW58MHx8MHx8fDA%3D",
      content: <DummyContent />,
    },
    {
      category: "Protection from Negative Energy",
      title: "Crystals such as black tourmaline act as protective shields, deflecting negative energy and ensuring a sense of safety.",
      src: "https://images.unsplash.com/photo-1627506584439-4365062a632a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODh8fGNyeXN0YWx8ZW58MHx8MHx8fDA%3D",
      content: <DummyContent />,
    },
   
    {
      category: "Enhance Intuition",
      title: "Crystals can deepen your connection with your intuition and higher self, leading to greater awareness and more informed decision-making.",
      src: "https://images.unsplash.com/photo-1679395283817-39f56e249ea6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTg3fHxjcnlzdGFsfGVufDB8fDB8fHww",
      content: <DummyContent />,
    },
    {
      category: "Spiritual Growth",
      title: "Working with crystals supports personal growth, helping you understand yourself on a deeper level and guiding your spiritual transformation in alignment with your soul’s unique energy.",
      src: "https://images.unsplash.com/photo-1602025788761-07f57645b0a6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fGNyeXN0YWx8ZW58MHx8MHx8fDA%3D",
      content: <DummyContent />,
    },
    {
      category: "Manifesting Intentions",
      title: "Crystals like citrine and clear quartz amplify your intentions, helping you manifest goals, desires, and positive changes in your life through focused energy and intention-setting.",
      src: "https://images.unsplash.com/photo-1628799882124-9422c30f3587?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU1fHxjcnlzdGFsfGVufDB8fDB8fHww",
      content: <DummyContent />,
    },
  ];

export default Hero