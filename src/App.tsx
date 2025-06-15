import { PrimeReactProvider } from "primereact/api";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Login from "./pages/Login";
import Layout from "./pages/layout";

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <PrimeReactProvider>
      <Router>
        <Routes>
          <Route
            path="/expense-tracker-ui"
            element={
              isAuthenticated ? (
                <Layout onLogout={() => setIsAuthenticated(false)} />
              ) : (
                <Navigate to="/expense-tracker-ui/login" replace />
              )
            }
          />
          <Route
            path="/expense-tracker-ui/login"
            element={
              isAuthenticated ? (
                <Navigate to="/expense-tracker-ui" replace />
              ) : (
                <Login onLogin={() => setIsAuthenticated(true)} />
              )
            }
          />
        </Routes>
      </Router>
    </PrimeReactProvider>
  );
}
