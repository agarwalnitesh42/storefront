import React from 'react';

interface BrokerProfileCardProps {
  imageSrc: string;
  name: string;
  location: string;
  stats: { label: string; value: string }[];
  contactNumber: string;
}

const BrokerProfileCard: React.FC<BrokerProfileCardProps> = ({ imageSrc, name, location, stats, contactNumber }) => {
  return (
    <div className="flex items-center bg-white rounded-lg shadow p-4">
      <img
        src={imageSrc}
        alt={name}
        className="w-25 h-25 rounded-full object-cover mr-4"
      />
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500">{location}</p>
        <ul className="mt-2">
          {stats.map((stat, index) => (
            <li key={index} className="text-sm text-gray-600">
              <strong>{stat.label}: </strong>
              {stat.value}
            </li>
          ))}
        </ul>
        <p className="text-green-500 mt-2">
          📞 <a href={`tel:${contactNumber}`} className="hover:underline">{contactNumber}</a>
        </p>
      </div>
    </div>
  );
};

export default React.memo(BrokerProfileCard);