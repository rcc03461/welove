import "./home.css";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import Image from "next/image";
import {ReadMore} from "./components/read-more";
import brand from "./images/logo.svg";
import { auth, clerkClient } from "@clerk/nextjs/server";
import './globals.css';
export default function Home() {
  // const { userId } = auth().protect();
  return (
    <>
    <Header />
      <main>
        <div className="max-w-[1200px] mx-auto pb-20">
          <div className="relative flex">
            <div className="w-1/2 flex items-center">
            <div>
              <h1 className="text-4xl">專注婚禮請柬</h1>
              <p className="text-gray-400 py-3">提供帳號、KakaoTalk 轉帳、防擴充、BGM、RSVP、導航</p>
              <ReadMore props="xl"/>
            </div>
            </div>
            <div className="w-1/2 relative">
            <Image
              src="/home/home_image_mask.png"
              width={539}
              height={588}
              alt="Picture of the author"
              className="shadow-white float-end"
            />
            <div className="absolute top-[55%] left-[0px] image-mask">
            <Image
              src="/home/home_image.png"
              width={419}
              height={456}
              alt="Picture of the author"
              className="shadow-white"
            />
            </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-4xl">自由設計</p>
            <p className="py-3 text-gray-400">提供帳號、KakaoTalk 轉帳、防擴充、BGM、RSVP、導航</p>
              <div className="flex justify-between gap-10 pt-4">
                <div className="w-1/3">
                  <Image
                    src="/home/item1.png"
                    width={343}
                    height={343}
                    alt="Picture of Product"
                    className="shadow-white w-full h-auto"
                  />
                  <div className="flex justify-between items-center pt-4">
                    <p>簡約</p>
                    <ReadMore props="sm"/>
                  </div>
                </div>
                <div className="w-1/3">
                  <Image
                    src="/home/item1.png"
                    width={343}
                    height={343}
                    alt="Picture of Product"
                    className="shadow-white w-full h-auto"
                  />
                  <div className="flex justify-between items-center pt-4">
                    <p>簡約</p>
                    <ReadMore props="sm"/>
                  </div>
                </div>
                <div className="w-1/3">
                  <Image
                    src="/home/item1.png"
                    width={343}
                    height={343}
                    alt="Picture of Product"
                    className="shadow-white w-full h-auto"
                  />
                  <div className="flex justify-between items-center pt-4">
                    <p>簡約</p>
                    <ReadMore props="sm"/>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </main>
      {/* <LearnMore cards={CARDS} /> */}
    <Footer />
    </>
  );
}
