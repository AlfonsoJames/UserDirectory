import Navbar from "./components/Navbar"
// import './App.css';
import Footer from "./components/Footer";
import Container from "./components/Container";
import Wrapper from "./components/Wrapper";
import Row from "./components/Row"
import SearchForm from "./components/SearchForm"
// import SearchResults from "./components/SearchResults";
// import getRandomEmployees from "./utils/API.js"


function App() {
  return (
    <div className="App">
      <Navbar />
      <Container>
      <main>
      <Wrapper>
       
          {/* <SearchResults /> */}
       
      </Wrapper>
      </main>
      <Row><SearchForm></SearchForm></Row>
      </Container>
      <Footer />
    </div>
  );
}




export default App;
