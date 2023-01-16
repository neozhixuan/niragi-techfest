import { useState } from "react";

const MainAppPage = (props) => {
  const [number, setNumber] = useState(5);
  var number2 = number + 5;
  const [area, setArea] = useState("");
  const [feedback, setFeedback] = useState("");
  const submitHandler = () => {
    event.preventDefault();
    var arr = [area, feedback];
    recordFeedback(arr);
    setArea("");
    setFeedback("");
    props.refresh();
  };
  const thumbsUp = (area, feedback) => {
    var arr2 = [area, feedback];
    updateFeedback(arr2);
    props.refresh();
  };

  const numberDec = () => {
    if (number > 5) {
      setNumber(number - 5);
    }
  };
  const numberInc = () => {
    if (number < props.feed?.length) {
      setNumber(number + 5);
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
    <div className="bg-gray-900 min-h-screen pt-8 flex flex-row justify-items-stretch">
      {/* <div>
        {props.property?.map((p, idx) => (
          <p className="text-white" key={idx}>
            {p.username}
          </p>
        ))}
      </div> */}
      <div className="w-[50%] pt-8 px-20">
        <button
          class="bg-blue-500 px-2 rounded-lg text-white mb-3 mr-3"
          onClick={numberDec}
          className="w-20"
        >
          &lt;
        </button>
        <button
          class="bg-blue-500 px-2 rounded-lg text-white mb-3"
          onClick={numberInc}
          className="w-20"
        >
          &gt;
        </button>
        {props.feed?.map((x, idx) =>
          idx < number || idx > number - 5 ? (
            <div
              key={idx}
              className="rounded-lg border-white border-2 p-3 mb-3"
            >
              <p className="text-gray-400">
                Area: <span className="text-white">{x.area}</span>
              </p>
              <p className="text-gray-400">
                Feedback: <span className="text-white">{x.feedback}</span>
              </p>
              <p className="text-gray-400">
                <span className="text-white">{x.thumb}</span>
              </p>
              <button
                onClick={thumbsUp(x.area, x.feedback)}
                className="text-white bg-green-700 rounded-lg px-1 mt-1"
              >
                Good
              </button>
            </div>
          ) : null
        )}
      </div>
      <form className="w-[50%]">
        {" "}
        <div className="flex flex-col mx-[25%]">
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
        <div className="flex flex-col mx-[25%] mt-5">
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
        <div className="flex justify-center mt-5">
          {" "}
          <button
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
