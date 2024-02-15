import { useEffect, useState } from 'react'
import './Quote.css'

const API_KEY = import.meta.env.VITE_API_KEY

export default function Quote() {
  const [quote, setQuote] = useState(null)
  const [error, setError] = useState(false)

  const getQuote = async (category = '') => {
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`
    const options = {
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY
      }
    }

    try {
      const response = await fetch(url, options)
      const data = await response.json()
      setQuote(data[0])
    } catch (e) {
      console.error(e.cause)
      setError(e)
    }
  }

  useEffect(() => {
    getQuote()
  }, [])

  if (error) return <div>Error: {error.message}</div>
  if (!quote) return <div>Loading...</div>

  const changeQuote = (category = '') => {
    setQuote(getQuote())
  }

  return (
    <>
      <div id='text'>{quote.quote}</div>
      <p id="author">{quote.author}</p>
      <button id="new-quote" onClick={changeQuote}>New Quote</button>
    </>
  )
}
