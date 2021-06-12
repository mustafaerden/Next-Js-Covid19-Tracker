import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import WorldTotalItem from "./WorldTotalItem";
import AllCountriesItem from "./AllCountriesItem";
import Letters from "./Letters";
import { lettersData } from "../../data/data";

const Home = ({ worldTotal, allCountries }) => {
  let filteredCountriesArray = [];
  const [letters, setLetters] = useState(lettersData);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [filter, setFilter] = useState("A");
  const [searchText, setSearchText] = useState("");

  const filterHandler = (filter) => {
    setFilter(filter);
  };

  useEffect(() => {
    if (searchText) {
      allCountries
        .filter((country) =>
          country.country.toUpperCase().includes(searchText.toUpperCase())
        )
        .map((filtered) => {
          filteredCountriesArray.push(filtered);
          setFilteredCountries(filteredCountriesArray);
        });
    } else {
      allCountries.map((country) => {
        if (country.country.startsWith(filter)) {
          filteredCountriesArray.push(country);
          setFilteredCountries(filteredCountriesArray);
        }
      });
    }
  }, [allCountries, filter, searchText]);

  return (
    <>
      <WorldTotalItem worldTotal={worldTotal} />

      <h1 className="text-gray-200 text-3xl font-semibold uppercase border-b border-gray-600 inline">
        Countries
      </h1>

      <div className="mt-5">
        <input
          className="w-full p-3 bg-gray-600 text-white text-lg rounded shadow tracking-wide"
          type="text"
          placeholder="Search By Country Name"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between mt-5">
        {letters &&
          letters.map((letter) => (
            <Letters
              key={letter}
              letter={letter}
              filter={filter}
              filterHandler={filterHandler}
            />
          ))}
      </div>

      {filteredCountries && filteredCountries.length > 0 ? (
        filteredCountries
          .sort((a, b) => a.country.localeCompare(b.country))
          .map((c) => <AllCountriesItem key={uuidv4()} country={c} />)
      ) : (
        <h1 className="text-white text-3xl">no countries available</h1>
      )}
    </>
  );
};

export default Home;
