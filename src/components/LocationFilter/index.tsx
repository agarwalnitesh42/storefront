import React from "react";
import {Location} from "../../store/locationStore";
import Placeholder from "../Placeholder";

export interface IProps {
    locations: Location[];
    isLoading: boolean;
    error: string | null;
    onLocationClick: (location: Location) => void;
};

const LocationFilter: React.FC<IProps> = ({locations, isLoading, error, onLocationClick}: IProps) => {

  if (isLoading) return <Placeholder type="loading" />;
  if (error) return <Placeholder type="error" message={error} />;

  return (
    <div className="flex gap-4">
      {locations.map((location: Location) => (
        <button
          key={location.id}
          className="flex-1 py-2 bg-green-100 text-green-600 rounded-md"
          onClick={() => onLocationClick({} as Location)}
        >
          {location.name}
        </button>
      ))}
    </div>
  );
};

export default LocationFilter;