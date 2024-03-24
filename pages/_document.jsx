import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.png" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="✨Gojo is your ultimate companion for bringing music to life within your Discord server. Totally FREE with High Quality."
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@Gojo" />
          <meta name="twitter:creator" content="@Gojo" />
          <meta property="og:url" content="https://gojo-bot.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Gojo" />
          <link
            rel="icon"
            href="/img/logo.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="✨Gojo is your ultimate companion for bringing music to life within your Discord server. Totally FREE with High Quality."
          />
          <meta property="og:image" content="/img/bck.jpeg" />
          <meta property="og:image:alt" content="Gojo" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="Gojo"
          />
          <meta name="theme-color" content="#0a9afa" />
          <link rel="icon" href="/img/logo.png" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
