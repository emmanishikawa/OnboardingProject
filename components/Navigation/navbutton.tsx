"use client";

import React from "react";
import { useRouter } from 'next/navigation';

type NavButtonProps = {
    destinaton?: string;
    children: React.ReactNode;
};

const NavButton: React.FC<NavButtonProps> = ({ destinaton, children }) => {
    const router = useRouter();
    const handleClick = () => {
        if (destinaton) {
            router.push("/" + destinaton);
        } else {
            alert("Button clicked!");
        }
    };

    return (
        <button onClick={handleClick} 
            className='hover:underline decoration-wavy decoration-[#5cad50]'>
            {children}
        </button>
    );
};

export default NavButton;
