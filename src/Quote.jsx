import { useEffect, useState } from 'react'
import './Quote.css'

const API_KEY = import.meta.env.VITE_API_KEY

export default function Quote({ colors }) {
  const getColor = (arr) => arr[Math.floor(Math.random() * arr.length)]

  const [quote, setQuote] = useState(null)
  const [error, setError] = useState(false)
  const [color, setColor] = useState(getColor(colors))

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
    document.body.style.backgroundColor = color
    getQuote('computers')
  }, [])

  const changeColor = () => {
    const newColor = getColor(colors)
    setColor(newColor)
    document.body.style.backgroundColor = newColor;
  }

  const changeQuote = (category = '') => {
    setQuote(getQuote(category))
  }

  const bgStyles = { 'backgroundColor': color }
  const textStyles = { 'color': color }

  if (error) return <div>Error: {error.message}</div>
  if (!quote) return <div>Loading...</div>

  return (
    <>
      <div style={textStyles} id='text'>{quote.quote}</div>
      <p style={textStyles} id="author">{quote.author}</p>
      <p style={textStyles} id="category">{quote.category}</p>
      <button style={bgStyles} id="new-quote" onClick={() => {
        changeColor()
        changeQuote()
      }}>New Quote</button>
    </>
  )
}
