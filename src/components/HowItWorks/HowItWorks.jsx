import React from "react";
import {
  FaBox,
  FaMoneyBillWave,
  FaWarehouse,
  FaBuilding,
} from "react-icons/fa";

const HowItWorks = () => {
  const items = [
    {
      icon: <FaBox className="text-3xl text-blue-600" />,
      title: "Booking Pick & Drop",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaMoneyBillWave className="text-3xl text-blue-600" />,
      title: "Cash On Delivery",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaWarehouse className="text-3xl text-blue-600" />,
      title: "Delivery Hub",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
    {
      icon: <FaBuilding className="text-3xl text-blue-600" />,
      title: "Booking SME & Corporate",
      desc: "From personal packages to business shipments — we deliver on time, every time.",
    },
  ];

  return (
    <div className="w-full py-12 bg-white">
      <h2 className="text-2xl font-bold text-center mb-8">How it Works</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all text-center"
          >
            <div className="mb-3 flex justify-center">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
