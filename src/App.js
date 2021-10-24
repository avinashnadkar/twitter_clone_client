import Routes from "./Routes/Routes.jsx";
import { AuthContextProvider } from "./Context/AuthContextProvider.jsx";
import {OpenModalContextProvider} from "./Context/OpenModalContextProvider.jsx";
import './App.css';

function App() {
  return (
    <AuthContextProvider>
    <OpenModalContextProvider>
    <div className="App">
      <Routes/>
    </div>
    </OpenModalContextProvider>
    </AuthContextProvider>
  );
}

export default App;
