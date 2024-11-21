import React from "react";
import {TopDealsStore} from "../../store/topDealsStore";
import Placeholder from "../Placeholder";

const TopDeals: React.FC<TopDealsStore> = ({topDeals, isLoading, error}: TopDealsStore) => {

  if (isLoading) return <Placeholder type="loading" />;
  if (error) return <Placeholder type="error" message={error} />;

  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      {topDeals.map((deal) => (
        <div key={deal.id} className="p-2 bg-gray-200 rounded-md shadow">
          <img
            src={deal.imageSrc}
            alt={`Deal ${deal.title}`}
            className="rounded-md"
          />
          <p className="text-center mt-2 font-medium">{deal.title}</p>
        </div>
      ))}
    </div>
  );
};

export default TopDeals;