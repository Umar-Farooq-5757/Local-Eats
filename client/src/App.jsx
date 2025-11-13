import { Outlet, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";

function App() {
  const location = useLocation();
  const shouldShowHeader = location.pathname !== "/login";
  return (
    <>
      {shouldShowHeader && <Header />}
      <Outlet />
    </>
  );
}

export default App;
