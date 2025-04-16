import Head from 'next/head';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Creating the keyframe animations programmatically since we can't use SASS
    const createKeyframes = (name) => {
      let styles = '';
      const steps = 20;
      
      for (let i = 0; i <= steps; i++) {
        const percentage = (i * (100/steps)).toFixed(2);
        const randomTop = Math.floor(Math.random() * 30);
        const randomBottom = Math.floor(Math.random() * 30);
        
        styles += `
          ${percentage}% {
            clip: rect(${randomTop}px, 9999px, ${randomBottom + 100}px, 0);
          }
        `;
      }
      
      const styleEl = document.createElement('style');
      styleEl.textContent = `
        @keyframes ${name} {
          ${styles}
        }
      `;
      
      document.head.appendChild(styleEl);
    };
    
    createKeyframes('glitch-animation-1');
    createKeyframes('glitch-animation-2');
    
    return () => {
      // Cleanup if needed
    };
  }, []);

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
        <link href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main>
        <div className="logo-container">
          <video autoPlay loop muted playsInline>
            <source src="/logo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="glitch-wrapper">
          <h1 className="glitch">Coming Soon</h1>
        </div>
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

        .glitch-wrapper {
          position: relative;
          margin-top: 100px;
        }

        .glitch {
          color: white;
          font-family: 'Exo 2', sans-serif;
          font-weight: 700;
          font-size: 35px;
          position: relative;
        }

        .glitch::before,
        .glitch::after {
          content: "Coming Soon";
          position: absolute;
          width: 100%;
          height: 100%;
          background: black;
          overflow: hidden;
          top: 0;
          left: 0;
        }

        .glitch::before {
          left: 1px;
          text-shadow: -1px 0 rgba(255, 0, 0, 0.7);
          animation-name: glitch-animation-1;
          animation-duration: 3s;
          animation-timing-function: linear;
          animation-delay: 0s;
          animation-iteration-count: infinite;
          animation-direction: reverse-alternate;
        }

        .glitch::after {
          left: -1px;
          text-shadow: -1px 0 rgba(0, 0, 255, 0.7);
          animation-name: glitch-animation-2;
          animation-duration: 3s;
          animation-timing-function: linear;
          animation-delay: 0s;
          animation-iteration-count: infinite;
          animation-direction: reverse-alternate;
        }
      `}</style>
    </>
  );
} 
