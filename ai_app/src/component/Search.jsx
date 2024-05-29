import axios from "axios";
import React from "react";
import Loader from "./Loader";

const Search = () => {
  const [prompt, setPrompt] = React.useState("");
  const [result, setResult] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const handleSearch = () => {
    setLoading(true);
    if (prompt === "") return;
    axios
      .post("https://ai-project-japf.onrender.com/post", { prompt })
      .then((res) => {
        console.log(res.data);
        setResult(res.data);
        setLoading(false);
        setPrompt("");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };
  return (
    <div className="bg-slate-900 min-h-screen">
      <div className="w-full max-w-4xl m-auto">
        <div className="flex justify-center ">
          <h1 className="pt-12 text-[24px] md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-500 text-transparent bg-clip-text">
            SASTA CHAT GPT
          </h1>
        </div>

        <div className="w-full flex justify-center items-center m-auto gap-5 mt-5 rounded-lg ">
          <input
            type="text"
            placeholder="Enter your prompt"
            className="w-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg px-3 py-2"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
          <button
            className="inline-flex  items-center px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 focus:outline-none"
            onClick={handleSearch}
            disabled={loading}
          >
            Search
          </button>
        </div>
        <div className="w-full mx-auto max-w-4xl">
          {loading ? (
            <Loader />
          ) : result ? (
            <div className="rounded-lg p-4 ">
              <p className="text-center text-lg from-neutral-300 text-white justify-center">
                {result}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Search;

