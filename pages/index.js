import Layout from "../components/layouts/Layout";
import Home from "../components/home/Home";
import axios from "axios";

export default function HomePage({ worldTotal, allCountries }) {
  return (
    <Layout title="Covid 19 Tracker | Home Page">
      <Home worldTotal={worldTotal} allCountries={allCountries} />
    </Layout>
  );
}

export async function getServerSideProps(context) {
  try {
    const worldTotalRes = await axios.get(
      "https://api.covid19api.com/world/total"
    );
    const allCountriesRes = await axios.get(
      "https://corona.lmao.ninja/v2/countries?yesterday&sort=cases"
    );

    const worldTotal = worldTotalRes.data;
    const allCountries = allCountriesRes.data;

    return {
      props: {
        worldTotal,
        allCountries,
      }, // will be passed to the page component as props
    };
  } catch (error) {
    console.log("error occured: ", error);
  }
}
