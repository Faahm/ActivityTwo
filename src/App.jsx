import "./App.css";
import Post from "./components/Post";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <Post />
      <div className="flex items-center gap-3 mt-3">
        {Array.from({ length: 5 }).map((value, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <div className="p-2 border font-bold hover:cursor-pointer">
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
