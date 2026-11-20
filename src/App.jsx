import "./App.css";
import AppRouter from "./routers/AppRouter";
import escudoCucei from "./assets/Escudo_CUCEI.svg";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1 className="title">Películas</h1>
      </header>
      <main className="app-content">
        <AppRouter />
      </main>
      <footer className="app-footer">
        <img
          src={escudoCucei}
          alt="Escudo CUCEI"
          className="footer-logo"
        />
        <div className="footer-info">
          <p><strong>Integrantes:</strong> Por definir</p>
          <p><strong>Profesor:</strong> Por definir</p>
          <p><strong>Materia:</strong> Programación visual</p>
          <p><strong>Calendario escolar:</strong> 2026A</p>
          <p>Institución: CUCEI – Universidad de Guadalajara</p>
          <p>Mes y año: Noviembre 2026</p>
        </div>
      </footer>
    </div>
  );
}

export default App;