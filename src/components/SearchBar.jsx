export default function SearchBar({ searchTerm, onChange }) {
    return (
        <input
            type="text"
            placeholder="Search countries..."
            className="w-full p-2 border rounded"
            value={searchTerm}
            onChange={(e) => onChange(e.target.value)}
            aria-label="Search countries"
        />
    );
}
