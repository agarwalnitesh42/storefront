import React, { useState, useEffect } from "react";
import SearchInput from "../../components/SearchInput";
import SearchSuggestions from "./SearchSuggestions";
import Placeholder from "../../components/Placeholder";
import useBrokerStore from "../../store/brokerStore";
import usePropertyStore from "../../store/propertiesStore";

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { brokers, fetchBrokers, isLoading: brokersLoading } = useBrokerStore();
  const { properties, fetchProperties, isLoading: propertiesLoading } = usePropertyStore();

  useEffect(() => {
    if (searchQuery.length > 3) {
      setIsSearching(true);
      fetchBrokers(searchQuery);
      fetchProperties(searchQuery);
      setIsSearching(false);
    }
  }, [searchQuery, fetchBrokers, fetchProperties]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      <SearchInput
        placeholder="Search Properties or Brokers..."
        onSearch={handleSearch}
        debounceDelay={300}
      />

      {isSearching && <Placeholder type="loading" message="Searching..." />}

      {!isSearching && searchQuery.length > 3 && (
        <SearchSuggestions
          brokers={brokers?.slice(0, 2)} // Show max 2 brokers
          properties={properties.slice(0, 5)} // Show max 5 properties
          isLoading={brokersLoading || propertiesLoading}
          searchQuery={searchQuery}
        />
      )}

      {!isSearching && searchQuery.length <= 3 && (
        <Placeholder type="empty" message="Start typing to search..." />
      )}

      {(!brokersLoading && !propertiesLoading && brokers?.length === 0 && properties.length === 0 &&
        searchQuery.length > 3) && (
        <Placeholder type="empty" message="No results found." />
      )}
    </div>
  );
};

export default SearchPage;
