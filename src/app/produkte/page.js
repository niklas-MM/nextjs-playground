export default function Produkte() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-8">Unsere Produkte</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {['Vitamin D', 'Omega 3', 'Vitamin B12'].map((name) => (
          <div key={name} className="bg-white border rounded-xl p-6 shadow-sm">
            <h2 className="font-bold text-lg mb-2">{name}</h2>
            <p className="text-gray-600 mb-4">Premium Qualität für dein Kind</p>
            <button className="w-full bg-black text-white py-2 rounded-lg">
              Kaufen
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}