import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Button, Card } from "react-bootstrap";
import Navbar from "../../components/navbar";
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Assynu - Projects</title>
        <meta name="description" content="Assynu's Projects" />
        <meta name="theme-color" content="#141414" />
        <meta
          name="keywords"
          content="assynu,developer,dev,software,software dev,software developer,assynunet,assynu-net,assynu net,software engineer,engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        navigation={[
          { name: "Home", href: "/", current: false },
          { name: "Projects", href: "/projects", current: true },
          { name: "Contact", href: "/contact", current: false },
          { name: "Technologies", href: "/technologies", current: false },
          { name: "FAQ", href: "/faq", current: false },
          {
            name: "Support me",
            href: "https://www.patreon.com/assynu",
            current: false,
          },
          { name: "Github", href: "https://github.com/assynu", current: false },
        ]}
      />

      <main className={styles.main}>
        <h1 className={styles.title}>Public Projects</h1>
        <div className={styles.flexContainer}>
          <a href="https://play.google.com/store/apps/details?id=com.assynu.shoppinglist">
            <Card
              style={{ width: "18rem" }}
              className="rounded-2xl bg-gray-600 p-3 mt-10"
            >
              <Card.Img
                variant="top"
                className="rounded-2xl mb-3"
                src="https://raw.githubusercontent.com/ASSYNU/ShoppingList/master/footage/SS_1.png"
              />
              <Card.Body>
                <Card.Title className="text-3xl text-center">
                  Shopping List
                </Card.Title>
                <Card.Text className="mt-1 text-center">
                  One list to keep all your need&apos;s in one place! Shopping
                  List application with clean UI, easy to use. Made to keep your
                  need&apos;s in one place. You can use it by your own or make
                  shared list with your friends or family!
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
      </main>

      <footer className="text-gray-500 mb-3 text-center">
        <a href="https://www.assynu.net">Made by Assynu</a>
      </footer>
    </div>
  );
};

export default Home;
