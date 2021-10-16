import CategoriesPage from "./pages/CategoriesPage";
import NewsDetails from "./pages/NewsDetails";
import NewsListPage from "./pages/NewsListPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/category/:id">
          <NewsListPage />
        </Route>
        <Route path="/details/:id">
          <NewsDetails />
        </Route>
        <Route exact path="/">
          <CategoriesPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
