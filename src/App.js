import { useEffect, useState } from "react";
import SkipCard from "./SkipCard.tsx";

function App() {

  const [skips, setSkips] = useState([]); // Initial state for skips
  const [loading, setLoading] = useState(true); // Loading state


  useEffect( () => {
    fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft")
      .then((response) => response.json())
      .then((data) => {
        setSkips(data); // Set the skips data for the component
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error("Error fetching skips:", error);
        setLoading(false); // Set loading to false even if there's an error
      })
  }, []);

  return (
    <div className="flex flex-col lg:flex-row bg-gray-100 min-h-screen p-4 lg:p-10 gap-6">

      {/* Left Side */}
      <div className="w-full lg:w-1/2 flex items-center justify-center min-h-[40vh]">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-2xl lg:text-3xl font-bold mt-6 lg:mt-10">
            Choose Your Skip Size
          </h1>
        {/* Paragraph */}
        <p className="text-md lg:text-lg mt-3 lg:mt-4">
          Select the skip size that best fits your needs.
        </p>
        </div>
      </div>

      {/* Right Side: Skips */}
      <div className="w-full lg:w-1/2 flex items-center justify-center min-h-[40vh]">
        {/* Skip Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {loading ? (
            <p>Loading skips...</p>
          ) : skips.length > 0 ? (
            skips.map((skip, index) => (
              <SkipCard key={index} skipCardProps={skip} />
            ))
          ) : (
            <p>No skips available.</p>
          )}
        </div>

      </div>

    </div>
  );
}

export default App;
