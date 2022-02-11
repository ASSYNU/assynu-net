import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Card } from "react-bootstrap";
import Navbar from "../../components/navbar";
import styles from "../../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Assynu - Technologies</title>
        <meta name="description" content="Assynu's Technologies" />
        <meta name="theme-color" content="#141414" />
        <meta name="keywords" content="assynu,developer,dev,software,software dev,software developer,assynunet,assynu-net,assynu net,software engineer,engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
        navigation={[
          { name: "Home", href: "/", current: false },
          { name: "Projects", href: "/projects", current: false },
          { name: "Contact", href: "/contact", current: false },
          { name: "Technologies", href: "/technologies", current: true },
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
        <h1 className={styles.title}>Technologies <br/> I&apos;m using</h1>
        <div className={styles.flexContainer}>
          <Card
            style={{ width: "18rem" }}
            className="rounded-2xl bg-gray-600 p-3 m-5"
          >
            <Card.Img
              variant="top"
              className="rounded-2xl mb-3"
              src="https://res.cloudinary.com/practicaldev/image/fetch/s--cKHeGzUo--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/uf3a8y7xh8aroo95qocz.jpg"
            />
            <Card.Body>
              <Card.Title className="text-3xl text-center">
                Typescript
              </Card.Title>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem" }}
            className="rounded-2xl bg-gray-600 p-3  m-5"
          >
            <Card.Img
              variant="top"
              className="rounded-2xl mb-3"
              src="data:image/png;base64,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"
            />
            <Card.Body>
              <Card.Title className="text-3xl text-center">
                C# / DotNet
              </Card.Title>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem" }}
            className="rounded-2xl bg-gray-600 p-3  m-5"
          >
            <Card.Img
              variant="top"
              className="rounded-2xl mb-3"
              src="https://www.cognizantsoftvision.com/wp-content/uploads/2019/01/kotlin.jpeg"
            />
            <Card.Body>
              <Card.Title className="text-3xl text-center">Kotlin</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className={styles.flexContainer}>
          <Card
            style={{ width: "18rem" }}
            className="rounded-2xl bg-gray-600 p-3  m-5"
          >
            <Card.Img
              variant="top"
              className="rounded-2xl mb-3"
              src="https://www.pozycjonusz.pl/wp-content/uploads/2020/11/java-script-SEO-1.jpg"
            />
            <Card.Body>
              <Card.Title className="text-3xl text-center">
                Javascript
              </Card.Title>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem" }}
            className="rounded-2xl bg-gray-600 p-3  m-5"
          >
            <Card.Img
              variant="top"
              className="rounded-2xl mb-3"
              src="https://kariera.future-processing.pl/wp-content/uploads/2015/04/blog_node.jpg"
            />
            <Card.Body>
              <Card.Title className="text-3xl text-center">Node Js</Card.Title>
            </Card.Body>
          </Card>

          <Card
            style={{ width: "18rem" }}
            className="rounded-2xl bg-gray-600 p-3  m-5"
          >
            <Card.Img
              variant="top"
              className="rounded-2xl mb-3"
              src="https://serwerweb.pl/wp-content/uploads/2021/03/java.png"
            />
            <Card.Body>
              <Card.Title className="text-3xl text-center">Java</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </main>

      <footer className="text-gray-500 mb-3 text-center">
        <a href="https://www.assynu.net">Made by Assynu</a>
      </footer>
    </div>
  );
};

export default Home;
