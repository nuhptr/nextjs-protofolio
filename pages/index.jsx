import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillBehanceCircle,
} from "react-icons/ai";
import Image from "next/image";

import adied from "../public/dev-ed-wave.png";
import design from "../public/design.png";
import code from "../public/code.png";
import consultant from "../public/consulting.png";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import web5 from "../public/web5.png";
import web6 from "../public/web6.png";

import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Adi&apos;s Website</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        {/* Header */}
        <section className="min-h-screen">
          <nav className="pt-10 pb-10 flex justify-between">
            <h1 className="text-gray-800 text-xl font-plusJakartaSans font-medium dark:text-white">
              Developed by Adi
            </h1>
            <ul className="flex items-center">
              <li className="dark:text-white text-gray-800">
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  href="#"
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 font-plusJakartaSans"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          {/* End Header */}

          <div className="text-center p-10">
            <h2 className="text-5xl py-4 text-teal-500 font-medium font-plusJakartaSans md:text-6xl">
              Adi Nugraha Putra
            </h2>
            <h3 className="text-2xl font-plusJakartaSans md:text-3xl text-gray-600 dark:text-white">
              Developer and Designer
            </h3>
            <p className="py-4 leading-8 font-plusJakartaSans text-gray-800 md:text-base max-w-lg mx-auto dark:text-gray-400">
              Freelancer providing services for programming and design ui ux
              needs, Join me down bellow and let&apos;s get cracking!
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 text-gray-600">
            <a
              href="https://www.instagram.com/nuhptr/"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/adikuhaku/"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <AiFillLinkedin />
            </a>

            <a
              href="https://www.behance.net/adinugraha1"
              target={"_blank"}
              rel={"noopener noreferrer"}
            >
              <AiFillBehanceCircle />
            </a>
          </div>

          <div className="relative mt-10 mx-auto overflow-hidden w-80 h-80 rounded-full bg-gradient-to-b from-teal-500 md:h-96 md:w-96">
            <Image
              src={adied}
              alt="Adi Nugraha Putra"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>
        {/* end-header */}

        {/* Categories */}
        <section>
          <div className="">
            <h3 className="text-3xl pt-5 pb-2 mt-5 font-plusJakartaSans font-medium text-gray-800 dark:text-white">
              Services I offer
            </h3>
            <p className="text-base py-2 leading-8 font-plusJakartaSans text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freel developer, I&apos;ve
              done remote work for{" "}
              <span className="text-teal-500">agencies </span> consulted for{" "}
              <span className="text-teal-500">startups </span>
              and collaborated with talented people to create digital products
              for both business and consumer use
            </p>
            <p className="text-base py-2 leading-8 font-plusJakartaSans text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including UI UX Design,
              Programming, and Teaching
            </p>
          </div>

          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-100 dark:shadow-slate-600">
              <div>
                <Image
                  src={design}
                  alt="Design Image"
                  width={100}
                  height={100}
                />
                <h3 className="text-gray-800 text-lg font-plusJakartaSans font-medium pt-8 pb-2">
                  UI UX Design
                </h3>
                <p className="text-gray-800 py-2 font-plusJakartaSans">
                  Creating UI UX Design for user centered design and user
                  experience design
                </p>
                <h4 className="py-4 text-teal-600 font-plusJakartaSans">
                  Design tools I use
                </h4>
                <p className="text-gray-800 py-1 font-plusJakartaSans">Figma</p>
                <p className="text-gray-800 py-1 font-plusJakartaSans">
                  Zeplin
                </p>
                <p className="text-gray-800 py-1 font-plusJakartaSans">
                  Whimsical
                </p>
                <p className="text-gray-800 py-1 font-plusJakartaSans">Maze</p>
              </div>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200 dark:shadow-slate-600">
              <div>
                <Image src={code} alt="Design Image" width={100} height={100} />
                <h3 className="text-gray-800 text-lg font-plusJakartaSans font-medium pt-8 pb-2">
                  Code
                </h3>
                <p className="text-gray-800 py-2 font-plusJakartaSans">
                  Do you have an idea for your next great website? Let&apos;s
                  make it a reality.
                </p>
                <h4 className="py-4 text-teal-600 font-plusJakartaSans">
                  Tools I use
                </h4>
                <p className="text-gray-800 py-1 font-plusJakartaSans">
                  React / NextJS
                </p>
                <p className="text-gray-800 py-1 font-plusJakartaSans">
                  Laravel
                </p>
                <p className="text-gray-800 py-1 font-plusJakartaSans">
                  TailwindCSS
                </p>
              </div>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-200 dark:shadow-slate-600">
              <div>
                <Image
                  src={consultant}
                  alt="Design Image"
                  width={100}
                  height={100}
                />
                <h3 className="text-lg font-plusJakartaSans font-medium pt-8 pb-2 text-gray-800">
                  Consultant Design
                </h3>
                <p className="py-2 font-plusJakartaSans text-gray-800">
                  Interested in feedback for your project? I can give you tips
                  and tricks.
                </p>
                <h4 className="py-4 text-teal-600 font-plusJakartaSans">
                  Design tools I use
                </h4>
                <p className="text-gray-800 py-1 font-plusJakartaSans">
                  Coolors
                </p>
                <p className="text-gray-800 py-1 font-plusJakartaSans">Wcag</p>
                <p className="text-gray-800 py-1 font-plusJakartaSans">
                  Design System Repo
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End-Categories */}

        {/* Portofolios */}
        <section>
          <div>
            <h3 className="text-3xl pt-5 pb-2 mt-5 font-plusJakartaSans font-medium text-gray-800 dark:text-white">
              Portofolio
            </h3>
            <p className="text-md py-2 leading-8 font-plusJakartaSans  text-gray-800  dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I&apos;ve done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-base py-2 leading-8 font-plusJakartaSans text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including UI UX Design,
              Programming, and Teaching
            </p>
          </div>

          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                src={web1}
                alt="web1"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web2}
                alt="web2"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web3}
                alt="web3"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web4}
                alt="web4"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web5}
                alt="web5"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                src={web6}
                alt="web6"
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
