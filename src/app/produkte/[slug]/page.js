const produkte = {
  "vitamin-d": {
    name: "Vitamin D Tropfen",
    preis: 29.99,
    beschreibung: "Hochdosiertes Vitamin D3 für Kinder. Unterstützt Knochen, Immunsystem und Entwicklung.",
    emoji: "☀️"
  },
  "omega-3": {
    name: "Omega 3",
    preis: 24.99,
    beschreibung: "Hochwertiges Fischöl für die Gehirnentwicklung deines Kindes.",
    emoji: "🐟"
  },
  "vitamin-b12": {
    name: "Vitamin B12",
    preis: 19.99,
    beschreibung: "Wichtig für Nerven und Blutbildung. Ideal für die ganze Familie.",
    emoji: "💊"
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const produkt = produkte[slug]

  if (!produkt) return { title: "Produkt nicht gefunden" }

  return {
    title: `${produkt.name} – happyhug`,
    description: produkt.beschreibung,
  }
}

export default async function ProduktDetail({ params }) {
  const { slug } = await params
  const produkt = produkte[slug]

  if (!produkt) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Produkt nicht gefunden</h1>
        <p className="text-gray-600">Dieses Produkt gibt es leider nicht.</p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-6xl mb-6">{produkt.emoji}</p>
      <h1 className="text-4xl font-bold mb-4">{produkt.name}</h1>
      <p className="text-gray-600 text-lg mb-6">{produkt.beschreibung}</p>
      <p className="text-3xl font-bold text-green-600 mb-8">{produkt.preis} €</p>
      <button className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
        In den Warenkorb
      </button>
    </div>
  )
}