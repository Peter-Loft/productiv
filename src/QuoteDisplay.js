import "./QuoteDisplay.css";

/** QuoteDisplay component that shows a quote
 * and a button that will retrieve a new quote
 * 
 * Props: 
 * - getQuote: fn() that retrieves a random quote from API
 * - quote: state of current quote
 * 
 * State: none
 */
function QuoteDisplay({ getQuote, quote }) {
  return (
    quote ? (
      <div className="QuoteDisplay">
        <p><i>{quote.text} - {quote.author}</i></p>
        <button
          className="btn-sm QuoteDisplay-button"
          onClick={getQuote}>Nü quøte
        </button>
      </div>
    ) : (
      <div className="QuoteDisplay">
        <button
          className="btn-sm QuoteDisplay-button"
          onClick={getQuote}>Click here for an inspirational quøte!
        </button>
      </div>
    )
  );
};

export default QuoteDisplay;