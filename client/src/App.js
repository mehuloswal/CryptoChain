import "./App.css";
import { WalletInfo } from "./components/wallet-info/wallet.component";
import { Blocks } from "./components/blocks/block.component";
function App() {
  return (
    <div className="App">
      <WalletInfo />
      <Blocks />
    </div>
  );
}

export default App;
