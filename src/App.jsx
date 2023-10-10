import { useState } from "react";
import "./App.css";
import Post from "./components/Post";
import { useEffect } from "react";
import useFetch from "./hooks/useFetch";

function App() {
  const [number, setNumber] = useState(1);
  const { data } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/",
    number
  );

  useEffect(() => {
    console.log("Mounted");
    return () => {
      console.log("Remove");
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      {data && <Post title={data.title} body={data.body} />}
      {/* {number} */}
      <div className="flex items-center gap-3 mt-3">
        {Array.from({ length: 5 }).map((value, index) => {
          return (
            <div
              key={`pagination-${index + 1}`}
              className="p-2 border font-bold hover:cursor-pointer rounded-full bg-[#3047BB]"
              onClick={() => setNumber(index + 1)}
            >
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
