import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { ImageProps } from "next/image";

import b1sg from '@/public/images/gbgif2.gif';
import b1s1 from '@/public/images/gbs1.png';
import b1s2 from '@/public/images/gbs2.png';
import b1s3 from '@/public/images/gbs3.png';
import b1s4 from '@/public/images/gbs4.png';






function Pic({...props}: ImageProps) {
    return(
            <Image
            className="w-full h-full object-cover border-3 border-red-300 rounded"
            width={640}
            height={640}  
                {...props}
                /> 
        
    );
}
// 640 x 640

export default function BlobPics() {
    return(
        <div className="flex w-150">
            <Carousel
                opts={{
                    loop:true,
                }}>
                <CarouselContent>
                    <CarouselItem>
                        <Pic
                            src={b1sg}
                            alt="Gameplay" 
                        />
                    </CarouselItem>
                    
                    <CarouselItem>
                        <Pic
                            src={b1s1}
                            alt="Gameplay" 
                        />
                    </CarouselItem>

                    <CarouselItem>
                        <Pic
                            src={b1s2}
                            alt="Gameplay" 
                        />
                    </CarouselItem>

                    <CarouselItem>
                        <Pic
                            src={b1s3}
                            alt="Gameplay" 
                        />
                    </CarouselItem>

                    <CarouselItem>
                        <Pic
                            src={b1s4}
                            alt="Gameplay" 
                        />
                    </CarouselItem>

                </CarouselContent>
                <CarouselPrevious />
                
                <CarouselNext />
            </Carousel>
        </div>
        
    );
}