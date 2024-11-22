import React from "react";
import BrokerMiniCard, { BrokerMiniCardProps } from "../BrokerMiniCard";

export interface CardProps {
  imageSrc: string;
  title: string;
  location: string;
  details: { label: string; value: string }[];
  description: string;
  contactNumber: string;
  brokerInfo: BrokerMiniCardProps;
  onShareClick?: () => void;
  onBrokerClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  location,
  details,
  description,
  contactNumber,
  brokerInfo,
  onShareClick,
  onBrokerClick,
}) => {
  return (
    <div className="flex-1">
      <div className="bg-white shadow rounded-lg overflow-hidden flex flex-col md:flex-row border border-gray-200">
        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <img
            src={imageSrc}
            alt={title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1 p-4">
          {/* Title & Location */}
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold text-gray-800">{title}</h3>
              <p className="text-sm text-gray-500">{location}</p>
            </div>
            {/* Share Icon */}
            <button
              onClick={onShareClick}
              className="text-gray-400 hover:text-green-500"
              aria-label="Share"
            >
              🔗
            </button>
          </div>

          {/* Property Details */}
          <div className="flex items-center gap-4 my-3 detail-container">
            {details.map((detail, index) => (
              <div
                key={index}
                className="text-sm text-gray-600 border-r pr-4 last:border-none"
              >
                <span className="block font-bold">{detail.label}</span>
                {detail.value}
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        </div>
      </div>
  
      {/* Broker Mini Contact Card */}
      <BrokerMiniCard {...brokerInfo} onBrokerClick={onBrokerClick}/>
    </div>
  );
};

export default React.memo(Card);