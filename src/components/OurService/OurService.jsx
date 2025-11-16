import React from "react";
import {
  FaTruck,
  FaWarehouse,
  FaMoneyBillWave,
  FaBuilding,
  FaUndo,
} from "react-icons/fa";

const OurService = () => {
  return (
    <div className="bg-secondary py-20 px-11 rounded-3xl">
      {/* ---- Section Top Heading ---- */}
      <h2 className="text-3xl font-bold text-center text-white mb-4">
        Our Services
      </h2>

      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-10">
        Enjoy fast, reliable parcel delivery with real-time tracking and
        hassle-free logistics solutions.
      </p>

      {/* ---- Cards ---- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white text-secondary px-6 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <div className="mb-3 flex justify-center">
            <FaTruck className="text-3xl text-blue-600" />
          </div>
          <h3 className="font-semibold text-lg text-center mb-2">
            Express & Standard Delivery
          </h3>
          <p className="text-sm text-gray-700 text-center">
            We deliver parcels within 24–72 hours in major cities. Express
            delivery in Dhaka within 4–6 hours.
          </p>
        </div>

        {/* Card 2 — GREEN CARD */}
        <div className="bg-primary text-secondary px-6 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <div className="mb-3 flex justify-center">
            <FaTruck className="text-3xl text-blue-600" />
          </div>
          <h3 className="font-semibold text-lg text-center mb-2">
            Nationwide Delivery
          </h3>
          <p className="text-sm text-gray-700 text-center">
            We deliver parcels nationwide ensuring your products reach customers
            within 48–72 hours.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-secondary px-6 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <div className="mb-3 flex justify-center">
            <FaWarehouse className="text-3xl text-blue-600" />
          </div>
          <h3 className="font-semibold text-lg text-center mb-2">
            Fulfillment Solution
          </h3>
          <p className="text-sm text-gray-700 text-center">
            Includes inventory management, packaging and online order processing
            support.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white text-secondary px-6 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <div className="mb-3 flex justify-center">
            <FaMoneyBillWave className="text-3xl text-blue-600" />
          </div>
          <h3 className="font-semibold text-lg text-center mb-2">
            Cash on Home Delivery
          </h3>
          <p className="text-sm text-gray-700 text-center">
            100% cash-on delivery anywhere in Bangladesh with guaranteed safety.
          </p>
        </div>

        {/* Card 5 */}
        <div className="bg-white text-secondary px-6 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <div className="mb-3 flex justify-center">
            <FaBuilding className="text-3xl text-blue-600" />
          </div>
          <h3 className="font-semibold text-lg text-center mb-2">
            Corporate Service / Contract Logistics
          </h3>
          <p className="text-sm text-gray-700 text-center">
            Customized corporate solutions including warehouse and inventory
            management.
          </p>
        </div>

        {/* Card 6 */}
        <div className="bg-white text-secondary px-6 py-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
          <div className="mb-3 flex justify-center">
            <FaUndo className="text-3xl text-blue-600" />
          </div>
          <h3 className="font-semibold text-lg text-center mb-2">
            Parcel Return
          </h3>
          <p className="text-sm text-gray-700 text-center">
            Return & exchange facility with real-time status updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurService;
