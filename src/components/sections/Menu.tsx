import { assetPath } from "@/lib/asset-path";
import Link from "next/link";

const dishes = [
  {
    name: "Seabass Kinilaw",
    description:
      "Seabass fillet marinated in lime and soy, with wasabi, ginger, shallot and spring onion. Cirilo's take on the classic Filipino kinilaw.",
    category: "Merienda",
  },
  {
    name: "Sisig",
    description:
      "Sizzling sisig made with chicken liver purée, ginger, onion and chilli, finished with egg, lime and spring onion.",
    category: "Ulam",
  },
  {
    name: "Cirilo's Spicy Pancit Bihon",
    description:
      "Rice vermicelli stir-fried with egg, mixed capsicum and chilli, spiced with Malayan curry and sesame oil, finished with lime and cilantro.",
    category: "Pancit",
  },
];

function Menu() {
  return (
    <section
      id="menu"
      className="py-24 px-4 bg-white"
      aria-labelledby="menu-heading"
    >
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <p className="text-black/50 text-sm font-medium tracking-[0.3em] uppercase mb-3">
            Menu
          </p>
          <h2
            id="menu-heading"
            className="font-heading text-4xl sm:text-5xl font-bold text-black leading-tight mb-4"
          >
            Our Specialties
          </h2>
          <p className="text-black/55 max-w-xl mx-auto leading-relaxed text-lg">
            Crafted from generations-old recipes, each dish is a celebration of
            the bold, layered flavors that define Filipino cooking.
          </p>
        </header>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
        >
          {dishes.map((dish, idx) => (
            <li key={dish.name}>
              <article className="rounded-2xl overflow-hidden border border-black/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white">
                <div className="h-28 relative" aria-hidden="true">
                  <h2 className="py-5 px-4 text-5xl">0{idx + 1}</h2>
                  <span className="absolute bottom-3 left-3 bg-black/30 backdrop-blur-sm text-white/80 text-xs px-2.5 py-0.5 rounded-full">
                    {dish.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-heading text-lg font-semibold text-black leading-snug">
                      {dish.name}
                    </h3>
                  </div>
                  <p className="text-black/55 text-lg leading-relaxed">
                    {dish.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <div className="text-center mt-12">
          <Link
            href={`${assetPath("/menu.pdf")}`}
            className="inline-flex items-center gap-2 border border-black/20 text-black font-medium px-10 py-5 rounded-full hover:bg-black hover:border-black hover:text-white transition-colors duration-200 text-lg"
            aria-label="View full menu"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Menu
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Menu;
