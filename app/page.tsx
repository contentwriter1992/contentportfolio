import Intro from '@/components/intro';
import About from '@/components/about';
import Artikelen from '@/components/projects';
import SectionDivider2 from '@/components/sectionDivider2'
import Skills from '@/components/skills';
import Experience from '@/components/experience';
import Contact from '@/components/contact';
import Photo from '@/components/photo';
import Head from 'next/head';

export default function Home() {
  return (
  <main className="flex flex-col items-center px-4">
    <Intro />
    <About />
    <SectionDivider2 />
    <Artikelen />
    <Skills />
    <SectionDivider2 />
    <Photo />
    <Experience />
    <Contact />
  </main>
  );
}

function viewPort({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export viewPort;
