import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import MainRoutes from "./routes/routes";
import NavigationBar from "./components/NavigationBar";
import FooterBar from "./components/FooterBar";

function App() {
  return (
    <div>
      <NavigationBar />
      <MainRoutes />
      <FooterBar />
    </div>
  );
}

export default App;
