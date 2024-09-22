const { useState } = React;
const { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } = Recharts;
const { Wallet, PieChart, Calendar, Settings } = lucide;

const data = [
  { name: 'Jan', dépenses: 4000, revenus: 2400 },
  { name: 'Fév', dépenses: 3000, revenus: 1398 },
  { name: 'Mar', dépenses: 2000, revenus: 9800 },
  { name: 'Avr', dépenses: 2780, revenus: 3908 },
  { name: 'Mai', dépenses: 1890, revenus: 4800 },
  { name: 'Juin', dépenses: 2390, revenus: 3800 },
];

const App = () => {
  const [activeTab, setActiveTab] = useState('aperçu');

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <header className="bg-green-600 text-white p-4">
        <h1 className="text-2xl font-bold">MonBudget</h1>
      </header>
      
      <main className="flex-grow p-4">
        {activeTab === 'aperçu' && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Aperçu du mois</h2>
            <div className="bg-white rounded-lg shadow p-4 mb-4">
              <h3 className="text-lg font-medium mb-2">Solde actuel</h3>
              <p className="text-3xl font-bold text-green-600">2 855 €</p>
            </div>
            <div className="bg-white rounded-lg shadow p-4">
              <h3 className="text-lg font-medium mb-2">Évolution des dépenses et revenus</h3>
              <LineChart width={300} height={200} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="dépenses" stroke="#8884d8" />
                <Line type="monotone" dataKey="revenus" stroke="#82ca9d" />
              </LineChart>
            </div>
          </div>
        )}
      </main>
      
      <footer className="bg-white border-t">
        <nav className="flex justify-around">
          <button onClick={() => setActiveTab('aperçu')} className="p-4 flex flex-col items-center">
            <Wallet />
            <span>Aperçu</span>
          </button>
          <button onClick={() => setActiveTab('transactions')} className="p-4 flex flex-col items-center">
            <PieChart />
            <span>Transactions</span>
          </button>
          <button onClick={() => setActiveTab('planification')} className="p-4 flex flex-col items-center">
            <Calendar />
            <span>Planification</span>
          </button>
          <button onClick={() => setActiveTab('paramètres')} className="p-4 flex flex-col items-center">
            <Settings />
            <span>Paramètres</span>
          </button>
        </nav>
      </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
