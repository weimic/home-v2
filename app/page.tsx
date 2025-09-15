import NavBar from '@/components/nav.tsx';
import Main from "@/components/front.tsx";
import Sphere from "@/components/Photo";


export default function Home() {
  return (
    <>
      <div className="flex justify-start gap-100 max-lg:flex-col">
        <div className="flex">
          <Main/>
        </div>
        <div className="">
          <Sphere/>
        </div>
        
      </div>
      
    </>
  );
}
