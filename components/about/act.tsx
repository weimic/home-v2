export default function Act() {
 return (
    <div className="flex flex-col w-[40%] min-w-sm p-4 gap-2">
        <div className="font-semibold text-[40px]"> 
                Activities
        </div>

        {/* Module v2 */}
        <div className="flex flex-col ml-1">
            <div className="flex flex-row justify-between">
                <div className="font-semibold text-[15px] text-foreground">
                    GTGuessr Web Developer
                </div>
                <div className="font-semibold text-[15px] text-foreground text-right">
                    Sep. 2025 - Present
                </div>
            </div>

            <div className="flex flex-row justify-between">
                <div className="font-normal text-[15px] text-alt-foreground ">
                    WebDev@GT
                </div>
                <div className="font-normal text-[15px] text-alt-foreground text-right">
                    Firebase, Express.js, Next.js, Node.js, Tailwind CSS
                </div>
            </div>
        </div>
        
        <div className="flex flex-row justify-between">
            <div className="flex flex-col ">
                <div className=" ml-1">
                    <div className="font-semibold text-[15px] text-foreground">
                        Assistant Concertmaster
                    </div>
                    <div className="font-normal text-[15px] text-alt-foreground ">
                        Georgia Tech Concert Orchestra
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-right">
                <div className="font-semibold text-[15px] text-foreground">
                    Sep. 2025 - Present
                </div>
                <div className="font-normal text-[15px] text-alt-foreground ">
                    First Violinist
                </div>
            </div>
        </div>

        <div className="flex flex-row justify-between">
            <div className="flex flex-col ">
                <div className=" ml-1">
                    <div className="font-semibold text-[15px] text-foreground">
                        Natural Language Processing Research Lead
                    </div>
                    <div className="font-normal text-[15px] text-alt-foreground ">
                        University of Groningen
                    </div>
                </div>
            </div>

            <div className="flex flex-col text-right">
                <div className="font-semibold text-[15px] text-foreground">
                    June 2023 - Nov. 2023
                </div>
                <div className="font-normal text-[15px] text-alt-foreground ">
                    Remote
                </div>
            </div>
        </div>


    </div>
    
    
 );
}