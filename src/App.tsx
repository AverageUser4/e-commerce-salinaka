import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Header from "./components/Header/Header"
import Container from "./components/Container/Container"
import Home from './pages/Home';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Container>
      <Router>
        <Header/>

        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Redirect to="/"/>
        </Switch>

        <Footer/>
      </Router>
    </Container>
  )
}

export default App
