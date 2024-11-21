interface PlaceholderProps {
    type: 'loading' | 'error' | 'empty';
    message?: string;
  }
  
  const Placeholder: React.FC<PlaceholderProps> = ({ type, message }) => {
    if (type === 'loading') return <div className="text-center text-gray-500">Loading...</div>;
    if (type === 'error') return <div className="text-center text-red-500">{message || 'An error occurred'}</div>;
    if (type === 'empty') return <div className="text-center text-gray-400">{message || 'No data available'}</div>;
    return null;
  };
  
  export default Placeholder;