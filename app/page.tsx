import React, { Component } from 'react';

export default function Home(){
    return (
        <>
        <div className='flex flex-col h-full w-screen justify-center items-center mt-40'>
            <div className='flex flex-col md:flex-row gap-8 h-full w-full md:w-[800px] p-5 md: md:rounded-md'>
                <div className='flex items-start'>
                    <img src='/pfp.jpeg' 
                         className='w-52 aspect-square object-cover rounded-md'/>
                </div>
                <div className='flex flex-col h-full grow text-[16px]'>
                    <h1 className='mb-3 text-[20px]'>emma nishikawa</h1>
                    <p>i am an undergraduate at ucsd majoring in cognitive science: machine learning
                         with a minor in computer science.</p>
                    <p>my interests include listening to music, travelling, and <span className='text-[#5cad50]'>matcha</span> : &#41;</p>
                </div>
            </div>
        </div>
        </>
    );
}
