import React from 'react';
import Image from "next/image";
import gradhappy from '@/public/images/gradhappy.jpg';

export default function Photo() {
    return (
        <>
            <div className="justify-end">
                pray
                <Image 
                    src={gradhappy}
                    alt="Graduation!" 
                    width={475} 
                    height={576} 
                    className="backface rounded ml-100 mt-50 animate-revolveXY shadow-xl object-cover"/>
            </div>
        </>
    );
}   