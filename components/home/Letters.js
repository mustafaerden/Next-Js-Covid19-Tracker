const Letters = ({ letter, filter, filterHandler }) => {
  return (
    <>
      <span
        onClick={() => filterHandler(letter)}
        className={`${
          letter === filter ? "text-red-400 underline" : "text-white "
        } cursor-pointer text-xl font-semibold hover:text-red-400 border-r-2 border-gray-400 pr-4 hover:underline`}
      >
        {letter}
      </span>
    </>
  );
};

export default Letters;
