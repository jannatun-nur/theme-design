import image from "../../public/bd.png";

const Board = () => {
  const users = [
    {
      name: "strategy_name",

      calmarRatio: "8.0",
      overallProfit: "34645",
      dailyProfit: "208.51",
      win: "0.65",
      price: "-",
    },
    {
      name: "Based on premium and",

      calmarRatio: "7.4",
      overallProfit: "347644",
      dailyProfit: "03.47",
      win: "0.65",
      price: "-",
    },
    {
      name: "jstrategy_name",

      calmarRatio: "100",
      overallProfit: "34734",
      dailyProfit: "208.51",
      win: "0.65",
      price: "-",
    },
    {
      name: "Selling with re entr",

      calmarRatio: "100",
      overallProfit: "34234",
      dailyProfit: "216.31",
      win: "0.65",
      price: "-",
    },

  ];
  return (
    <div>
      {/* leadership board  */}
      <section className="flex  gap-3 lg:mx-auto  ml-16 md:ml-60 lg:ml-96 py-5">
        <img
          className="w-8 h-8 md:w-10 md:h-10 lg:h-1o lg:w-10"
          src={image}
          alt=""
        />
        <p
          className="text-2xl lg:text-4xl font-bold  md:text-4xl text-transparent 
        bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400"
        >
          LeaderBoards
        </p>
      </section>

      {/* MAIN DIV OF CHART */}
      <div className=" shadow-2xl shadow-blue-600 lg:w-11/12 mx-auto lg:p-3 rounded-lg">
        {/* Headline */}

        <section className="lg:flex lg:justify-between md:flex md:justify-between md:px-2 columns-1 mx-auto ">
          <p
            className="lg:text-2xl font-semibold text-transparent 
        bg-clip-text bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-xl text-center my-2"
          >
            Basic Backtest
          </p>

          <div
            className="inline-flex items-center divide-x rounded ml-20 lg:ml-0
         bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 dark:text-gray-100 dark:divide-gray-300"
          >
            <p type="p" className="lg:px-8 lg:py-3 px-4 ">
              Slippage
            </p>

            <button type="button" title="Toggle dropdown" className="p-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
          </div>
        </section>

        {/* TABLE FOR LEADERBOARD */}
        <section className="mt-10  bg-green-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
              <thead className="ltr:text-left rtl:text-right bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 ">
                <tr>
                  <th className="whitespace-nowrap px-4 py-2 font-semibold text-white text-start">
                    Rank
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-semibold text-white text-start">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-semibold text-white text-start">
                  Calmar Ratio
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-semibold text-white text-start">
                  Overall Profit
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-semibold text-white text-start">
                  Avg. Daily Profit
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-semibold text-white text-start">
                  Win %(Day)
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-semibold text-white text-start">
                  Price (Rs)
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-semibold text-white text-start">
                  Action
                  </th>
                  <th className="px-4 py-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user, index) => (
                  <tr key={index}>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                      {index + 1}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900 shadow-lg">
                      {user.name}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {user.calmarRatio}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 shadow-lg">
                     {user.overallProfit}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                     {user.dailyProfit}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700 shadow-lg">
                      {user.win}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                     {user.price}
                    </td>
                    
                    <td className="whitespace-nowrap px-4 py-2 shadow-lg">
                      <a
                        href="#"
                        className="inline-block rounded bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Board;
