import Head from "next/head";
import Link from "next/link";
import Header from "./components/header.js";
import CtaHead from "./components/cta.js";
import { useState } from "react";
import { connectToDatabase } from "../util/mongodb";
import MainAppPage from "./components/mainapppage.js";
import { useRouter } from "next/router";

export default function Home({ property, feed }) {
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  };

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [holder, setHolder] = useState();
  const handleSubmit = () => {
    event.preventDefault();
    for (var i = 0; i < property.length; i++) {
      if (name == property[i].username) {
        if (password == property[i].password) {
          var arr = [property[i].username, property[i].password];
          // record(arr);
          setPage(1);
        }
      } else {
        setMessage(
          "Incorrect account details, please contact HDB for an account."
        );
      }
    }
    console.log(property);
  };
  // var record = async (array) => {
  //   const data = await fetch(
  //     `http://localhost:3000/api/users?name=${array[0]}&score=${array[1]}`
  //   );
  //   const res = await data.json();
  //   console.log(res);
  // };

  const [page, setPage] = useState(0);
  return (
    <>
      <Head>
        <title>HDB App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen">
        <Header
          logout={() => {
            setPage(0);
          }}
        />
        <div class={`${page === 0 ? "block" : "hidden"}`}>
          {/* {property?.map((p, idx) => (
            <p className="text-white" key={idx}>
              {p.username}
            </p>
          ))}{" "}
          test */}
          <div class="w-full h-screen font-sans bg-cover bg-landscape bg-my_bg_image">
            <div class="container flex items-center justify-center flex-1 h-full mx-auto">
              <div class="w-full max-w-lg">
                <div class="leading-loose">
                  <form
                    class="max-w-sm p-10 m-auto rounded shadow-xl bg-white/25"
                    onSubmit={handleSubmit}
                  >
                    <p class="mb-8 text-2xl font-light text-center text-white">
                      Access the portal - just click login
                    </p>
                    <div class="mb-2">
                      <div class=" relative ">
                        <input
                          type="text"
                          id="login-with-bg-email"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Username"
                          onChange={(e) => setName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div class="mb-2">
                      <div class=" relative ">
                        <input
                          type="text"
                          id="login-with-bg-password"
                          class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                          placeholder="Password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <p className="text-red-500">{message}</p>
                    <div class="flex items-center justify-between mt-4">
                      <button
                        onClick={handleSubmit}
                        class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                      >
                        Login
                      </button>
                    </div>
                    <div class="text-center">
                      <a class="right-0 inline-block text-sm text-white font-bold align-baseline text-500 hover:text-gray-800">
                        Create an account
                      </a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class={`${page === 1 ? "block" : "hidden"}`}>
          <MainAppPage property={property} feed={feed} refresh={refreshData} />
        </div>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const data = await db.collection("carpark").find().toArray();
  const property = JSON.parse(JSON.stringify(data));

  const data2 = await db.collection("feedback").find().toArray();
  const feed = JSON.parse(JSON.stringify(data2));
  // const properties = data.map((property) => {
  //   return {
  //     username: property.username,
  //     password: property.password,
  //   };
  // });
  return {
    props: {
      property,
      feed,
    },
  };
}

// const isConnected = await client.isConnected();
// const data = await db.collection("carpark").find({}).toArray();

// const recommend = await db.collection("data").find({}).sort({ ESG: -1 }).limit(100).toArray();
// const recommendation = JSON.parse(JSON.stringify(recommend));

// const property = JSON.parse(JSON.stringify(data));
// const properties = property.sort(function (a, b) {
//   return compareStrings(a.Stock_Name, b.Stock_Name);
// });

// const leaderboard = await db
//   .collection("users")
//   .find()
//   .sort({ score: -1 })
//   .toArray();
// const leaders = JSON.parse(JSON.stringify(leaderboard));

// const report = await db.collection("reports").find({}).toArray();
// const reports = JSON.parse(JSON.stringify(report));

// const options = properties.map((property) => {
//   return {
//     value: property.Code,
//     label: property.Stock_Name,
//   };
// });
