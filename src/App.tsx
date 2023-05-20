import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import Header from "./components/Header/Header"

function App() {
  return (
    <div>
      <Router>
        <Header/>

        <Switch>
          <Route path="/" exact>
            home
          </Route>
          <Redirect to="/"/>
        </Switch>
      </Router>
    </div>
  )
}

export default App
