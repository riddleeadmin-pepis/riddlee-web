type ProductFiltersProps = {
  selected: string;
  onSelect: (category: string) => void;
};

const categories = [
  "Todos",
  "Lentes",
  "Accesorios",
  "Polos",
  "Collares",
];

export default function ProductFilters({
  selected,
  onSelect,
}: ProductFiltersProps) {
  return (
    <div className="flex flex-wrap gap-3">

      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelect(category)}
          className={`rounded-full px-5 py-2 font-medium transition ${
            selected === category
              ? "bg-blue-600 text-white"
              : "border border-gray-200 bg-white hover:border-blue-600 hover:bg-blue-600 hover:text-white"
          }`}
        >
          {category}
        </button>
      ))}

    </div>
  );
}