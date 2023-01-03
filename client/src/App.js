import "./App.css";
import "./Bingo/Bingo";
import Game from "./Bingo/Bingo";
import Explore from "./pages/Explore";
import Create from "./pages/Create";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./Bingo/Bingo.css";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* <Game/> and <Explore/> should probably be on different pages at some point */}
        <Game />
        <Explore />
        <Create />
      </div>
    </ApolloProvider>
  );
}

export default App;
