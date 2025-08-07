import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import CountryCard from './components/CountryCard';
import countriesData from './data/countries.json';

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setCountries(countriesData);
  }, []);

  const filtered = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Mini-Country Viewer</h1>
      <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />
      <div className="grid gap-4 mt-4">
        {filtered.map((country, idx) => (
          <CountryCard key={idx} country={country} />
        ))}
      </div>
    </div>
  );
}
