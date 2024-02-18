import Quote from './Quote'
import { categories, colors } from '../seeds'
import './App.css'

function App() {
  return (
    <div id="quote-box">
      <Quote id="quote" categories={categories} colors={colors} />
    </div>
  )
}

export default App
