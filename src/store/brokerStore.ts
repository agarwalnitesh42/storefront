import { create } from "zustand";

export interface Broker {
    id: number;
    imageSrc: string;
    name: string;
    location: string;
    contactNumber: string;
}

export interface BrokerStore {
    brokers?: Broker[];
    brokerDetail?: Broker;
    isLoading: boolean;
    error: string | null;
    fetchBrokers: (query?: string) => Promise<void>;
    fetchBrokerDetail: (query?: string) => Promise<void>;
}

const mockBrokers: Broker[] = [
    {
        id: 1,
        imageSrc: "https://via.placeholder.com/150x150?text=Broker+1",
        name: "Suraj Properties",
        location: "Kithoor, Alwar",
        contactNumber: "9741354430",
    },
    {
        id: 2,
        imageSrc: "https://via.placeholder.com/150x150?text=Broker+2",
        name: "Deepak Estates",
        location: "Bagar Tiraha, Alwar",
        contactNumber: "9876543210",
    },
];


const brokerProfile: Broker =
{
    id: 1,
    imageSrc: "https://via.placeholder.com/150x150?text=Broker+1",
    name: "Suraj Properties",
    location: "Kithoor, Alwar",
    contactNumber: "9741354430",
};

const useBrokerStore = create<BrokerStore>((set) => ({
    brokers: [],
    isLoading: false,
    error: null,

    fetchBrokers: async (query?: string) => {
        set({ isLoading: true, error: null });
        try {
            const data = mockBrokers; // Simulate API
            set({ brokers: data, isLoading: false });
        } catch (err: any) {
            set({ error: err.message, isLoading: false });
        }
    },

    fetchBrokerDetail: async (query?: string) => {
        set({ isLoading: true, error: null });
        try {
            const data = brokerProfile; // Simulate API
            set({ brokerDetail: data, isLoading: false });
        } catch (err: any) {
            set({ error: err.message, isLoading: false });
        }
    },
}));

export default useBrokerStore;