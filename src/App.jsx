import Quote from './Quote'
import { colors } from '../seeds'
import './App.css'

function App() {
  return (
    <div id="quote-box">
      {/* <Quote id='quote-box' /> */}
      <Quote colors={colors} />
    </div>
  )
}

export default App
