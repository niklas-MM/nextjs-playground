import Link from "next/link"

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-4">happyhug 🤗</h1>
        <p className="text-xl text-gray-600 mb-8">Premium Supplements für deine Familie</p>
        <Link href="/produkte" className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition-colors">
          Jetzt entdecken
        </Link>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <p className="text-4xl mb-4">🌿</p>
          <h3 className="font-bold text-lg mb-2">100% Natürlich</h3>
          <p className="text-gray-600">Nur die besten Zutaten für dein Kind</p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <p className="text-4xl mb-4">🔬</p>
          <h3 className="font-bold text-lg mb-2">Wissenschaftlich</h3>
          <p className="text-gray-600">Von Experten entwickelt und getestet</p>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-xl">
          <p className="text-4xl mb-4">❤️</p>
          <h3 className="font-bold text-lg mb-2">Mit Liebe</h3>
          <p className="text-gray-600">Für gesunde und glückliche Kinder</p>
        </div>
      </section>

    </main>
  )
}