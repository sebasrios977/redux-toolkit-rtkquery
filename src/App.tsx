import { useDispatch, useSelector } from 'react-redux'
import { RootState } from './store/store'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { decrement, increment, incrementBy } from './store/slices/counter/counterSlice'


function App() {

  const {counter} = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => { dispatch(increment()) } }>
          Increment {counter}
        </button>
        <button onClick={() => { dispatch(decrement()) } }>
          Decrement {counter}
        </button>
        <button onClick={() => { dispatch(incrementBy(2)) } }>
          Increment By 2 {counter}
        </button>
      </div>
    </>
  )
}

export default App
