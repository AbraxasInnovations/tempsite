import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Abraxas Innovations</title>
        <meta name="description" content="Welcome to Abraxas Innovations - Transforming ideas into reality" />
        <meta name="keywords" content="Abraxas Innovations, technology, innovation" />
        <meta name="author" content="Abraxas Innovations" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Abraxas Innovations" />
        <meta property="og:description" content="Welcome to Abraxas Innovations - Transforming ideas into reality" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abraxasinnovations.com" />
        <meta property="og:image" content="/og-image2.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="robots" content="index, follow" />
        <link href="https://fonts.googleapis.com/css2?family=Exo+2&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <div className="logo-container">
          <video autoPlay loop muted playsInline>
            <source src="/logo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="coming-soon">Coming Soon</div>
      </main>

      <style jsx global>{`
        html,
        body {
          margin: 0;
          padding: 0;
          background-color: #000000;
          height: 100vh;
        }

        main {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }

        .logo-container {
          width: 300px;
          height: 300px;
          position: relative;
          margin-bottom: 20px;
        }

        video {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .coming-soon {
          color: white;
          font-family: 'Exo 2', sans-serif;
          font-weight: 400;
          font-size: 24px;
          margin-top: 20px;
        }
      `}</style>
    </>
  );
} 