import { useState } from "react";

const MainAppPage = ({ props, feed }) => {
  const [area, setArea] = useState("");
  const [feedback, setFeedback] = useState("");
  const submitHandler = () => {
    event.preventDefault();
    var arr = [area, feedback];
    recordFeedback(arr);
  };
  var recordFeedback = async (array) => {
    const data = await fetch(
      `http://localhost:3000/api/feedback?area=${array[0]}&feedback=${array[1]}`
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
      <div className="w-[50%]">
        {console.log(feed)}
        {console.log("hello")}
        {feed?.map((x, idx) => (
          <div key={idx}>
            <p>{x.area}</p>
            <p>{x.feedback}</p>
          </div>
        ))}
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

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const data = await db.collection("feedback").find().toArray();
  const feed = JSON.parse(JSON.stringify(data));
  // const properties = data.map((property) => {
  //   return {
  //     username: property.username,
  //     password: property.password,
  //   };
  // });
  return {
    props: {
      feed,
    },
  };
}

export default MainAppPage;
