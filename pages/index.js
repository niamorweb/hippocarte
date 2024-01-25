import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/index/Hero";
import Advantages from "@/components/index/Advantages";
import Courses from "@/components/index/Courses";
import KeyNumbers from "@/components/index/KeyNumbers";
import RecentsArticles from "@/components/index/RecentsArticles";
import Faq from "@/components/index/Faq";
import WhoWeAre from "@/components/index/WhoWeAre";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Advantages />
      <KeyNumbers />
      <Courses />
      <RecentsArticles />
      <Faq />
      <WhoWeAre />
    </>
  );
}
