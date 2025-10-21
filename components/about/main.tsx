export default function Main() {
 return (
    <div className="font-semibold animate-fadein flex flex-col">
        <div className="flex flex-col lg:flex-row">
            <div className="text-[85px] lg:text-[150px]"> 
                About
            </div>
            <div className="-mt-10 lg:mt-0 -ml-1 lg:ml-10 text-[85px] lg:text-[150px]">
                Me!
            </div>
        </div>

        <div className="text-[16px] lg:text-[20px] text-alt-foreground -mt-3 lg:-mt-10">
            Michael Yu Wei | Computer Science @ Georgia Tech
        </div>
    </div>
 );
}