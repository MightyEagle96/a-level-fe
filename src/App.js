import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.css";
import MainRoutes from "./routes/routes";
import NavigationBar from "./components/NavigationBar";
import FooterBar from "./components/FooterBar";
import Page from "react-page-loading";
import { green } from "@mui/material/colors";

function App() {
  return (
    <div>
      <Page loader={"resize-spin"} color={green[500]} size={4}>
        <NavigationBar />
        <MainRoutes />
        <FooterBar />
      </Page>
    </div>
  );
}

export default App;
