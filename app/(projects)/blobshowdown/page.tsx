import Blob from "@/components/blob.tsx";
import BlobPics from "@/components/blobpics.tsx";
import NavBar from '@/components/navprojs.tsx';
import BlobTab from '@/components/blobinfo.tsx';


export default function BlobShowdown() {
    return (
        <>
            <div className="flex-col">
                <Blob/> 
                <NavBar/>
                <div className="flex gap-40">
                    <BlobPics/>  
                    <BlobTab/>
                </div>
            </div>
            
            
            
        </>
    );
    
}