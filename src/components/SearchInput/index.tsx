import React, { useState, useCallback } from 'react';

interface SearchInputProps {
  placeholder?: string;
  debounceDelay: number;
  onSearch: (query: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ placeholder = "Search...", debounceDelay, onSearch }) => {
  const [query, setQuery] = useState("");

  // Debounce function to optimize API calls
  const debounce = (func: (...args: any[]) => void, delay: number) => {
    let timer: any;
    return (...args: any[]) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

  // Debounced onSearch handler
  const handleSearch = useCallback(
    debounce((value: string) => {
      onSearch(value);
    }, debounceDelay),
    [onSearch]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setQuery(value);
    if (value.length >= 3) {
      handleSearch(value);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex items-center gap-2">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Search
      </button>
    </form>
  );
};

export default SearchInput;
