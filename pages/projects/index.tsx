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
        <title>Dawid Bartczak - Projects</title>
        <meta name="description" content="Dawid Bartczak's Projects" />
        <meta name="theme-color" content="#141414" />
        <meta
          name="keywords"
          content="assynu,developer,dev,software,software dev,software developer,bartczakdawidcom,bartczakdawid-com,assynu net,software engineer,engineer"
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
        <a href="https://play.google.com/store/apps/details?id=net.assynu.lifeberryapp" className="m-5">
            <Card
              style={{ width: "18rem" }}
              className="rounded-2xl bg-gray-600 p-3 mt-10"
            >
              <Card.Img
                variant="top"
                className="rounded-2xl mb-3 mx-3"
                src="https://play-lh.googleusercontent.com/bdp7hgX7lnTTOGNKy2PpzEDgB6AQpOHNbSgJcGoWTaE08IHnKge_djodHCqHo8vBmg=w240-h480-rw"
              />
              <Card.Body>
                <Card.Title className="text-3xl text-center">
                  Lifeberry Employee Manager
                </Card.Title>
                <Card.Text className="mt-1 text-center">
                  Official mobile app to manage Lifeberry employees and resources.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
          <a href="https://github.com/VulcanovaApp/Vulcanova" className="m-5">
            <Card
              style={{ width: "18rem" }}
              className="rounded-2xl bg-gray-600 p-3 mt-10"
            >
              <Card.Img
                variant="top"
                className="rounded-2xl mb-3 mx-3"
                src="https://cdn.discordapp.com/attachments/952673254772977774/955160006137897090/unknown.png"
              />
              <Card.Body>
                <Card.Title className="text-3xl text-center">
                  Vulcanova (Contributor)
                </Card.Title>
                <Card.Text className="mt-1 text-center">
                  Unmanufactured, cross-platform, mobile Vulcan UONET + client.
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
          <a href="https://discord.gg/77roleplay" className="m-5">
            <Card
              style={{ width: "18rem" }}
              className="rounded-2xl bg-gray-600 p-3 mt-10"
            >
              <Card.Img
                variant="top"
                className="rounded-2xl mb-3 mx-5"
                src="https://cdn.discordapp.com/attachments/1023167868575166495/1080952694816129125/logo-77RP.png"
              />
              <Card.Body>
                <Card.Title className="text-3xl text-center">
                  77 Roleplay
                </Card.Title>
                <Card.Text className="mt-1 text-center">
                  FiveM Roleplay Server
                </Card.Text>
              </Card.Body>
            </Card>
          </a>
        </div>
      </main>

      <footer className="text-gray-500 mb-3 text-center">
        <a href="https://www.bartczakdawid.com">Made by Dawid Bartczak</a>
      </footer>
    </div>
  );
};

export default Home;
