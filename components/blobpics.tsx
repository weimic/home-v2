import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { ImageProps } from "next/image";

import b1sg from '@/public/images/b1sg.gif';
import b1s1 from '@/public/images/b1s1.png';
import b1s2 from '@/public/images/b1s2.png';
import b1s3 from '@/public/images/b1s3.png';
import b1s4 from '@/public/images/b1s4.png';






function Pic({...props}: ImageProps) {
    return(
            <Image
            className="w-full h-full object-cover"
            width={593}
            height={447}  
                {...props}
                /> 
        
    );
}

export default function BlobPics() {
    return(
        <div className="mt-50 ml-50 flex w-200 border-2">
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