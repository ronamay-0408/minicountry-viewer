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
        <div className="mx-auto p-4">
            <div className="w-full md:w-[60%] p-5 text-center mx-auto">
                <h1 className="text-2xl font-bold mb-4">Mini-Country Viewer</h1>
                <SearchBar searchTerm={searchTerm} onChange={setSearchTerm} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4 items-start">
                {filtered.map((country, idx) => (
                    <CountryCard key={idx} country={country} />
                ))}
            </div>
        </div>
    );
}
