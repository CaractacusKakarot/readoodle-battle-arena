import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-6 flex flex-col items-center justify-center space-y-6">
      <h1 className="text-4xl font-bold text-green-400">READoodle Battle Arena</h1>
      <p className="text-sm text-gray-400 mb-4">Choose your adventure:</p>

      <nav className="flex flex-col space-y-4 w-full max-w-xs">
        <Link href="/story">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded text-lg w-full">📚 Story Mode</button>
        </Link>
        <Link href="/1v1">
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded text-lg w-full">🧍 1v1 Battle</button>
        </Link>
        <Link href="/team">
          <button className="bg-yellow-600 hover:bg-yellow-700 text-black py-2 px-4 rounded text-lg w-full">🧑‍🤝‍🧑 Team Battle</button>
        </Link>
        <Link href="/outfit">
          <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded text-lg w-full">🎨 Change Outfit</button>
        </Link>
        <Link href="/settings">
          <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded text-lg w-full">⚙️ Settings</button>
        </Link>
      </nav>
    </main>
  );
}
