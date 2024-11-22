import React from "react";
import BrokerMiniCard from "../../../components/BrokerMiniCard";
import PropertyList from "../../../components/PropertyList";

const SearchSuggestions = ({ brokers, properties, onBrokerClick, onPropertyClick, isLoading }:  any) => {
  return (
    <div className="mt-4 space-y-6">
      {/* Brokers Section */}
      {brokers.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Top Brokers</h3>
          <div className="space-y-4">
            {brokers.slice(0, 2).map((broker: any) => (
              <BrokerMiniCard
                key={broker.id}
                imageSrc={broker.imageSrc}
                name={broker.name}
                location={broker.location}
                contactNumber={broker.contactNumber}
                onContactClick={() => onBrokerClick(broker)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Properties Section */}
      {properties.length > 0 && (
        <PropertyList />
      )}

      {/* No Results Section */}
      {brokers.length === 0 && properties.length === 0 && (
        <div className="text-center text-gray-500 mt-8">
          No results found for your search. Try different keywords.
        </div>
      )}
    </div>
  );
};

export default SearchSuggestions;
