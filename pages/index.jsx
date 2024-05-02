import Link from "next/link";
import Image from "next/image";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useRouter } from 'next/router';

export default function Index() {
const router = useRouter();
  return ( 
    <>
	<head>
	<meta name="keywords" content="Gojo, Gojo Music Bot, Gojo Bot, discord music bot, music bot discord, discord, discord bot, bot, music bot, discord web, discord app, bots for discord music, discord bot for music, free, quality, music" />
	</head>
      <div className="py-20 mb-30 max-w-3xl mx-auto">
        <div className="flex w-full justify-center">
      <img className="lg:block pb-8 rounded-xl  shadow-xl shadow-black" width="500" src="/img/bck.jpeg" />
      </div>
        <p className="animateHeader text-4xl font-extrabold text-center text-white">
		
          Imagine a Discord music <div className="py-10"></div>
  <Link href="">
  <a className={"fa-solid fa-checkpx-6 justify-center gap-x-2 shadow-lg shadow-yellow-400/20 rounded-xl py-4 font-medium bg-indigo-600 text-white " }>
APP</a>
  </Link>
        </p>
        <p className="animateHeader text-white text-opacity-50 text-center mt-5">
      ✨Gojo is your ultimate companion for bringing music to life within your Discord server. Totally FREE with High Quality. 
	  </p>
        <div className="animateHeader mt-10 flex flex-wrap items-center justify-center gap-x-4">
  
            <Link href={"https://discord.com/oauth2/authorize?client_id=1167896630930985023"}>
              <a
                className={
                  "flex items-center px-6 justify-center gap-x-2 shadow-lg shadow-amber-600/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white " 
                }
              >
          Invite
              </a>
            </Link>
  <div className="py-10"></div>
  <Link href={"https://top.gg/bot/1167896630930985023/vote"}>
  <a className={" px-6 justify-center gap-x-2 shadow-lg shadow-yellow-400/20 rounded-xl py-4 font-medium bg-gradient-to-bl from-yellow-400 to-yellow-600 hover:opacity-80 transition duration-200 text-white " }>
Vote</a>
  </Link>
        </div>

        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag pointer-events-none opacity-10 -left-[10vw] absolute top-[8vw] h-[35vw] flex-shrink-0 grayscale rotate-[1deg]">
        <Image width="600" height="600" src="/img/gift-left.png"  />
        </div>
        <div style={{ zIndex: '-1' }} className="hidden xl:block undrag opacity-10 pointer-events-none -right-[15vw] absolute top-[13vw] h-[90vw] grayscale -rotate-9">
        <Image  width="600" height="600" src="/img/gift-right.png"  />
        </div>
      </div>



      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-y-0 lg:gap-x-12 py-24">
          <div className="col-span-4">
            <p className="text-white text-4xl font-bold" dangerouslySetInnerHTML={{ __html:"Gojo" }} />
            <p className="text-white text-md font-medium text-gray-500/75" dangerouslySetInnerHTML={{ __html: "How about creating the best environment to relax yourself with your own emotions?" }}/>
            <a href="https://discord.com/oauth2/authorize?client_id=1167896630930985023" className={"mt-10 flex items-center px-4 justify-center gap-x-2 shadow-lg shadow-amber-600/20 cursor-pointer rounded-xl py-4 font-medium bg-gradient-to-r from-amber-700 to-amber-500 hover:opacity-80 transition duration-200 text-white"}>
              <i className="fab fa-discord mr-2" />Invite
            </a>
          </div>

          <div className="col-span-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
           
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-music text-2xl text-amber-500`} /> Quality</p>
                  <p className="text-gray-500 line-clamp-4">Provides you High Quality music listening completely FREE with music filters.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-vr-cardboard text-2xl text-amber-500`} /> Controls</p>
                  <p className="text-gray-500 line-clamp-4">Experience effortless control with Gojo's intuitive playback buttons. Skip, pause, adjust volume, and more, all at your fingertips.</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-address-card text-2xl text-amber-500`} /> Profile & Badges</p>
                  <p className="text-gray-500 line-clamp-4">Customizable music profiles showcasing your favourite song, songs played, time listened and achievement badges</p>
                </div>
              </div>
              <div>
                <div className="text-white">
                  <p className="text-xl font-semibold mt-5"><i className={`fa fa-rectangle-list text-2xl text-amber-500`} /> Charts</p>
                  <p className="text-gray-500 line-clamp-4">Get access to global/regional weekly,daily & viral top charts.</p>
                </div>
              </div>
          </div>
      </div>

      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
		<img src="https://i.imgur.com/lDdcJDI.png" className="hidden lg:block rounded-xl shadow-xl shadow-black" />
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left">
                  <img src="https://i.imgur.com/lDdcJDI.png"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="fa fa-vr-cardboard text-3xl text-white text-start font-semibold">Control Board</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-4">Experience effortless control with Gojo's intuitive playback buttons. Skip, pause, adjust volume, and more, all at your fingertips.</p>
                </div>
              </>
      
        </div>

      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left">
                  <img src="https://i.imgur.com/89kZ3UV.png"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="fa fa-address-card text-3xl text-white text-start font-semibold">Music Profile</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-4">Customizable music profiles showcasing your favourite song, songs played, time listened and achievement badges</p>
                </div>
                <img src="https://i.imgur.com/89kZ3UV.png" className="hidden lg:block rounded-xl shadow-xl shadow-black" />
              </>
      
        </div>

      <div className="flex flex-row w-full h-auto lg:h-56 my-14 lg:my-40 bg-gradient-to-br lg:px-30 from-neutral-900/90 flex items-center justify-start to-neutral-900/50 rounded-lg p-1 shadow-md">
              <>
                <div className="lg:mx-4 lg:p-8 py-4 lg:py-16 flex items-center justify-center flex-col text-center w-full lg:w-auto lg:text-left lg:flex-none">
                  <img src="https://i.imgur.com/89kZ3UV.png"  width="256" className="lg:hidden rounded-xl mb-5 shadow-xl shadow-black" />
                  <p className="text-3xl text-white text-start font-semibold">Music Profile</p>
                  <p className="text-md text-white font-medium text-gray-500 line-clamp-4">Customizable music profiles showcasing your favourite song, songs played, time listened and achievement badges</p>
                </div>
                <img src="https://i.imgur.com/89kZ3UV.png" className="hidden lg:block rounded-xl perspective-right shadow-xl shadow-black" />
              </>
      
        </div>
	<Analytics />
	<SpeedInsights route={router.pathname} />;
      </>
  )
}
