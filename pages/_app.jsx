import "../public/css/global.css";
import "../public/css/tippy.css";
import "../public/css/customColors.css";
import "tailwindcss/tailwind.css";
import NProgress from "nprogress";
import Router, { useRouter } from "next/router";
import Head from "next/head";

import Header from "../components/Static/Header.jsx";
import Footer from "../components/Static/Footer.jsx";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

import { ThemeProvider } from 'next-themes'

export default function AwardApp({ Component, pageProps }) {
 
  const NavItems = [
    {
      link: true,
      name: "Home",
      icon: "fal fa-home",
      activeIcon: "fa fa-home",
      href: "/",
    },
    {
      link: true,
      name: "Commands",
      icon: "fa fa-list-alt",
      activeIcon: "fa fa-list-alt",
      href: "https://top.gg/bot/1167896630930985023/#commands",
    },
    {
      link: true,
      name: "Support",
      icon: "fab fa-discord",
      activeIcon: "fab fa-discord",
      href: "https://discord.gg/vrJA4K68N6",
    },
    {
      link: true,
      name: "Donate",
      icon: "fa-solid fa-circle-dollar-to-slot",
      activeIcon: "fa-solid fa-circle-dollar-to-slot",
      href: "https://payments.cashfree.com/forms/gojo",
    },
    {
      link: true,
      name: "Team",
      icon: "fal fa-stars",
      activeIcon: "fa fa-stars",
      href: "/team",
    }
  ]

  return (
    <ThemeProvider defaultTheme='blue'>
    <div className="h-screen relative border-t-4 border-amber-600">
      <div
        className="bg-gradient-to-b z-10 opacity-[25%] absolute top-0 w-full from-amber-600 to-transparent"
        style={{ height: "500px" }}
      />
      <Head>
        <title>
          Gojo
        </title>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9608766355595519"
     crossorigin="anonymous"></script>
      <meta name="google-adsense-account" content="ca-pub-9608766355595519"/>
      <meta name="trustpilot-one-time-domain-verification-id" content="1522ad8f-0229-4f0d-9f08-ff13983f211b"/>
      <link rel="icon" href="/img/logo.png" />
      <meta name="keywords" content="Gojo, Gojo Music Bot, Gojo Bot, discord music bot, music bot discord, discord, discord bot, bot, music bot, discord web, discord app, bots for discord music, discord bot for music" />
      </Head>
      <main className="transition-all duration-200 z-10 absolute inset-0 px-5 h-screen max-w-7xl w-full mx-auto">
        <Header NavItems={NavItems} />
        <div className="block px-5 md:px-0">
          <Component {...pageProps} />
        </div>
        <Footer />
      </main>
      <div>
        <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js" />
        <script src="/js/main.js?i=2" />
      </div>
    </div>
    </ThemeProvider>
  );
}
