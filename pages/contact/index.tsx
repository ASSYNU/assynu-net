import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/outline";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../../components/navbar";
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Assynu - Contact</title>
        <meta name="description" content="Assynu's Contact" />
        <meta name="theme-color" content="#141414" />
        <meta name="keywords" content="assynu,developer,dev,software,software dev,software developer,bartczakdawidcom,bartczakdawid-com,assynu net,software engineer,engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        navigation={[
          { name: "Home", href: "/", current: false },
          { name: "Projects", href: "/projects", current: false },
          { name: "Contact", href: "/contact", current: true },
          { name: "Technologies", href: "/technologies", current: false },
          { name: "FAQ", href: "/faq", current: false },
          {
            name: "Support me!",
            href: "https://www.patreon.com/assynu",
            current: false,
          },
          { name: "Github", href: "https://github.com/assynu", current: false },
        ]}
      />

      <main className={styles.main}>
        <h1 className={styles.title}>Contact</h1>
        <div className="w-full px-4 pt-16">
          <div className="w-full max-w-md p-2 mx-auto rounded-2xl bg-gray-600">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                    <span>Email</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white font-bold">
                    contact@assynu.net
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
            {/* <Disclosure as="div" className="mt-2">
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                    <span>Discord</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-white`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white font-bold">
                    <a href="https://discord.gg/m3dDCMd7kJ">
                      Join my server and open a ticket!
                    </a>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure> */}
          </div>
        </div>
      </main>

      <footer className="text-gray-500 mb-3 text-center">
        <a href="https://www.bartczakdawid.com">Made by Assynu</a>
      </footer>
    </div>
  );
};

export default Home;
