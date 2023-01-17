import { useState } from "react";

const MainAppPage = (props) => {
  const [number, setNumber] = useState(4);
  const [area, setArea] = useState("");
  const [feedback, setFeedback] = useState("");
  const [like, setLike] = useState(0);
  const handleLike = () => {
    if (like == 0) {
      setLike(1);
    } else {
      setLike(0);
    }
  };
  const submitHandler = () => {
    event.preventDefault();
    var arr = [area, feedback];
    recordFeedback(arr);
    setArea("");
    setFeedback("");
    // props.refresh();
  };

  const thumbsUp = (area, feedback) => {
    var arr2 = [area, feedback];
    updateFeedback(arr2);
    // props.refresh();
  };

  const numberDec = () => {
    console.log(number);
    if (number > 4) {
      setNumber(number - 4);
    }
  };
  const numberInc = () => {
    console.log(number);

    if (number < props.feed?.length) {
      setNumber(number + 4);
    }
  };
  var recordFeedback = async (array) => {
    const data = await fetch(
      `http://localhost:3000/api/feedback?area=${array[0]}&feedback=${array[1]}`
    );
    const res = await data.json();
    console.log(res);
  };
  var updateFeedback = async (array) => {
    const data = await fetch(
      `http://localhost:3000/api/update?area=${array[0]}&feedback=${array[1]}`
    );
    const res = await data.json();
    console.log(res);
  };
  return (
    <div className="bg-gray-900 min-h-screen pt-8 flex flex-col md:flex-row justify-items-stretch">
      {/* <div>
        {props.property?.map((p, idx) => (
          <p className="text-white" key={idx}>
            {p.username}
          </p>
        ))}
      </div> */}

      <div className="w-[100%] md:w-[50%] px-20 md:order-first order-last">
        <div class="flex flex-row justify-between">
          <div className="flex flex-row mt-2">
            <button
              class="flex bg-blue-500 px-2 rounded-lg text-white mb-3 mr-3"
              onClick={numberDec}
              className="w-20"
            >
              &lt;
            </button>
            <button
              class="flex bg-blue-500 px-2 rounded-lg text-white mb-3"
              onClick={numberInc}
              className="w-20"
            >
              &gt;
            </button>
          </div>
          <form class="flex items-center w-[50%]">
            {/* <label for="simple-search" class="sr-only">
              WIP
            </label> */}
            <div class="relative w-full">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="WIP"
                required
              />
            </div>
            <button class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span class="sr-only">Search</span>
            </button>
          </form>
        </div>
        {props.feed?.map((x, idx) =>
          idx < number && idx > number - 5 ? (
            <div
              key={idx}
              className={`${
                idx % 2 == 0 ? "m-5" : "mr-5"
              } w-[90%] rounded-lg border-white border-2 p-3 mb-3`}
            >
              <p className="text-gray-400 text-sm">
                Area: <span className="text-white">{x.area}</span>
              </p>
              <p className="text-gray-400 text-sm">
                Feedback: <span className="text-white">{x.feedback}</span>
              </p>
              {/* <p className="text-gray-400">
                <span className="text-white">{x.thumb}</span>
              </p> */}
              <img
                onClick={handleLike}
                className={`${
                  like == 0 ? "hidden" : "block"
                } text-white rounded-lg px-1 mt-1 w-10`}
                src="/like.png"
              />
              <img
                onClick={handleLike}
                className={`${
                  like == 0 ? "block" : "hidden"
                } text-white rounded-lg px-1 mt-1 w-5 ml-1 mt-1`}
                src="/likeblack.png"
              />
            </div>
          ) : null
        )}
      </div>
      <form className="w-[100%] md:w-[50%]">
        {" "}
        <div className="flex flex-col ml-[25%] md:ml-[0%] mr-[25%]">
          <label
            for="first_name"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Area that you reside in:
          </label>
          <input
            onChange={(e) => setArea(e.target.value)}
            type="text"
            id="first_name"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Yishun"
            required
            value={area}
          />
        </div>
        <div className="flex flex-col ml-[25%] md:ml-[0%] mr-[25%] mt-5">
          <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Describe the problem...
          </label>
          <textarea
            onChange={(e) => setFeedback(e.target.value)}
            id="message"
            rows="4"
            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Limit to 100 words"
            value={feedback}
          ></textarea>
        </div>
        <div className="md:mx-0 mx-[25%] mt-5">
          {" "}
          <button
            disabled={area == "" ? true : false}
            onClick={submitHandler}
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default MainAppPage;
