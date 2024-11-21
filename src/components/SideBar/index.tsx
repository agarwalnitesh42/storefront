import React from 'react';
import clsx from 'clsx';

// Icons (replace with actual icons or SVGs)
const ListingIcon = () => <span>📄</span>;
const ReportIcon = () => <span>📊</span>;
const MapIcon = () => <span>🗺️</span>;

// Sidebar Item Interface
interface SidebarItem {
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

// SideBar Component
const SideBar: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<string>('Listing');

  const sidebarItems: SidebarItem[] = [
    {
      label: 'Listing',
      icon: <ListingIcon />,
      isActive: activeItem === 'Listing',
      onClick: () => setActiveItem('Listing'),
    },
    {
      label: 'Report',
      icon: <ReportIcon />,
      isActive: activeItem === 'Report',
      onClick: () => setActiveItem('Report'),
    },
    {
      label: 'Map',
      icon: <MapIcon />,
      isActive: activeItem === 'Map',
      onClick: () => setActiveItem('Map'),
    },
  ];

  return (
    <div className="h-full w-20 bg-gray-100 flex flex-col items-center py-4 shadow-md">
      {sidebarItems.map((item) => (
        <div
          key={item.label}
          onClick={item.onClick}
          className={clsx(
            'flex flex-col items-center justify-center w-full py-4 cursor-pointer transition-all',
            item.isActive ? 'bg-green-500 text-white' : 'text-gray-700 hover:bg-gray-200'
          )}
        >
          <div className="text-xl mb-1">{item.icon}</div>
          <span className="text-sm">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default SideBar;