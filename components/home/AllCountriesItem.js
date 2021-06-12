const AllCountriesItem = ({ country: countryData }) => {
  const {
    country,
    updated,
    countryInfo,
    cases,
    todayCases,
    deaths,
    todayDeaths,
    recovered,
    active,
  } = countryData;

  var date = new Date(updated);
  var month = date.toLocaleString("default", { month: "long" });
  var updatedDate =
    date.getDate() +
    " " +
    month +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes();

  return (
    <>
      <div className="text-gray-200 bg-gray-700 px-10 py-5 rounded-lg shadow mt-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center">
            <img className="w-10 mr-5" src={countryInfo.flag} />
            <h1 className="uppercase font-semibold inline text-2xl border-b border-gray-600">
              {country}
            </h1>
          </div>
          <div>
            <p>Updated At:</p>
            <span className="text-sm font-semibold">{updatedDate}</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-5">
          <div className="bg-gray-600 rounded shadow py-5">
            <h3 className="font-semibold text-xl mb-2">Total Confirmed</h3>
            <span className="text-green-400 font-bold text-3xl">
              {cases.toLocaleString()}
            </span>
          </div>
          <div className="bg-gray-600 rounded shadow py-5">
            <h3 className="font-semibold text-xl mb-2">Today's Cases</h3>
            <span className="text-green-400 font-bold text-3xl">
              {todayCases.toLocaleString()}
            </span>
          </div>
          <div className="bg-gray-600 rounded shadow py-5">
            <h3 className="font-semibold text-xl mb-2">Total Deaths</h3>
            <span className="text-green-400 font-bold text-3xl">
              {deaths.toLocaleString()}
            </span>
          </div>
          <div className="bg-gray-600 rounded shadow py-5">
            <h3 className="font-semibold text-xl mb-2">Today's Deaths</h3>
            <span className="text-green-400 font-bold text-3xl">
              {todayDeaths.toLocaleString()}
            </span>
          </div>
          <div className="bg-gray-600 rounded shadow py-5">
            <h3 className="font-semibold text-xl mb-2">Recovered</h3>
            <span className="text-green-400 font-bold text-3xl">
              {recovered.toLocaleString()}
            </span>
          </div>
          <div className="bg-gray-600 rounded shadow py-5">
            <h3 className="font-semibold text-xl mb-2">Active Cases</h3>
            <span className="text-green-400 font-bold text-3xl">
              {active.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllCountriesItem;
