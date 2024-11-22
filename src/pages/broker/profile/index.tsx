import React, { useEffect } from "react";
import BrokerProfileCard from "../../../components/BrokerProfileCard";
import PropertyCard from "../../../components/Card"; // Updated import for PropertyCard
import GridLayout from "../../../components/GridLayout";
import Placeholder from "../../../components/Placeholder";
import useBrokerStore from "../../../store/brokerStore";
import usePropertiesStore from "../../../store/propertiesStore";
import { Property } from "../../../types";

const BrokerProfilePage: React.FC = () => {
  const { brokerDetail, fetchBrokerDetail } = useBrokerStore();
  const { properties, isLoading, error, fetchProperties } = usePropertiesStore();

  useEffect(() => {
    fetchBrokerDetail();
    fetchProperties();
  }, [fetchProperties]);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="p-6">
        {/* Broker Profile Section */}
        <section className="mb-8">
          <BrokerProfileCard
            imageSrc="https://via.placeholder.com/150"
            name="Suraj Properties"
            location="Kithoor, Alwar"
            stats={[
              { label: "Properties Sold", value: "80+" },
              { label: "Specialization", value: "Pioneer in Agriculture" },
            ]}
            contactNumber="9741354430"
          />
        </section>

        {/* Properties Section */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Our Properties 
          </h2>
          {isLoading && <Placeholder type="loading" />}
          {error && <Placeholder type="error" message={error} />}
          {!isLoading && !error && properties.length === 0 && (
            <Placeholder type="empty" message="No properties available" />
          )}
          {!isLoading && properties.length > 0 && (
            <GridLayout columns={3}>
              {properties.map((property: Property) => (
                <PropertyCard
                  key={property.id}
                  imageSrc={property.imageSrc}
                  title={property.title}
                  location={property.subtitle}
                  details={property.details}
                  description="This property is available for immediate purchase."
                  contactNumber={property.contactNumber}
                  onShareClick={() => console.log(`Share property ID: ${property.id}`)}
                  brokerInfo={property.brokerInfo}
                />
              ))}
            </GridLayout>
          )}
        </section>
      </main>
    </div>
  );
};

export default BrokerProfilePage;