import React from 'react';
import Image from "next/image";
import gradhappy from '@/public/images/gradhappy.jpg';

export default function Photo() {
    return (
        <>
            <div className="">
                <Image 
                    src={gradhappy}
                    alt="Graduation!" 
                    width={475} 
                    height={576} 
                    className=" backface rounded -mt-80 ml-10 lg:ml-110 lg:mt-50 animate-revolveXY shadow-xl object-cover"/>
            </div>
        </>
    );
}   