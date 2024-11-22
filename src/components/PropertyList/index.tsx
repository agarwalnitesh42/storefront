import React, { useEffect } from "react";
import usePropertiesStore from "../../store/propertiesStore";
import PropertyCard from "../Card";
import Placeholder from "../Placeholder";
import { useNavigate } from "react-router-dom";

const PropertyList: React.FC = () => {
  const {
    properties,
    isLoading,
    error,
    fetchProperties,
    hasMore,
    loadMoreProperties,
  } = usePropertiesStore();

  const navigate = useNavigate();

  useEffect(() => {
    fetchProperties();
  }, [fetchProperties]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    if (scrollHeight - scrollTop === clientHeight && hasMore) {
      loadMoreProperties();
    }
  };

  return (
    <div
      onScroll={handleScroll}
      className="space-y-4 overflow-auto max-h-[calc(100vh-200px)]"
    >
      {isLoading && <Placeholder type="loading" />}
      {error && <Placeholder type="error" message={error} />}
      {!isLoading &&
        properties.map((property) => (
          <PropertyCard
            key={property.id}
            imageSrc={property.imageSrc}
            title={property.title}
            location={property.subtitle}
            details={property.details}
            contactNumber={property.contactNumber}
            description="This property is available for immediate purchase."
            brokerInfo={property.brokerInfo}
            onBrokerClick={() => navigate('/brokerProfile')}
          />
        ))}
    </div>
  );
};

export default PropertyList;