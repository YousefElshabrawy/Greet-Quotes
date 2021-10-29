import { Fragment } from 'react';
import { useParams, Route, Link } from 'react-router-dom';
import Comments from '../Components/Comments/Comments';
import HighlightedQuote from '../Components/Quotes/HighlightedQuote';
import NoQuotesFound from '../Components/Quotes/NoQuotesFound';
const DUMMY_QUOTES = [
  { id: 'q1', author: 'Yousef', text: 'Learning React.js is fun !' },
  { id: 'q2', author: 'Atef', text: 'Learning React.js is greet !' },
];
const QuoteDetails = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find(({ id }) => id === params.quoteId);
  if (!quote) return <NoQuotesFound />;
  return (
    <Fragment>
      <HighlightedQuote author={quote.author} text={quote.text} />
      <Route exact path={`/quotes/${params.quoteId}`}>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${params.quoteId}/comments`}>
            Comments{' '}
          </Link>
        </div>
      </Route>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default QuoteDetails;
