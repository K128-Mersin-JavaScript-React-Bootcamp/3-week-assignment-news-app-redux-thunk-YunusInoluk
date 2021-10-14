import CategoriesPage from "./pages/CategoriesPage";
import NewsDetails from "./pages/NewsDetails";
import NewsListPage from "./pages/NewsListPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <CategoriesPage />
        </Route>
        <Route path="/news-list">
          <NewsListPage />
        </Route>
        <Route path="/news-details">
          <NewsDetails />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
