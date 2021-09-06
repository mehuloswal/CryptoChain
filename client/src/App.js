import "./App.css";
import { WalletInfo } from "./components/wallet-info/wallet.component";
import { Blocks } from "./components/blocks/blocks.component";
import { Header } from "./components/header/header.component";
function App() {
  return (
    <div className="App">
      <Header />
      <WalletInfo />
      <Blocks />
    </div>
  );
}

export default App;
