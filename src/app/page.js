"use client";
import Image from "next/image";
import Atropos from "atropos/react";
import "atropos/css";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";
import { FaGithub, FaInstagramSquare } from "react-icons/fa";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins(
  {
    subsets: ['devanagari'],
    weight: ["400", "600", "700", "800"],
    style: "normal"
  }
)

// shadow-[5px_5px_0px_0px_rgba(109,40,217)]

export default function Home() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  return (
    <main class={poppins.className} className="w-full h-screen flex justify-center align-middle items-center bg-[#FEF6DA]">
      <Atropos>
        <div class="w-[350px] h-auto md:w-[600px] md:h-[650px] border-black border-4 rounded-md p-8 bg-white ">
          {/* section container top */}
          <section className="flex flex-col md:flex-row h-auto gap-6">
            {/* left section */}
            <div className="w-full flex flex-col gap-7 md:flex rounded-lg">
              <div
                data-atropos-offset="5"
                className="h-full rounded-lg flex items-center justify-center shadow-[5px_5px_0px_0px_rgba(000,00,000)] bg-[#A0CCD3]"
              >
                <p
                  data-atropos-offset="10"
                  className="text-[#ffffff] font-bold text-4xl"
                >{`${hours}:${minutes}:${seconds}`}</p>
              </div>

              <div
                data-atropos-offset="5"
                className="hidden md:flex h-full rounded-lg  shadow-[5px_5px_0px_0px_rgba(000,00,000)] bg-[#A0CCD3]"
              >
                
              </div>

              <div className="flex h-full gap-5 ">
               <Link data-atropos-offset="10" className="w-full p-3 flex items-center justify-center shadow-[5px_5px_0px_0px_rgba(000,00,000)] bg-[#A0CCD3] rounded-lg" href="https://www.instagram.com/ul.ramadhan" target="_blank">
               <div
                >
                  <FaInstagramSquare
                    data-atropos-offset="10"
                    className="text-5xl"
                  />
                </div>
               </Link>
               <Link data-atropos-offset="10"
                  className="w-full p-3 flex items-center justify-center shadow-[5px_5px_0px_0px_rgba(000,00,000)] bg-[#A0CCD3] rounded-lg" href="https://github.com/sayarama" target="_blank">
               <div
                >
                  <FaGithub data-atropos-offset="10" className="text-5xl" />
                </div>
               </Link>
              </div>
            </div>
            {/* right section */}
            <div
              data-atropos-offset="5"
              className="w-full p-5 text-center gap-3 items-center flex flex-col shadow-[5px_5px_0px_0px_rgba(000,00,000)] bg-[#A0CCD3] rounded-lg"
            >
              <div
                data-atropos-offset="5"
                className="bg-[url('/images/cover.jpg')] bg-cover bg-no-repeat bg-center w-full rounded-tl-lg rounded-tr-lg h-32"
              ></div>
              <p data-atropos-offset="5" className="font-medium">Gyakutengeki</p>
              <div data-atropos-offset="5">
                <AudioPlayer className="rounded-md " src="/assets/music.ogg" />
              </div>
            </div>
          </section>

          {/* Section container bottom */}
          <section className="mt-8">
            <div
              data-atropos-offset="5"
              className="w-full h-48 p-8 shadow-[5px_5px_0px_0px_rgba(000,00,000)] bg-[#A0CCD3] rounded-lg"
            >
              Hello, I&apos;m Enka, also known as Rama or Aul or something else. So,
              what&apos;s the purpose of this website? No one knows, I don&apos;t even know,
              and no one will ever know ...
            </div>
            <div
              data-atropos-offset="5"
              className="w-full mt-5 text-center shadow-[5px_5px_0px_0px_rgba(000,00,000)] bg-[#A0CCD3] rounded-md"
            >
              <Marquee speed={100}>
                <p className="text-xl font-bold ">
                  © Enka | No animals were harmed in the making of this website,
                  but a few pixels may have gotten slightly bruised.
                </p>
              </Marquee>
            </div>
          </section>
        </div>
      </Atropos>
    </main>
  );
}
