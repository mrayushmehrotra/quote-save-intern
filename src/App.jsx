import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const Card = ({ quote, onSave, isHidden }) => {
  return (
    <>
      <div className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-4/5 h-auto rounded-2xl bg-white [box-shadow:var(--shadow)]">
        <div className="flex flex-col items-center justify-between pt-9 px-6 pb-6 relative">
          <span className="relative mx-auto -mt-16 mb-8">
            <svg
              width="65"
              height="46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M49.157 15.69L44.58.655l-12.422 1.96L21.044.654l-8.499 2.615-6.538 5.23-4.576 9.153v11.114l4.576 8.5 7.846 5.23 10.46 1.96 7.845-2.614 9.153 2.615 11.768-2.615 7.846-7.846 1.96-5.884.655-7.191-7.846-1.308-6.537-3.922z"
                fill="#EAB789"
                stroke="#000"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M32.286 3.749c-6.94 3.65-11.69 11.053-11.69 19.591 0 8.137 4.313 15.242 10.724 19.052a20.513 20.513 0 01-8.723 1.937c-11.598 0-21-9.626-21-21.5 0-11.875 9.402-21.5 21-21.5 3.495 0 6.79.874 9.689 2.42z"
                fill="#9C6750"
              ></path>
              <path
                d="M64.472 20.305a.954.954 0 00-1.172-.824 4.508 4.508 0 01-3.958-.934.953.953 0 00-1.076-.11c-.46.252-.977.383-1.502.382a3.154 3.154 0 01-2.97-2.11.954.954 0 00-.833-.634 4.54 4.54 0 01-4.205-4.507c.002-.23.022-.46.06-.687a.952.952 0 00-.213-.767 3.497 3.497 0 01-.614-3.5.953.953 0 00-.382-1.138 3.522 3.522 0 01-1.5-3.992.951.951 0 00-.762-1.227A22.611 22.611 0 0032.3 2.16 22.41 22.41 0 0022.657.001a22.654 22.654 0 109.648 43.15 22.644 22.644 0 0032.167-22.847zM22.657 43.4a20.746 20.746 0 110-41.493c2.566-.004 5.11.473 7.501 1.407a22.64 22.64 0 00.003 38.682 20.6 20.6 0 01-7.504 1.404zm19.286 0a20.746 20.746 0 112.131-41.384 5.417 5.417 0 001.918 4.635 5.346 5.346 0 00-.133 1.182A5.441 5.441 0 0046.879 11a5.804 5.804 0 00-.028.568 6.456 6.456 0 005.38 6.345 5.053 5.053 0 006.378 2.472 6.412 6.412 0 004.05 1.12 20.768 20.768 0 01-20.716 21.897z"
                fill="#634647"
              ></path>
              <path
                d="M54.962 34.3a17.719 17.719 0 01-2.602 2.378.954.954 0 001.14 1.53 19.637 19.637 0 002.884-2.634.955.955 0 00-1.422-1.274z"
                fill="#644647"
              ></path>
              <path
                d="M44.5 32.829c-.512 0-1.574.215-2 .5-.426.284-.342.263-.537.736a2.59 2.59 0 104.98.99c0-.686-.458-1.241-.943-1.726-.485-.486-.814-.5-1.5-.5zm-30.916-2.5c-.296 0-.912.134-1.159.311-.246.177-.197.164-.31.459a1.725 1.725 0 00-.086.932c.058.312.2.6.41.825.21.226.477.38.768.442.291.062.593.03.867-.092s.508-.329.673-.594a1.7 1.7 0 00.253-.896c0-.428-.266-.774-.547-1.076-.281-.302-.471-.31-.869-.311zm17.805-11.375c-.143-.492-.647-1.451-1.04-1.78-.392-.33-.348-.255-.857-.31a2.588 2.588 0 10.441 5.06c.66-.194 1.064-.788 1.395-1.39.33-.601.252-.92.06-1.58zm-22 2c-.143-.492-.647-1.451-1.04-1.78-.391-.33-.347-.255-.856-.31a2.589 2.589 0 10.44 5.06c.66-.194 1.064-.788 1.395-1.39.33-.601.252-.92.06-1.58zM38.112 7.329c-.395 0-1.216.179-1.545.415-.328.236-.263.218-.415.611-.151.393-.19.826-.114 1.243.078.417.268.8.548 1.1.28.301.636.506 1.024.59.388.082.79.04 1.155-.123.366-.163.678-.438.898-.792.22-.354.337-.77.337-1.195 0-.57-.354-1.031-.73-1.434-.374-.403-.628-.415-1.158-.415zm-19.123.703c.023-.296-.062-.92-.219-1.18-.157-.26-.148-.21-.432-.347a1.726 1.726 0 00-.922-.159 1.654 1.654 0 00-.856.344 1.471 1.471 0 00-.501.73c-.085.285-.077.589.023.872.1.282.287.532.538.718a1.7 1.7 0 00.873.323c.427.033.793-.204 1.116-.46.324-.256.347-.445.38-.841z"
                fill="#845556"
                stroke="#644647"
                stroke-width="1.8"
              ></path>
              <path
                d="M15.027 15.605a.954.954 0 00-1.553 1.108l1.332 1.863a.955.955 0 001.705-.77.955.955 0 00-.153-.34l-1.331-1.861z"
                fill="#634647"
              ></path>
              <path
                d="M43.31 23.21a.954.954 0 101.553-1.11l-1.266-1.772a.954.954 0 10-1.552 1.11l1.266 1.772z"
                fill="#644647"
              ></path>
              <path
                d="M19.672 35.374a.954.954 0 00-.954.953v2.363a.954.954 0 001.907 0v-2.362a.954.954 0 00-.953-.954z"
                fill="#634647"
              ></path>
              <path
                d="M33.129 29.18l-2.803 1.065a.953.953 0 00-.053 1.764.957.957 0 00.73.022l2.803-1.065a.953.953 0 00-.677-1.783v-.003zm24.373-3.628l-2.167.823a.956.956 0 00-.054 1.764.954.954 0 00.73.021l2.169-.823a.954.954 0 10-.678-1.784v-.001z"
                fill="#644647"
              ></path>
            </svg>
          </span>

          <h5 className="text-sm font-semibold mb-2 text-left mr-auto text-zinc-700">
            quote of the day
          </h5>

          <p className="w-full mb-4 text-sm text-justify">
            {quote}
            <br />
          </p>
          <br />
          <button
            onClick={onSave}
            type="button"
            className={`
            ${isHidden}
            absolute font-semibold right-6 bottom-6 cursor-pointer py-2 px-8 w-max break-keep text-sm rounded-lg transition-colors text-[#634647] hover:text-[#ddad81] bg-[#ddad81] hover:bg-[#634647]
            `}
          >
            Save
          </button>
        </div>
      </div>{" "}
    </>
  );
};

