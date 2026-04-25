// QuoteCard.js
export default function QuoteCard({ quote }) {
    // If the data hasn't arrived yet, quote is undefined/null
    if (!quote) return <h2>Loading quote...</h2>;

    return (
        <div>
            <h2> {quote.text} </h2>
            <p>- {quote.author}</p>
        </div>
    );
}