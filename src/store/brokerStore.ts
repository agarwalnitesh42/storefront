import { create } from 'zustand';
import { BrokerMiniCardProps } from '../components/BrokerMiniCard';

export interface Property {
    id: number;
    imageSrc: string;
    title: string;
    subtitle: string;
    details: { label: string; value: string }[];
    contactNumber: string;
    brokerInfo: BrokerMiniCardProps;
}

export interface BrokerStore {
    properties: Property[];
    isLoading: boolean;
    error: string | null;
    fetchProperties: () => Promise<void>;
}

const mockProperties = [
    {
        id: 1,
        imageSrc: "https://via.placeholder.com/300x200?text=Property+1",
        title: "20-25 Lakhs",
        subtitle: "Kithoor, Alwar",
        details: [
            { label: "Area", value: "846 sq yd" },
            { label: "Front", value: "100 Feet" },
            { label: "Location", value: "Khasra No 234/194" },
        ],
        contactNumber: "9741354430",
        brokerInfo: {
            imageSrc: 'https://via.placeholder.com/300x200?text=Property+2',
            name: 'Nitesh Agarwal',
            location: 'Kithoor, Alwar',
            contactNumber: '9741354430',
            onContactClick: () => console.log(''),
        }
    },
    {
        id: 2,
        imageSrc: "https://via.placeholder.com/300x200?text=Property+2",
        title: "15-18 Lakhs",
        subtitle: "Ghasoli, Alwar",
        details: [
            { label: "Area", value: "540 sq yd" },
            { label: "Front", value: "80 Feet" },
            { label: "Location", value: "Khasra No 198/54" },
        ],
        contactNumber: "9876543210",
        brokerInfo: {
            imageSrc: 'https://via.placeholder.com/300x200?text=Property+2',
            name: 'Nitesh Agarwal',
            location: 'Kithoor, Alwar',
            contactNumber: '9741354430',
            onContactClick: () => console.log(''),
        }
    },
    {
        id: 3,
        imageSrc: "https://via.placeholder.com/300x200?text=Property+3",
        title: "30-35 Lakhs",
        subtitle: "Hanuman Circle, Alwar",
        details: [
            { label: "Area", value: "1000 sq yd" },
            { label: "Front", value: "150 Feet" },
            { label: "Location", value: "Main Highway" },
        ],
        contactNumber: "9988776655",
        brokerInfo: {
            imageSrc: 'https://via.placeholder.com/300x200?text=Property+2',
            name: 'Nitesh Agarwal',
            location: 'Kithoor, Alwar',
            contactNumber: '9741354430',
            onContactClick: () => console.log(''),
        }
    },
    {
        id: 4,
        imageSrc: "https://via.placeholder.com/300x200?text=Property+4",
        title: "40-45 Lakhs",
        subtitle: "Bagar Tiraha, Alwar",
        details: [
            { label: "Area", value: "1500 sq yd" },
            { label: "Front", value: "200 Feet" },
            { label: "Location", value: "Near Bagar Mod" },
        ],
        contactNumber: "9966332211",
        brokerInfo: {
            imageSrc: 'https://via.placeholder.com/300x200?text=Property+2',
            name: 'Nitesh Agarwal',
            location: 'Kithoor, Alwar',
            contactNumber: '9741354430',
            onContactClick: () => console.log(''),
        }
    },
    {
        id: 5,
        imageSrc: "https://via.placeholder.com/300x200?text=Property+5",
        title: "10-12 Lakhs",
        subtitle: "Chhati Meel, Alwar",
        details: [
            { label: "Area", value: "400 sq yd" },
            { label: "Front", value: "50 Feet" },
            { label: "Location", value: "New Shalimar Vistar" },
        ],
        contactNumber: "9123456780",
        brokerInfo: {
            imageSrc: 'https://via.placeholder.com/300x200?text=Property+2',
            name: 'Nitesh Agarwal',
            location: 'Kithoor, Alwar',
            contactNumber: '9741354430',
            onContactClick: () => console.log(''),
        }
    },
    {
        id: 6,
        imageSrc: "https://via.placeholder.com/300x200?text=Property+6",
        title: "25-30 Lakhs",
        subtitle: "Delhi Road, Alwar",
        details: [
            { label: "Area", value: "1200 sq yd" },
            { label: "Front", value: "120 Feet" },
            { label: "Location", value: "Near Delhi Expressway" },
        ],
        contactNumber: "9832211221",
        brokerInfo: {
            imageSrc: 'https://via.placeholder.com/300x200?text=Property+2',
            name: 'Nitesh Agarwal',
            location: 'Kithoor, Alwar',
            contactNumber: '9741354430',
            onContactClick: () => console.log(''),
        }
    },
];

const useBrokerStore = create<BrokerStore>((set) => ({
    properties: [],
    isLoading: false,
    error: null,
    fetchProperties: async () => {
        set({ isLoading: true, error: null });
        try {
            const response = await fetch('/api/broker/properties'); // Placeholder API
            // const data = await response.json();
            set({ properties: mockProperties, isLoading: false });
            // set({ properties: data, isLoading: false });
        } catch (err: any) {
            set({ error: err.message, isLoading: false });
        }
    },
}));

export default useBrokerStore;