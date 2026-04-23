import { useState } from "react"
import useQuote from "../hooks/useQuote"
import QuoteCard from "../components/QuoteCard";


export default function DashboardPage() {
    const quote = useQuote();


    return (
        <div>
            <h1>Dashboard page</h1>
            <QuoteCard quote={quote} />
        </div>
    )
}