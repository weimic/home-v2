import Blob from "@/components/blob.tsx";
import BlobPics from "@/components/blobpics.tsx";
import NavBar from '@/components/navprojs.tsx';
import BlobTab from '@/components/blobinfo.tsx';
import BlobTab2 from '@/components/blobinfo2.tsx';
import Footer from '@/components/Footer.tsx';



export default function BlobShowdown() {
    return (
        <>
            <div className="flex-col">
                <Blob/> 
                <NavBar/>
                <div className="flex lg:gap-60 w-full max-lg:flex-col">
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