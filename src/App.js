import { Route, Switch, Redirect } from 'react-router-dom';
import Quotes from './Pages/Quotes';
import NewQuote from './Pages/NewQuote';
import QuoteDetails from './Pages/QuoteDetails';
import Layout from './Components/Layout/Layout';
import NotFound from './Pages/NotFound';
const App = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Redirect to="/quotes" />
        </Route>
        <Route exact path="/quotes">
          <Quotes />
        </Route>
        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;
