export default function MealCard({ meal }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition transform hover:scale-105">
      <img
        src={meal.image}
        alt={meal.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-bold text-gray-800">{meal.name}</h3>
          <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full capitalize">
            {meal.category}
          </span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">
          {meal.description}
        </p>
      </div>
    </div>
  );
}
