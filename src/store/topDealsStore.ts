import { create } from "zustand";

export interface TopDeal {
  id: number;
  title: string;
  imageSrc: string;
}

export interface TopDealsStore {
  topDeals: TopDeal[];
  isLoading: boolean;
  error?: string | null;
  fetchTopDeals?: () => Promise<void>;
}

const mockTopDeals = [
  { id: 1, title: "Deal 1", imageSrc: "https://via.placeholder.com/100x100?text=Deal+1" },
  { id: 2, title: "Deal 2", imageSrc: "https://via.placeholder.com/100x100?text=Deal+2" },
  { id: 3, title: "Deal 3", imageSrc: "https://via.placeholder.com/100x100?text=Deal+3" },
  { id: 4, title: "Deal 4", imageSrc: "https://via.placeholder.com/100x100?text=Deal+4" },
  { id: 5, title: "Deal 5", imageSrc: "https://via.placeholder.com/100x100?text=Deal+5" },
  { id: 5, title: "Deal 6", imageSrc: "https://via.placeholder.com/100x100?text=Deal+5" },
  { id: 5, title: "Deal 7", imageSrc: "https://via.placeholder.com/100x100?text=Deal+5" },
];

const useTopDealsStore = create<TopDealsStore>((set) => ({
  topDeals: [],
  isLoading: false,
  error: null,
  fetchTopDeals: async () => {
    set({ isLoading: true, error: null });
    try {
      // Simulate API with mock data
      const response = await new Promise<TopDeal[]>((resolve) =>
        setTimeout(() => resolve(mockTopDeals), 500)
      );
      set({ topDeals: response, isLoading: false });
    } catch (err: any) {
      set({ error: err.message, isLoading: false });
    }
  },
}));

export default useTopDealsStore;