import { useState, useMemo } from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import MealCard from "./MealCard";
import { mealsData } from "../data/meals";

export default function Menu() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState(["breakfast", "lunch", "dinner"]);

  const filteredMeals = useMemo(() => {
    return mealsData.filter(meal => {
      const matchesSearch = meal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           meal.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategories.includes(meal.category);
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategories]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-amber-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-2">
            Le Petit Gourmet
          </h1>
          <p className="text-gray-600 text-lg">Fine Dining Experience</p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-600 mx-auto mt-4"></div>
        </div>

        {/* Search Bar */}
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        {/* Category Filter */}
        <CategoryFilter 
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
        />

        {/* Meals Grid */}
        {filteredMeals.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMeals.map(meal => (
              <MealCard key={meal.id} meal={meal} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No meals found. Try a different search!</p>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-8">
          <p className="text-gray-600 font-semibold">
            Showing {filteredMeals.length} of {mealsData.length} meals
          </p>
        </div>
      </div>
    </div>
  );
}
