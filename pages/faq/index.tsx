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
        <title>Assynu - Projects</title>
        <meta name="description" content="Assynu's Projects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        navigation={[
          { name: "Home", href: "/", current: false },
          { name: "Projects", href: "/projects", current: false },
          { name: "Contact", href: "/contact", current: false },
          { name: "Technologies", href: "/skillset", current: false },
          { name: "FAQ", href: "/faq", current: true },
          { name: "Support me", href: "https://www.patreon.com/assynu", current: false },
          { name: "Github", href: "https://github.com/assynu", current: false },
        ]}
      />

      <main className={styles.main}>
      
        <h1 className={styles.title}>Frequently Asked Questions</h1>
        <div className="w-full px-4 pt-16">
            <div className="w-full max-w-md p-2 mx-auto rounded-2xl bg-gray-600">
                <Disclosure>
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                        <span>Can I help you with your program/script?</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-white`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white font-bold">
                        Of course, if it is within my skill set.
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                        <span>Can I make desktop/web app for you?</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-white`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white font-bold">
                        Yes, just contact with me!
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                        <span>Am I looking for a job?</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-white`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white font-bold">
                        Yes, if you would like to offer me a job just contact me!
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                        <span>Typescript or Javascript?</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-white`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white font-bold">
                        Typescript
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
                <Disclosure as="div" className="mt-2">
                {({ open }) => (
                    <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-white bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-opacity-75">
                        <span>Do i still make FiveM Scripts/Maps?</span>
                        <ChevronUpIcon
                        className={`${
                            open ? 'transform rotate-180' : ''
                        } w-5 h-5 text-white`}
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-white font-bold">
                        No.
                    </Disclosure.Panel>
                    </>
                )}
                </Disclosure>
            </div>
        </div>
      </main>

      <footer className="text-gray-500 mb-3 text-center">
        <a href="https://www.assynu.net">Made by Assynu</a>
      </footer>
    </div>
  );
};

export default Home;
