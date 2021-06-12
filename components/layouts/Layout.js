import Head from "next/head";
import Navigation from "../common/Navigation";

const Layout = ({ children, title = "Covid 19 Tracker App" }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Covid 19 Tracker Application" />
      </Head>

      <Navigation />
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
