import { BrokerMiniCardProps } from "../components/BrokerMiniCard";

export interface Property {
    id: number;
    imageSrc: string;
    title: string;
    subtitle: string;
    details: { label: string; value: string }[];
    contactNumber: string;
    brokerInfo: BrokerMiniCardProps;
}