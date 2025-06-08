export default function Navbar() {
    return (

        <nav className="w-full py-4 px-4 sm:px-6 bg-white shadow overflow-x-auto">
            <ul className="flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-2 max-w-5xl mx-auto">
                
                {/* Step 1 */}
                <li className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-green-500 text-white text-[10px] sm:text-sm font-bold">
                    1
                </div>
                <span className="ml-1 sm:ml-2 text-[10px] sm:text-sm text-gray-600 whitespace-nowrap">
                    Postcode
                </span>
                <div className="w-6 sm:w-8 h-[2px] sm:h-1 bg-gray-300 mx-1 sm:mx-2"></div>
                </li>

                {/* Step 2 */}
                <li className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-green-500 text-white text-[10px] sm:text-sm font-bold">
                    2
                </div>
                <span className="ml-1 sm:ml-2 text-[10px] sm:text-sm text-gray-600 whitespace-nowrap">
                    Waste Type
                </span>
                <div className="w-6 sm:w-8 h-[2px] sm:h-1 bg-gray-300 mx-1 sm:mx-2"></div>
                </li>

                {/* Step 3 (Current) */}
                <li className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-blue-600 text-white text-[10px] sm:text-sm font-bold">
                    3
                </div>
                <span className="ml-1 sm:ml-2 text-[10px] sm:text-sm font-semibold text-blue-600 whitespace-nowrap">
                    Select Skip
                </span>
                <div className="w-6 sm:w-8 h-[2px] sm:h-1 bg-gray-300 mx-1 sm:mx-2"></div>
                </li>

                {/* Step 4 */}
                <li className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 text-[10px] sm:text-sm font-bold">
                    4
                </div>
                <span className="ml-1 sm:ml-2 text-[10px] sm:text-sm text-gray-600 whitespace-nowrap">
                    Permit Check
                </span>
                <div className="w-6 sm:w-8 h-[2px] sm:h-1 bg-gray-300 mx-1 sm:mx-2"></div>
                </li>

                {/* Step 5 */}
                <li className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 text-[10px] sm:text-sm font-bold">
                    5
                </div>
                <span className="ml-1 sm:ml-2 text-[10px] sm:text-sm text-gray-600 whitespace-nowrap">
                    Choose Date
                </span>
                <div className="w-6 sm:w-8 h-[2px] sm:h-1 bg-gray-300 mx-1 sm:mx-2"></div>
                </li>

                {/* Step 6 */}
                <li className="flex items-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-gray-300 text-gray-700 text-[10px] sm:text-sm font-bold">
                    6
                </div>
                <span className="ml-1 sm:ml-2 text-[10px] sm:text-sm text-gray-600 whitespace-nowrap">
                    Payment
                </span>
                </li>
            </ul>
        </nav>
    )
}