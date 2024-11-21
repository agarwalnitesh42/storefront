import React, { useEffect } from "react";
import Header from "../../components/Header";
import TopDeals from "../../components/TopDeals";
import SearchComponent from "../../components/SearchBar";
import PostRequirementButton from "../../components/PostRequirement";
import LocationFilters from "../../components/LocationFilter";
import PropertyList from "../../components/PropertyList";
import useLocationStore, { Location } from "../../store/locationStore";
import useTopDealsStore from "../../store/topDealsStore";

const HomePage: React.FC = () => {
  const { locations, isLoading: isLoadingLocations, fetchLocations, error } =
    useLocationStore();
  const { topDeals, isLoading: isLoadingTopDeals, fetchTopDeals } =
    useTopDealsStore();


  useEffect(() => {
    fetchLocations();
    fetchTopDeals?.();
  }, [fetchLocations, fetchTopDeals]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <main className="p-6 space-y-6">
        {/* Search Component */}
        <SearchComponent onSearchClick={() => console.log('')}/>

        {/* Top Deals */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Today's Top Deals
          </h2>
          {isLoadingTopDeals ? (
            <p>Loading...</p>
          ) : (
            <TopDeals topDeals={topDeals} isLoading={isLoadingTopDeals}/>
          )}
        </section>

        {/* Post Requirement Button */}
        <PostRequirementButton/>

        {/* Location Filters */}
        <section>
          <LocationFilters
            locations={locations}
            isLoading={isLoadingLocations}
            error={error}
            onLocationClick={(location: Location) =>
              console.log(`Filter applied for location: ${location.name}`)
            }
          />
        </section>

        {/* Property List with Infinite Scroll */}
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Featured Properties
          </h2>
          <PropertyList />
        </section>
      </main>
    </div>
  );
};

export default HomePage;