function App() {
  const [quote, setQuote] = useState("");
  const [savedQuotes, setSavedQuotes] = useState([]);
  const hasFetched = useRef(false);

  // Function to get a new quote from the API
  const getQuote = () => {
    axios
      .get("https://ron-swanson-quotes.herokuapp.com/v2/quotes")
      .then((res) => {
        setQuote(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Save quote to localStorage when the user saves it
  const saveQuote = () => {
    if (quote) {
      const updatedQuotes = [...savedQuotes, quote];
      setSavedQuotes(updatedQuotes);
      localStorage.setItem("savedQuotes", JSON.stringify(updatedQuotes)); // Save to localStorage
    }
  };

  // Retrieve saved quotes from localStorage when the app loads
  useEffect(() => {
    const storedQuotes = JSON.parse(localStorage.getItem("savedQuotes"));
    if (storedQuotes) {
      setSavedQuotes(storedQuotes);
    }
  }, []);

  // Fetch a quote when the app loads (only once)
  useEffect(() => {
    if (!hasFetched.current) {
      getQuote();
      hasFetched.current = true;
    }
  }, []);

  return (
    <>
      <div className="flex items-center flex-col justify-center h-[70vh] ">
        <Card isHidden={"flex"} quote={quote} onSave={saveQuote} />
      </div>
      <hr />

      {/* Render saved quotes */}
      {savedQuotes.length > 0 && (
        <div className="   m-7 ">
          <h3 className="text-3xl font-bold text-center m-7 text-white">
            Saved Quotes
          </h3>
          <div className="flex justify-center flex-wrap gap-y-8 m-4 gap-x-5 items-center">
            {savedQuotes.map((item, index) => (
              <Card isHidden={"hidden"} key={index} quote={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default App;