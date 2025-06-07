interface SkipCardProps {
  size: number;
  hire_period_days: number;
  price_before_vat: number;
  vat: number;
  postcode: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}
const img_url = "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg";

export default function SkipCard({ skipCardProps }: { skipCardProps: SkipCardProps }) {
    return (
          <div className="bg-gray-200 p-6 rounded-md shadow-lg text-center">
            {/* Create a two column to display the h2 and button */}
            <div className="flex justify-between items-center mb-4">
              {/* Left Column */}
              <div className="w-1/2 items-center justify-center">
                <h2 className="text-xl font-semibold mb-4">{skipCardProps.size} Yard Skip</h2>
              </div>
              {/* Right Column */}
              <div className="w-1/2 items-center justify-center mb-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Select
                </button>
              </div>

            </div>
            {/* Image */}
            <img src={img_url} alt={skipCardProps.size+" Yard"} className="mb-4 rounded" />
            <p className="italic text-gray-900 mb-4">{skipCardProps.hire_period_days} day hire period</p>
            <p className="text-green-500 mb-4">£{skipCardProps.price_before_vat.toFixed(2)}</p>
          </div>
    )
}