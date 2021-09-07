import "./App.css";
import { WalletInfo } from "./components/wallet-info/wallet.component";
import { Header } from "./components/header/header.component";
function App() {
  return (
    <div className="App">
      <Header />
      <WalletInfo />
    </div>
  );
}

export default App;
