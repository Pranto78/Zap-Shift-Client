import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({data}) => {
    const {} = data;
    return (
      <div className="w-full max-w-md bg-white rounded-3xl shadow p-8">
        {/* Quote Icon */}
        <div className="text-teal-300 text-3xl mb-4">
          <FaQuoteLeft />
        </div>

        {/* Quote Text */}
        <p className="text-gray-700 leading-relaxed mb-6">
          A posture corrector works by providing support and gentle alignment to
          your shoulders, back, and spine, encouraging you to maintain proper
          posture throughout the day.
        </p>

        {/* Divider (dotted line) */}
        <div className="border-t border-dashed border-teal-300 mb-6"></div>

        {/* Profile Section */}
        <div className="flex items-center gap-4">
          {/* Circle Avatar */}
          <div className="w-12 h-12 rounded-full bg-teal-800"></div>

          {/* Name + Title */}
          <div>
            <h3 className="font-semibold text-teal-900">Awlad Hossin</h3>
            <p className="text-gray-600 text-sm">Senior Product Designer</p>
          </div>
        </div>
      </div>
    );
};

export default ReviewCard;