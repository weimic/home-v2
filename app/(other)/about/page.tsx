import Main from '@/components/about/main.tsx';
import Edu from '@/components/about/edu.tsx';
import Act from '@/components/about/act.tsx';
import NavBar from '@/components/nav.tsx';
import Footer from '@/components/Footer.tsx';
import Me from '@/public/images/mepeace.jpg';
import Image from 'next/image';


export default function About() {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-30">
                <div className = "flex flex-row justify-between justify-center gap-60">
                    <div className = "flex h-[100%] flex-col mt-40 animate-fadein">
                        <Main/>
                        <div className="mt-3">
                            <NavBar/>
                        </div>
                    </div>
                    <div className="flex flex-row mt-40 h-[100%]">
                        <Image className="rounded-full border-3" src={Me} alt="Me" width={500}/>
                    </div>
                </div>

                <div className="flex flex-wrap justify-left gap-20">
                    <Edu/>
                    <Act/>
                </div>
                
            </div>
            <Footer/>
        </>
    )
}