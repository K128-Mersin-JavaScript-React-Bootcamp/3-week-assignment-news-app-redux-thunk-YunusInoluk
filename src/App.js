import CategoriesPage from "./pages/CategoriesPage";
import NewsDetails from "./pages/NewsDetails";
import NewsListPage from "./pages/NewsListPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <CategoriesPage />
        </Route>
        <Route path="/:category" children={<NewsListPage />} />
        <Route path="/:details" component={<NewsDetails />} />
      </Switch>
    </div>
  );
}

export default App;
