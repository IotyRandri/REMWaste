import SkipCard from "./SkipCard.tsx";

function App() {
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
          {/* Skip 1 */}
          <SkipCard skipCardProps={
            {
              size: 4,
              hire_period_days: 14,
              price_before_vat: 211,
              allowed_on_road: true,
              allows_heavy_waste: true,
              postcode: "NR32",
              vat: 20
            }
          } />

          {/* Skip 2 */}
          <SkipCard skipCardProps={
            {
              size: 4,
              hire_period_days: 14,
              price_before_vat: 211,
              allowed_on_road: true,
              allows_heavy_waste: true,
              postcode: "NR32",
              vat: 20
            }
          } />

          {/* Skip 3 */}
          <SkipCard skipCardProps={
            {
              size: 4,
              hire_period_days: 14,
              price_before_vat: 211,
              allowed_on_road: true,
              allows_heavy_waste: true,
              postcode: "NR32",
              vat: 20
            }
          } />

          {/* Skip 4 */}
          <SkipCard skipCardProps={
            {
              size: 4,
              hire_period_days: 14,
              price_before_vat: 211,
              allowed_on_road: true,
              allows_heavy_waste: true,
              postcode: "NR32",
              vat: 20
            }
          } />

          {/* Skip 5 */}
          <SkipCard skipCardProps={
            {
              size: 4,
              hire_period_days: 14,
              price_before_vat: 211,
              allowed_on_road: true,
              allows_heavy_waste: true,
              postcode: "NR32",
              vat: 20
            }
          } />
        </div>

      </div>

    </div>
  );
}

export default App;
