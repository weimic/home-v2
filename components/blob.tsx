import Image from "next/image";
import blobgun from '@/public/images/blobgun.png';


export default function Blob() {
 return (
    <div className="flex flex-row gap-60">
        <div className="font-semibold ml-50 mt-30 animate-fadein flex-col">
            <div className="text-[150px] -ml-2"> 
                Blob
            </div>
            <br/>
            <div className="text-[150px] -mt-25">
                Showdown.
            </div>
            <div className="text-[20px] text-alt-foreground -mt-8 ml-2">
                May - July 2024
            </div>
        </div>
        <Image 
            src={blobgun}
            alt="Player" 
            width={475} 
            height={576} 
            className="backface justify-self-center mt-50 object-cover animate-revolveX"/>
    </div>
    
    
 );
}