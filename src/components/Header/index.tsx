import React from 'react';
import logo from "../../assets/png/zona.png"; // Path to your logo
import clsx from 'clsx';

// Button Component for Reusability
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary' }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'px-4 py-2 rounded text-sm font-medium',
        variant === 'primary' ? 'bg-green-500 text-white hover:bg-green-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      )}
    >
      {label}
    </button>
  );
};

// Header Component
const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between bg-gray-100 px-4 py-2 shadow-md">
      {/* Left Section: Logo and Location */}
      <div className="flex items-center space-x-4">
        {/* Logo Container */}
        <div className="flex items-center justify-center w-24 h-12 ">
          <img src={logo} alt="Zona Logo" className="w-full h-full object-contain" />
        </div>
        {/* Location Button */}
        <div>
          <Button
            label="Kithoor, Alwar"
            onClick={() => console.log("Location button clicked")}
            variant="secondary"
          />
        </div>
      </div>

      {/* Right Section: Navigation Buttons */}
      <div className="flex items-center space-x-4">
        <Button
          label="Broker Sign Up"
          onClick={() => console.log("Broker Sign Up clicked")}
        />
        <Button
          label="Download App"
          onClick={() => console.log("Download App clicked")}
        />
        <Button
          label="List Property"
          onClick={() => console.log("List Property clicked")}
        />
      </div>
    </header>
  );
};

export default Header;