import { useState } from 'react'
import reactLogo from './assets/react.svg'
import vitelogo from '/vite.svg'
import './App.css'
import {Button } from './components/ui/button'
function App() {
const [count, setCount] = useState(0)
return (
  <>
<Button>Lets build food app</Button>
</>
)
}
export default App