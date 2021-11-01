import Routes from "./Routes/Routes.jsx";
import { AuthContextProvider } from "./Context/AuthContextProvider.jsx";
import {OpenModalContextProvider} from "./Context/OpenModalContextProvider.jsx";
import { TweetContextProvider } from "./Context/TweetContextProvider.jsx";
import './App.css';

function App() {
  return (
    <AuthContextProvider>
      <OpenModalContextProvider>
        <TweetContextProvider>
          <div className="App">
            <Routes/>
          </div>
        </TweetContextProvider>
      </OpenModalContextProvider>
    </AuthContextProvider>
  );
}

export default App;
