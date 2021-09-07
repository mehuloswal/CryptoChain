import "./App.css";
import { WalletInfo } from "./components/wallet-info/wallet.component";
import { Header } from "./components/header/header.component";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <WalletInfo />
      <div>
        <Link to="/blocks">Blocks</Link>
      </div>
    </div>
  );
}

export default App;
