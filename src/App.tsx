import { HashRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Header from "./components/Header/Header"
import Container from "./components/Container/Container"
import Home from './pages/Home';
import Footer from "./components/Footer/Footer";
import Featured from "./pages/Featured";
import Recommended from "./pages/Recommended";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Search from "./pages/Search";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Container>
      <Router>
        <Header/>

        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>

          <Route path="/featured">
            <Featured/>
          </Route>

          <Route path="/recommended">
            <Recommended/>
          </Route>

          <Route path="/shop">
            <Shop/>
          </Route>

          <Route path="/product/:id">
            <Product/>
          </Route>

          <Route path="/signup">
            <SignUp/>
          </Route>

          <Route path="/signin">
            <SignIn/>
          </Route>

          <Route path="/search/:query">
            <Search/>
          </Route>

          <Route path="/checkout">
            <Checkout/>
          </Route>

          <Redirect to="/"/>
        </Switch>

        <Footer/>
      </Router>
    </Container>
  )
}

export default App
