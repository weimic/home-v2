import Image from "next/image";

export default function Photo() {
    return (
        <>
            <div className="justify-end">
                <Image 
                    src="/images/gradhappy.jpg" 
                    alt="Graduation!" 
                    width={475} 
                    height={576} 
                    className="backface rounded ml-100 mt-50 animate-revolveXY shadow-xl object-cover"/>
            </div>
        </>
    );
}