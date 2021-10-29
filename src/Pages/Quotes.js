import QuoteList from '../Components/Quotes/QuoteList';
const DUMMY_QUOTES = [
  { id: 'q1', author: 'Yousef', text: 'Learning React.js is fun !' },
  { id: 'q2', author: 'Atef', text: 'Learning React.js is greet !' },
];
const Quotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};
export default Quotes;
