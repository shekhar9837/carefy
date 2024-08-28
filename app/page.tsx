import { Button } from "@/components/ui/button";
import { UserForm } from "@/components/UserForm";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-5xl flex flex-row justify-between">
      
      <UserForm/>


      <Image src='/assets/images/onboarding-img.png' alt="onboarding-image" width={1000} height={1000}  className="w-[50%]"/>
    </div>
  );
}
