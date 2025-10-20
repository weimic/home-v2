import Main from '@/components/ghostbust/main.tsx';
import Pics from '@/components/ghostbust/pics.tsx';
import Info from '@/components/ghostbust/info.tsx';
import NavBar from '@/components/nav.tsx';
import Footer from '@/components/Footer.tsx';
import Man from '@/public/images/man.png';
import Ghost from '@/public/images/ghost.png';

import Image from 'next/image';

export default function GhostBust() {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-30">
                <div className = "mt-40 flex flex-wrap justify-between justify-center gap-y-20 gap-x-60">
                    <div className = "flex h-[100%] flex-col animate-fadein">
                        <Main/>
                        <div className="ml-4 mt-3">
                            <NavBar/>
                        </div>
                    </div>
                    <div className="flex flex-row h-[100%] animate-idle">
                        <Image src={Man} alt="Man" width={300}/>
                        <Image src={Ghost} alt="Man" width={300}/>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-x-60 ">
                    <Pics/>
                    <div className="mt-25">
                      <Info/>  
                    </div>
                    
                </div>
                
            </div>
            <Footer/>
            
            
        </>
    );
}