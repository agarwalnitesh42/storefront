import React from "react";

export interface BrokerMiniCardProps {
  imageSrc: string;
  name: string;
  location: string;
  contactNumber: string;
  onContactClick?: () => void;
}

const BrokerMiniCard: React.FC<BrokerMiniCardProps> = ({
  imageSrc,
  name,
  location,
  contactNumber,
  onContactClick,
}) => {
  return (
    <div className="flex items-center justify-between bg-gray-100 shadow-md rounded-lg p-2">
      {/* Left: Broker Info */}
      <div className="flex items-center gap-3">
        {/* Broker Image */}
        <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-300">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Broker Name and Location */}
        <div>
          <h4 className="text-sm font-semibold text-gray-800">{name}</h4>
          <p className="text-xs text-gray-500">{location}</p>
        </div>
      </div>

      {/* Right: Contact Button */}
      <button
        onClick={onContactClick}
        className="flex items-center gap-2 text-green-500 font-medium hover:underline"
      >
        <span className="text-lg">📞</span>
        {contactNumber}
      </button>
    </div>
  );
};

export default React.memo(BrokerMiniCard);