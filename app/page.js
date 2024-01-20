'use client';

import Image from "next/image";
import Header from "./ui/header/Header";
import SideNavBar from "./ui/navbar/SideNavBar";
import FAndQ from "./faq/page";




export default function Home() {
  return (
    <>
      <Header />
      <div className="mx-auto max-w-1440 p:10 lg:p-14 flex">
        <SideNavBar />
        <FAndQ />
      </div>
    </>

  )
}
