import Blob from "@/components/blob.tsx";
import BlobPics from "@/components/blobpics.tsx";
import NavBar from '@/components/nav.tsx';
import BlobTab from '@/components/blobinfo.tsx';
import Footer from '@/components/Footer.tsx';



export default function BlobShowdown() {
    return (
        <>
            <div className="flex-col flex items-center justify-center gap-30">
                <div className = "flex h-[100%] flex-col">
                    <Blob/>
                </div>
                
                <div className="flex lg:gap-60 w-full max-lg:flex-col justify-center items-center">
                    <div className="flex">
                        <BlobPics/>  
                    </div>
                    <BlobTab/>
                </div>
                
            </div>
            <Footer/>
        </>
    );
    
}