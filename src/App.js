import React, { useState, useEffect } from 'react';
import '@coreui/coreui/dist/css/coreui.min.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('inicial');
  const [error, setError] = useState('');
  const [userCount, setUserCount] = useState(0);
  const [users, setUsers] = useState([]);

  const handleLogin = (username, password) => {
    if (username === 'admin' && password === 'admin') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      const mockUsers = [
        { id: 1, dados1: 'Dado 1', dados2: 'Dado 2', dados3: 'Dado 3', dados4: 'Dado 4', dados5: 'Dado 5' },
        { id: 2, dados1: 'Dado 6', dados2: 'Dado 7', dados3: 'Dado 8', dados4: 'Dado 9', dados5: 'Dado 10' },
      ];
      setUsers(mockUsers);
      setUserCount(mockUsers.length);
    }
  }, [isAuthenticated]);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const username = e.target.username.value;
              const password = e.target.password.value;
              handleLogin(username, password);
            }}
          >
            <input
              type="text"
              name="username"
              placeholder="Usuário"
              required
              className="form-control mb-4"
            />
            <input
              type="password"
              name="password"
              placeholder="Senha"
              required
              className="form-control mb-4"
            />
            <button type="submit" className="btn btn-primary w-100">
              Entrar
            </button>
          </form>
          {error && <p className="text-danger mt-3 text-center">{error}</p>}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-light">
      <header className="bg-primary text-white py-4">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="h3">Painel Admin</h1>
          <nav>
            <button
              onClick={() => setActiveTab('inicial')}
              className={`btn ${activeTab === 'inicial' ? 'btn-light text-primary' : 'btn-outline-light'} me-2`}
            >
              Inicial
            </button>
            <button
              onClick={() => setActiveTab('usuarios')}
              className={`btn ${activeTab === 'usuarios' ? 'btn-light text-primary' : 'btn-outline-light'}`}
            >
              Usuários
            </button>
          </nav>
        </div>
      </header>

      <main className="container py-5">
        {activeTab === 'inicial' && (
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body text-center">
                  <h5 className="card-title">Usuários Cadastrados</h5>
                  <p className="card-text fs-4">{userCount}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'usuarios' && (
          <div className="card">
            <div className="card-header">Lista de Usuários</div>
            <div className="card-body">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Dado 123</th>
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
          </div>
        )}
      </main>
    </div>
  );
}

export default App;