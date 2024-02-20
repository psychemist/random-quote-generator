import { useEffect, useState } from 'react'
import './Quote.css'

const API_KEY = import.meta.env.VITE_API_KEY

export default function Quote({ categories, colors }) {
  const getColor = (arr) => arr[Math.floor(Math.random() * arr.length)]

  const [quote, setQuote] = useState(null)
  const [error, setError] = useState(false)
  const [color, setColor] = useState(getColor(colors))
  const [category, setCategory] = useState('inspirational')

  const getQuote = async (category = 'inspirational') => {
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
    getQuote()
  }, [])

  const changeQuote = (category = '') => {
    setQuote(getQuote(category))
  }

  const changeCategory = (e) => {
    setCategory(e.target.value)
  }

  const changeColor = () => {
    const newColor = getColor(colors)
    setColor(newColor)
    document.body.style.backgroundColor = newColor;
  }

  const bgStyles = { 'backgroundColor': color }
  const textStyles = { 'color': color }

  if (error) return <div style={textStyles}>Error: {error.message}</div>
  if (!quote) return <div style={textStyles}>Loading...</div>

  return (
    <>
      <div className="quote-select">
        <label style={textStyles} htmlFor="quote-category">Choose a category: </label>
        <select style={textStyles} className="form-select form-select-sm" name="category" id="quote-category" onChange={changeCategory}>
          {categories.map((category, idx) => {
            const cappedCategory =
              category.charAt(0).toUpperCase() + category.slice(1)
            return <option key={idx} value={category}>{cappedCategory}</option>
          })}
        </select>
      </div>

      <div className="quote-text">
        <span style={textStyles} id='text'><i className="bi bi-quote"></i>{quote.quote}</span>
        <p style={textStyles} id="author">{quote.author}</p>
      </div>

      <div className="quote-buttons">
        <button style={bgStyles} id="tweet-box">
          <a id="tweet-quote" title="Tweet this quote!" target="_blank"
            href={`https://twitter.com/intent/tweet?&text=${quote.quote} - ${quote.author}`}>
            <i className="bi bi-twitter-x"></i></a>
        </button>
        <button style={bgStyles} id="new-quote" onClick={() => {
          changeColor()
          changeQuote(category)
        }}>New Quote</button>
      </div>
    </>
  )
}
