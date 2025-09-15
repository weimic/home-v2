import Link from 'next/link';

export default function Main() {
 return (
    <div className="font-semibold animate-fadein flex flex-col ">
        <div className="text-[85px] lg:text-[150px]"> 
            About Me!
        </div>
        <div className="text-[16px] lg:text-[20px] text-alt-foreground -mt-8">
            <Link href="/MichaelWeiResume-Fall25.pdf">Computer Science @ Georgia Tech</Link>
            
        </div>
    </div>
 );
}