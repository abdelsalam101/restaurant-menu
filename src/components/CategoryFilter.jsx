export default function CategoryFilter({ selectedCategories, setSelectedCategories }) {
  const categories = ["breakfast", "lunch", "dinner"];

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="mb-8 flex gap-4 justify-center flex-wrap">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => toggleCategory(category)}
          className={`px-6 py-2 rounded-full font-semibold text-sm transition capitalize ${
            selectedCategories.includes(category)
              ? "bg-amber-500 text-white shadow-lg"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
