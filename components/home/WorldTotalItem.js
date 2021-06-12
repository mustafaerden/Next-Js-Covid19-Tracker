const WorldTotalItem = ({ worldTotal }) => {
  return (
    <>
      <div className="text-gray-200 mb-6">
        {worldTotal && (
          <div className="bg-gray-700 px-10 py-10 rounded-lg shadow">
            <h1 className="uppercase font-semibold inline text-3xl border-b border-gray-600">
              World Total
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-6">
              <div className="bg-gray-600 rounded shadow py-5 mr-2">
                <h3 className="font-semibold text-xl mb-2">Total Confirmed</h3>
                <span className="text-green-400 font-bold text-3xl">
                  {worldTotal.TotalConfirmed.toLocaleString()}
                </span>
              </div>
              <div className="bg-gray-600 rounded shadow py-5 mr-2">
                <h3 className="font-semibold text-xl mb-2">Total Deaths</h3>
                <span className="text-green-400 font-bold text-3xl">
                  {worldTotal.TotalDeaths.toLocaleString()}
                </span>
              </div>
              <div className="bg-gray-600 rounded shadow py-5">
                <h3 className="font-semibold text-xl mb-2">Total Recovered</h3>
                <span className="text-green-400 font-bold text-3xl">
                  {worldTotal.TotalRecovered.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default WorldTotalItem;
