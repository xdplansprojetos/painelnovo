import React, { useState, useEffect } from 'react'; import './App.css';

function App() { const [isAuthenticated, setIsAuthenticated] = useState(false); const [activeTab, setActiveTab] = useState('inicial'); const [error, setError] = useState(''); const [userCount, setUserCount] = useState(0); const [users, setUsers] = useState([]); const [dateTime, setDateTime] = useState(new Date());

// Mock authentication function const handleLogin = (username, password) => { if (username === 'admin' && password === 'admin') { setIsAuthenticated(true); setError(''); } else { setError('Usuário ou senha inválidos'); } };

// Fetch users from API (mocked data for now) useEffect(() => { if (isAuthenticated) { // Simulated API call const mockUsers = [ { id: 1, dados1: 'Dado 1', dados2: 'Dado 2', dados3: 'Dado 3', dados4: 'Dado 4', dados5: 'Dado 5' }, { id: 2, dados1: 'Dado 6', dados2: 'Dado 7', dados3: 'Dado 8', dados4: 'Dado 9', dados5: 'Dado 10' }, ]; setUsers(mockUsers); setUserCount(mockUsers.length); } }, [isAuthenticated]);

// Update date and time every second useEffect(() => { const timer = setInterval(() => setDateTime(new Date()), 1000); return () => clearInterval(timer); }, []);

if (!isAuthenticated) { return ( <div className="login-container"> <h2>Login</h2> <form onSubmit={(e) => { e.preventDefault(); const username = e.target.username.value; const password = e.target.password.value; handleLogin(username, password); }} > <input type="text" name="username" placeholder="Usuário" required /> <input type="password" name="password" placeholder="Senha" required /> <button type="submit">Entrar</button> </form> {error && <p className="error-message">{error}</p>} </div> ); }

return ( <div className="App"> <header className="App-header"> <h1>Painel Admin</h1> <nav> <button onClick={() => setActiveTab('inicial')}>Inicial</button> <button onClick={() => setActiveTab('usuarios')}>Usuários</button> </nav> </header>

{activeTab === 'inicial' && (
    <div className="tab-content">
      <div className="card">
        <h3>Data e Hora</h3>
        <p>{dateTime.toLocaleString()}</p>
      </div>
      <div className="card">
        <h3>Usuários Cadastrados</h3>
        <p>{userCount}</p>
      </div>
    </div>
  )}

  {activeTab === 'usuarios' && (
    <div className="tab-content">
      <h3>Lista de Usuários</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Dado 1</th>
            <th>Dado 2</th>
            <th>Dado 3</th>
            <th>Dado 4</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.dados1}</td>
              <td>{user.dados2}</td>
              <td>{user.dados3}</td>
              <td>{user.dados4}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</div>

); }

export default App;
