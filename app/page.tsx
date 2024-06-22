import Intro from '@/components/intro';
import About from '@/components/about';
import Artikelen from '@/components/projects';
import SectionDivider2 from '@/components/sectionDivider2'
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Contact from '@/components/contact';
import Photo from '@/components/photo';
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
  // <main className="flex flex-col items-center px-4">
    <main className="min-h-screen flex flex-col items-center">
    <Intro />
    <About />
    <SectionDivider2 />
    <Artikelen />
    <Skills />
    <SectionDivider2 />
    <Photo />
    <Experience />
    <Contact />
    <Analytics />
  </main>
  );
}

// function viewPort({ Component, pageProps }) {
//   return (
//     <>
//       <Head>
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//       </Head>
//       <Component {...pageProps} />
//     </>
//   );
// }

// export viewPort;
