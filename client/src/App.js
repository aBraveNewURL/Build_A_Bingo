import "./App.css";
import "./Bingo/Bingo";
import Game from "./Bingo/Bingo";
import Explore from "./pages/Explore";
import Create from "./pages/Create";
import Play from "./pages/Play"
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "./Bingo/Bingo.css";
import MegaMenu from "./components/MegaMenuNav";
import Footer from "./components/Footer"

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});
// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
      headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : "",
      },
  };
});
const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// list id for testing purposes only
const parentListId = "63b5f71b6d5c4f0f31c89700";

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="bg-gradient-to-br from-[#6ee073] to-[#E07863] via-blue-600">
      <div>
      
        <div className="App">
          <MegaMenu />
          {/* <Create /> */}
          {/* <Explore /> */}
          <Game />
          <Play parentListId={parentListId}/>
        </div>
      
      </div>
      <Footer />
    </div>
    </ApolloProvider>
  );
}

export default App;
