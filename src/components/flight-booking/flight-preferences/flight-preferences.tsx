import { FlightFilterDrawer } from '../flight-filter-drawer';
import { FlightSortMenu } from '../flight-sort-menu';
import { Flight, FlightFilterFormData, FlightSortKey } from '../types';
import { processFlightFilterData } from './utils';

type FlightPreferencesProps = {
  flights: Flight[];
};

export const FlightPreferences = ({ flights }: FlightPreferencesProps) => {
  const { airlines, cabinClasses, benefits, initialFilterData } =
    processFlightFilterData(flights);

  const handleFilterFormSubmit = (data: FlightFilterFormData) => {
    alert(`Filter form submitted \n \n ${JSON.stringify(data)}`);
  };

  const handleOnSortChange = (sortValue: FlightSortKey | null) => {
    alert(`Sort by: ${sortValue}`);
  };

  return (
    <div className="bg-content1 border-t-1 border-divider sticky bottom-0 z-10 flex flex-1 items-center justify-between gap-2 p-4">
      <FlightFilterDrawer
        airlines={airlines}
        cabinClasses={cabinClasses}
        benefits={benefits}
        initialFilterData={initialFilterData}
        onFormSubmit={handleFilterFormSubmit}
      />
      <FlightSortMenu onSortChange={handleOnSortChange} />
    </div>
  );
};
