'use client';

import Image from "next/image";
import Header from "./ui/header/Header";
import SideNavBar from "./ui/navbar/SideNavBar";
import FAndQ from "./ui/content/FAndQ";




export default function Home() {



  return (
    <>
      <Header />
      <div className="mx-auto max-w-1440 p-14 flex">
        <SideNavBar />
        <FAndQ />
      </div>

    </>

  )
}
