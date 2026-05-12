import Link from "next/link"

const produkte = [
  { slug: "vitamin-d", name: "Vitamin D Tropfen", preis: 29.99, emoji: "☀️" },
  { slug: "omega-3", name: "Omega 3", preis: 24.99, emoji: "🐟" },
  { slug: "vitamin-b12", name: "Vitamin B12", preis: 19.99, emoji: "💊" }
]

export default function Produkte() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Unsere Produkte</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {produkte.map((p) => (
          <Link key={p.slug} href={`/produkte/${p.slug}`}>
            <div className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer">
              <p className="text-4xl mb-4">{p.emoji}</p>
              <h2 className="font-bold text-lg mb-2">{p.name}</h2>
              <p className="text-green-600 font-bold">{p.preis} €</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}