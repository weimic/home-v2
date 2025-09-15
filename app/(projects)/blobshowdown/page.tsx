import Blob from "@/components/blob.tsx";
import BlobPics from "@/components/blobpics.tsx";
import NavBar from '@/components/nav.tsx';
import BlobTab from '@/components/blobinfo.tsx';
import Footer from '@/components/Footer.tsx';



export default function BlobShowdown() {
    return (
        <>
            <div className="flex-col">
                <Blob/> 
                <div className="ml-52 -mt-42">
                    <NavBar/>
                </div>
                
                <div className="flex lg:gap-60 w-full max-lg:flex-col items-center">
                    <div className="flex justify-center-safe">
                        <BlobPics/>  
                    </div>
                    <BlobTab/>
                </div>
                <Footer/>
            </div>
        </>
    );
    
}