import Blob from "@/components/blob.tsx";
import BlobPics from "@/components/blobpics.tsx";
import NavBar from '@/components/navprojs.tsx';
import BlobTab from '@/components/blobinfo.tsx';
import BlobTab2 from '@/components/blobinfo2.tsx';


export default function BlobShowdown() {
    return (
        <>
            <div className="flex-col">
                <Blob/> 
                <NavBar/>
                <div className="flex lg:gap-40">
                    <BlobPics/>  
                    <BlobTab/>
                    <BlobTab2/>
                </div>
            </div>
            
            
            
        </>
    );
    
}