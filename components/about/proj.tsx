import Link from 'next/link';

export default function Proj() {
 return (
    <div className="flex flex-col w-[40%] min-w-sm p-4 gap-2">
        <div className="font-semibold text-[40px]"> 
                Competitions
        </div>
        {/* Module v2 */}
        <div className="flex flex-col ml-1">
            <div className="flex flex-row justify-between">
                <div className="font-semibold text-[15px] text-foreground underline">
                    <Link href="https://devpost.com/software/tidbit-4yacw1" target="_blank" rel="noopener noreferrer">TidBit Mobile Application</Link>
                </div>
                <div className="font-semibold text-[15px] text-foreground text-right">
                    Sept. 2025
                </div>
            </div>

            <div className="flex flex-row justify-between">
                <div className="font-normal text-[15px] text-alt-foreground ">
                    HackGT
                </div>
                <div className="font-normal text-[15px] text-alt-foreground text-right">
                    React Native, Expo, Firebase, Gemini & OpenAI API
                </div>
            </div>
        </div>
        
        <div className="flex flex-row justify-between">
            <div className="flex flex-col ">
                <div className=" ml-1">
                    <div className="font-semibold text-[15px] text-foreground underline">
                        <Link href="https://itch.io/jam/atljam25/rate/3935874" target="_blank" rel="noopener noreferrer"> Blue's Walk Windows Game </Link>
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