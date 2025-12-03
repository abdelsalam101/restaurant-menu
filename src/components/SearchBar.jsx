export default function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="Search meals..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-6 py-3 text-lg border-2 border-amber-300 rounded-lg focus:outline-none focus:border-amber-500 bg-white text-gray-800 placeholder-gray-500 transition"
      />
    </div>
  );
}
