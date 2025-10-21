export default function Education() {
 return (
    <div className="flex flex-col w-[40%] min-w-sm p-4 gap-2">
        <div className="font-semibold text-[40px]"> 
                Education
        </div>
        <div className="flex flex-row justify-between">
            <div className="flex flex-col ">
                <div className=" ml-1">
                    <div className="font-semibold text-[15px] text-foreground">
                        Georgia Institute of Technology
                    </div>
                    <div className="font-normal text-[15px] text-alt-foreground ">
                        Bachelor of Science in Computer Science
                    </div>
                    
                </div>
            </div>

            <div className="flex flex-col text-right">
                <div className="font-semibold text-[15px] text-foreground">
                    May 2028
                </div>
                <div className="font-normal text-[15px] text-alt-foreground ">
                    First-Year
                </div>
            </div>
        </div>

        {/* Module v2 */}
        <div className="flex flex-col ml-1">
            <div className="flex flex-row justify-between">
                <div className="font-semibold text-[15px] text-foreground">
                    Ward Melville High School
                </div>
                <div className="font-semibold text-[15px] text-foreground text-right">
                    June 2025
                </div>
            </div>

            <div className="flex flex-row justify-between">
                <div className="font-normal text-[15px] text-alt-foreground ">
                    Honors Graduate, Excellence in Data Structures
                </div>
                <div className="font-normal text-[15px] text-alt-foreground text-right">
                    GPA: 104.6
                </div>
            </div>
        </div>

        <div className="ml-1 flex flex-col">
            <div className="font-semibold text-[15px] text-foreground">
                Relevant Coursework Taken
            </div>
            <div className="font-normal text-[15px] text-alt-foreground overflow-wrap w-[100%] ">
                Differential Equations, Data Structures, Multivariable Calculus, Linear Algebra, Introduction to Object-Oriented Programming
            </div>
        </div>


    </div>
    
    
 );
}