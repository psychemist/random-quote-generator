import './Quote.css'
import 'dotenv/config'
import { useEffect, useState } from 'react'

const getQuote = async function (category = '') {
  const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`
  const options = {
    method: 'GET',
    headers: {
      'X-Api-Key': process.env.API_KEY
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

const getInitialQuote = () => {
  const quote = getQuote().then((data) => {
    return data
  })
  return quote
}

export default function Quote() {
  const [quote, setQuote] = useState(getInitialQuote)
  console.log(quote)

  return (
    <>
      <div id='text'>{quote}</div>
      <p id="author"></p>
      <button id="new-quote"></button>
    </>
  )
}
