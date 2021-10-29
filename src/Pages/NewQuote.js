import { useHistory } from 'react-router-dom';
import QuoteForm from '../Components/Quotes/QuoteForm';
const NewQuote = () => {
  const history = useHistory();
  const addQuoteHandler = ({ author, text }) => {
    console.log(author, text);
    history.push('/quotes');
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};
export default NewQuote;
