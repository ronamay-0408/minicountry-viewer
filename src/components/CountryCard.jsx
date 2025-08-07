import { useState } from 'react';

export default function CountryCard({ country }) {
  const [expanded, setExpanded] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setExpanded((prev) => !prev);
    }
  };

  return (
    <div
      className="border p-4 rounded shadow hover:shadow-md focus:outline-none focus:ring cursor-pointer transition-all"
      tabIndex="0"
      onClick={() => setExpanded(!expanded)}
      onKeyDown={handleKeyDown}
    >
      <div className="flex items-center gap-4">
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="w-12 h-8 object-cover border rounded"
        />
        <div>
          <p className="font-semibold">{country.name}</p>
          <p className="text-sm text-gray-500">{country.region}</p>
        </div>
      </div>

      {expanded && (
        <div className="mt-2 text-sm text-gray-700 pl-16">
          <p><strong>Capital:</strong> {country.capital}</p>
          <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}
