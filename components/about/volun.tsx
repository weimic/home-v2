import Link from 'next/link';

// not rly sure what to put here.. so.
export default function Volun() {
 return (
    <div className="flex flex-col w-[40%] min-w-lg p-4 gap-2">
        <div className="font-semibold text-[40px]"> 
                Languages
        </div>
        <div className="flex flex-row justify-between">
            <div className="flex flex-col">
                <div className=" ml-1">
                    <div className="font-semibold text-[15px] text-foreground">
                        <Link href="https://devpost.com/software/tidbit-4yacw1" target="_blank" rel="noopener noreferrer">TidBit Mobile App</Link>
                    </div>
                    <div className="font-normal text-[15px] text-alt-foreground ">
                        HackGT
                    </div>
                    
                </div>
            </div>

            <div className="flex flex-col text-right">
                <div className="font-semibold text-[15px] text-foreground">
                    Sept. 2025
                </div>
                <div className="font-normal text-[15px] text-alt-foreground ">
                    React Native, Expo, Firebase, Gemini API, OpenAI API
                </div>
            </div>
        </div>
        
        <div className="flex flex-row justify-between">
            <div className="flex flex-col ">
                <div className=" ml-1">
                    <div className="font-semibold text-[15px] text-foreground">
                        Blue's Walk Windows Game
                    </div>
                    <div className="font-normal text-[15px] text-alt-foreground ">
                        ATLJam
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-right">
                <div className="font-semibold text-[15px] text-foreground">
                    Oct. 2025
                </div>
                <div className="font-normal text-[15px] text-alt-foreground ">
                    Godot, GDScript
                </div>
            </div>
        </div>
    </div>
    
    
 );
}