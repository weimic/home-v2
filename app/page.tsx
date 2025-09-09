import NavBar from '@/components/nav.tsx';
import Main from "@/components/front.tsx";
import Sphere from "@/components/Photo";


export default function Home() {
  return (
    <>
      <div className="flex justify-start">
        <Main/>
        <Sphere/>
      </div>
      <NavBar/>
      
    </>
  );
}
