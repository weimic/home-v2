import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";
import { ImageProps } from "next/image";

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
                            src="/images/b1sg.gif" 
                            alt="Gameplay" 
                        />
                    </CarouselItem>
                    
                    <CarouselItem>
                        <Pic
                            src="/images/b1s1.png" 
                            alt="Gameplay" 
                        />
                    </CarouselItem>

                    <CarouselItem>
                        <Pic
                            src="/images/b1s2.png" 
                            alt="Gameplay" 
                        />
                    </CarouselItem>

                    <CarouselItem>
                        <Pic
                            src="/images/b1s3.png" 
                            alt="Gameplay" 
                        />
                    </CarouselItem>

                    <CarouselItem>
                        <Pic
                            src="/images/b1s4.png" 
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