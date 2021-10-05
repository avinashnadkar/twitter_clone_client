import Routes from "./Routes/Routes.jsx";
import { AuthContextProvider } from "./Context/AuthContextProvider.jsx";
import './App.css';

function App() {
  return (
    <AuthContextProvider>
    <div className="App">
      <Routes/>
    </div>
    </AuthContextProvider>
  );
}

export default App;
