import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Assynu Net</title>
        <meta name="description" content="Assynu website" />
        <meta name="keywords" content="assynu,developer,dev,software,software dev,software developer,assynunet,assynu-net,assynu net,software engineer,engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        navigation={[
          { name: "Home", href: "/", current: true },
          { name: "Projects", href: "/projects", current: false },
          { name: "Contact", href: "/contact", current: false },
          { name: "Technologies", href: "/technologies", current: false },
          { name: "FAQ", href: "/faq", current: false },
          { name: "Support me", href: "https://www.patreon.com/assynu", current: false },
          { name: "Github", href: "https://github.com/assynu", current: false },
        ]}
      />

      <main className={styles.main}>
      
        <h1 className={styles.title}>Student, Developer, Gamer.</h1>
        <p className="text-xl p-3.5 max-w-5xl text-center">
          My name is Dawid, I&apos;m a 17 year old. I&apos;m currently in high school, and
          I&apos;m learning how to code by myself. My main and favourite language is
          C#, whitch means I&apos;m using .NET for basicly every project. I&apos;m also
          learning Typescript, JavaScript and Kotlin.
        </p>
      </main>

      <footer className="text-gray-500 mb-3 text-center">
        <a href="https://www.assynu.net">Made by Assynu.</a>
      </footer>
    </div>
  );
};

export default Home;
