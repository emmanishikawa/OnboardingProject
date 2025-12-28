import React, { Component } from 'react';
import NavBar from '@/components/navbar';

export default function Home(){
    return (
        <>
        <NavBar />
        {/* background and content container */}
        <div className='flex flex-col h-screen w-screen justify-center items-center mt-32'>
            <div className='flex flex-col md:flex-row 
                            h-full w-full md:w-[800px] 
                            p-5 md: md:rounded-md
                            drop-shadow-md'>
                {/* inner container and texts*/}
                <div className='flex flex-col h-1/2 md:h-full w-full
                                text-[20px] text-blue-950'>
                    <h1 className='text-[24px]'>Emma Nishikawa</h1>
                    <p>Second year / Sixth</p>
                    <p>Major: Cognitive Science - ML & NC</p>
                    <p>Minor: Computer Science</p>
                    <p>Interests: Listening to music, travelling, matcha 🍵</p>
                </div>
                {/* profile image */}
                <div className='flex h-full w-full items-start'>
                    <img src='/pfp.jpeg' className='object-contain'/>
                </div>
            </div>
        </div>
        </>
    );
}
