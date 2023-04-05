import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hello I am a disabled butcher who loves to code.  Welcome to my Blog! You can contact me at <Link href="https://discord.com"> Discord Gene#6102 </Link> ]</p>
        <p>
          (This is my First blog page View it Here{' '}
          <Link href="posts/first-post">My Blog</Link>.)
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}