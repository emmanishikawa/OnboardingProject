import React, { Component } from 'react';
import profileImage from "./assets/pfp.jpeg";

export default function Home(){
    return (
        <>
        {/* background and content container */}
        <div className='flex h-screen w-screen justify-center items-center 
            bg-[#d8e4eb]'>
            <div className='flex flex-col md:flex-row 
                            h-[550px] w-[350px] md:h-[350px] md:w-[600px] 
                            p-5
                            bg-[#f7fbfc] rounded-md drop-shadow-sm'>
                {/* inner container and texts*/}
                <div className='flex flex-col h-1/2 md:h-full w-full
                                text-[20px] text-blue-950'>
                    <h1 className='text-[24px]'>emma nishikawa</h1>
                    <p className=''>second year / sixth</p>
                    <p className=''>major: cognitive science - ml & nc</p>
                    <p className=''>minor: computer science</p>
                    <p className=''>interests: listening to music, travelling, matcha 🍵</p>
                </div>
                {/* profile image */}
                <div className='flex h-full w-full justify-center items-center'>
                    <img src='/pfp.jpeg' className='w-[280px] md:w-96'/>
                </div>
            </div>
        </div>
        </>
    );
}
