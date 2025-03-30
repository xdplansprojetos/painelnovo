import React, { useState, useEffect } from 'react'; import './App.css';

function App() { const [isAuthenticated, setIsAuthenticated] = useState(false); const [activeTab, setActiveTab] = useState('inicial'); const [error, setError] = useState(''); const [userCount, setUserCount] = useState(0); const [users, setUsers] = useState([]); const [dateTime, setDateTime] = useState(new Date());

// Função de autenticação const handleLogin = (username, password) => { if (username === 'admin' && password === 'admin') { setIsAuthenticated(true); setError(''); } else { setError('Usuário ou senha inválidos'); } };

// Fetch mock de usuários useEffect(() => { if (isAuthenticated) { const mockUsers = [ { id: 1, dados1: 'Dado 1', dados2: 'Dado 2', dados3: 'Dado 3', dados4: 'Dado 4', dados5: 'Dado 5' }, { id: 2, dados1: 'Dado 6', dados2: 'Dado 7', dados3: 'Dado 8', dados4: 'Dado 9', dados5: 'Dado 10' }, ]; setUsers(mockUsers); setUserCount(mockUsers.length); } }, [isAuthenticated]);

// Atualização do horário useEffect(() => { const timer = setInterval(() => setDateTime(new Date()), 1000); return () => clearInterval(timer); }, []);

if (!isAuthenticated) { return ( <div className="min-h-screen flex items-center justify-center bg-gray-100"> <div className="bg-white shadow-lg rounded-lg p-8 w-96"> <h2 className="text-2xl font-bold mb-6 text-center">Login</h2> <form onSubmit={(e) => { e.preventDefault(); const username = e.target.username.value; const password = e.target.password.value; handleLogin(username, password); }} > <input 
type="text" 
name="username" 
placeholder="Usuário" 
required 
className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/> <input 
type="password" 
name="password" 
placeholder="Senha" 
required 
className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
/> <button 
type="submit" 
className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition"
> Entrar </button> </form> {error && <p className="text-red-500 mt-4 text-center">{error}</p>} </div> </div> ); }

return ( <div className="min-h-screen bg-gray-100"> <header className="bg-blue-500 text-white py-4"> <div className="container mx-auto flex justify-between items-center"> <h1 className="text-xl font-bold">Painel Admin</h1> <nav> <button onClick={() => setActiveTab('inicial')} className={px-4 py-2 rounded-lg ${activeTab === 'inicial' ? 'bg-white text-blue-500' : 'hover:bg-blue-600 transition'}} > Inicial </button> <button onClick={() => setActiveTab('usuarios')} className={px-4 py-2 rounded-lg ml-2 ${activeTab === 'usuarios' ? 'bg-white text-blue-500' : 'hover:bg-blue-600 transition'}} > Usuários </button> </nav> </div> </header>

<main className="container mx-auto py-8">
    {activeTab === 'inicial' && (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Data e Hora</h3>
          <p className="text-gray-700 text-lg">{dateTime.toLocaleString()}</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
          <h3 className="text-xl font-semibold mb-2">Usuários Cadastrados</h3>
          <p className="text-gray-700 text-lg">{userCount}</p>
        </div>
      </div>
    )}

    {activeTab === 'usuarios' && (
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Lista de Usuários</h3>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Dado 1</th>
              <th className="border border-gray-300 p-2">Dado 2</th>
              <th className="border border-gray-300 p-2">Dado 3</th>
              <th className="border border-gray-300 p-2">Dado 4</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-2 text-center">{user.id}</td>
                <td className="border border-gray-300 p-2 text-center">{user.dados1}</td>
                <td className="border border-gray-300 p-2 text-center">{user.dados2}</td>
                <td className="border border-gray-300 p-2 text-center">{user.dados3}</td>
                <td className="border border-gray-300 p-2 text-center">{user.dados4}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </main>
</div>

); }

export default App;

