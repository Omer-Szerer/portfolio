import Head from 'next/head';
import Navbar from '../components/Navbar';

function About() {
  return (
    <>
      <Head>
        <title>Hey this is all about me...</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 data-test-id="pageTitle" className="title">
              About
            </h1>
            <p className="description">
              About me? What about you?
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
