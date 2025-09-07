import "./App.css";

const App = () => {
  return (
    <div className="h-full w-full flex items-center justify-center bg-black flex-col">
      <div className="h-[150px] overflow-hidden w-[200px] flex justify-center items-center">
        <svg
          width="200"
          height="200"
          viewBox="0 0 300 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="300" height="300" fill="black" />

          <rect x="50" y="50" width="200" height="200" fill="white" />

          <circle cx="50" cy="50" r="100" fill="black" />
          <circle cx="250" cy="50" r="100" fill="black" />
          <circle cx="50" cy="250" r="100" fill="black" />
          <circle cx="250" cy="250" r="100" fill="black" />
        </svg>
      </div>

      <div className="h-[150px] overflow-hidden flex justify-center items-end">
        <svg
          width="500"
          height="300"
          viewBox="0 0 300 150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="cut-off">
              <rect x="75" y="0" width="150" height="75" />
            </clipPath>
          </defs>
          <rect width="300" height="150" fill="black" />
          <g transform="rotate(180, 150, 75)" clipPath="url(#cut-off)">
            <path d="M 0 0 L 300 0 L 150 150 Z" fill="white" />
            <circle
              cx="75"
              cy="0"
              r="75"
              fill="black"
              stroke="white"
              strokeWidth="0.5"
            />
            <circle
              cx="225"
              cy="0"
              r="75"
              fill="black"
              stroke="white"
              strokeWidth="0.5"
            />
            <line
              x1="75"
              y1="75"
              x2="225"
              y2="75"
              stroke="white"
              strokeWidth="1"
            />
            <rect y="75" width="300" height="75" fill="black" />
          </g>
        </svg>
      </div>
      <h1 className="ml-[0.7em] tracking-[0.7em] font-semibold mt-4">
        ELEVATE
      </h1>
    </div>
  );
};

export default App;
