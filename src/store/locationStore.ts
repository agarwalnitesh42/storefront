import { create } from "zustand";

export interface Location {
  id: number;
  name: string;
}

export interface LocationStore {
  locations: Location[];
  isLoading: boolean;
  error: string | null;
  fetchLocations: () => Promise<void>;
}

const mockLocations = [
  { id: 1, name: "Alwar" },
  { id: 2, name: "Kithoor" },
  { id: 3, name: "Ghasoli" },
  { id: 4, name: "Bagar Tiraha" },
  { id: 5, name: "Chhati Meel" },
];

const useLocationStore = create<LocationStore>((set) => ({
  locations: [],
  isLoading: false,
  error: null,
  fetchLocations: async () => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API with mock data
      const response = await new Promise<Location[]>((resolve) =>
        setTimeout(() => resolve(mockLocations), 500)
      );
      set({ locations: response, isLoading: false });
    } catch (err: any) {
      set({ error: err.message, isLoading: false });
    }
  },
}));

export default useLocationStore;