import { useEffect, useState } from 'react'
import './Quote.css'

const API_KEY = import.meta.env.VITE_API_KEY;

const getQuote = async function (category = '') {
  const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`
  const options = {
    method: 'GET',
    headers: {
      'X-Api-Key': API_KEY
    }
  }

  try {
    const response = await fetch(url, options)
    const result = await response.json()
    console.log('Quote gotten successfully')
    return result
  } catch (error) {
    console.log('Quote not returned from API')
    console.error(error.cause)
  }
}

const loadQuote = () => {
  const quote = getQuote().then((data) => {
    return data
  })
  return quote
}

export default function Quote() {
  const [quote, setQuote] = useState(loadQuote)

  // useEffect(() => {

  // }, [quote])

  const changeQuote = (category = '') => {
    setQuote(prevQuote => {
      return loadQuote()
    })
  }

  return (
    <>
      <div id='text'>hello</div>
      <p id="author">world</p>
      <button id="new-quote"></button>
    </>
  )
}
