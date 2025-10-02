import { useState } from 'react';

export default function Home() {
  const [words, setWords] = useState([
    { text: 'laser', correct: false },
    { text: 'monster', correct: false },
    { text: 'galaxy', correct: false },
  ]);
  const [ap, setAp] = useState(0);
  const [battleLog, setBattleLog] = useState([]);

  const handleCorrect = (i) => {
    const updated = [...words];
    if (!updated[i].correct) {
      updated[i].correct = true;
      setAp(ap + 1);
    }
    setWords(updated);
  };

  const useMove = (move) => {
    if (move.cost <= ap) {
      setBattleLog([...battleLog, `Used ${move.name}`]);
      setAp(ap - move.cost);
    } else {
      setBattleLog([...battleLog, `Not enough AP for ${move.name}`]);
    }
  };

  const moves = [
    { name: 'Punch', cost: 2 },
    { name: 'Laser Beam', cost: 4 },
    { name: 'Heal', cost: 3 },
  ];

  return (
    <main className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold text-green-400">READoodle RPG</h1>
      <p className="mt-2">Action Points: {ap}</p>

      <div className="mt-4">
        {words.map((word, i) => (
          <button key={i} className="m-2 p-2 bg-gray-800 rounded" onClick={() => handleCorrect(i)}>
            {word.text} {word.correct ? '✅' : ''}
          </button>
        ))}
      </div>

      <div className="mt-4">
        <h2 className="text-xl mb-2">Moves</h2>
        {moves.map((move, i) => (
          <button
            key={i}
            className="m-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
            onClick={() => useMove(move)}
          >
            {move.name} ({move.cost} AP)
          </button>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-xl mb-2">Battle Log</h2>
        <ul className="bg-gray-900 p-4 rounded">
          {battleLog.map((log, i) => (
            <li key={i}>- {log}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
