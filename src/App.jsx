import './style.css'
import './animation.css'
import './duckMove.css'
import { GiDuck } from "react-icons/gi";


function App() {



  return (
    <main className='container'>
    <div className='duck'>
      <GiDuck className='title-word title-word-1 '/>
    </div>
    <div className='duck two'>
      <GiDuck className='title-word title-word-1 '/>
    </div>
    <div className='duck three'>
      <GiDuck className='title-word title-word-1 '/>
    </div>
      <h1> 
        <span className='title-word title-word-1'>Super </span> 
        <span className='title-word title-word-2'>Happy </span>
        <span className='title-word title-word-3'>Birthday </span>
        <span className='title-word title-word-4'>!!! </span>
      </h1>
      <div className='duck four'>
      <GiDuck className='title-word title-word-1 '/>
    </div>

      <div className='duck one'>
        <GiDuck className='title-word title-word-1 '/>
    </div>
    <div className='duck five'>
      <GiDuck className='title-word title-word-1 '/>
    </div>
    </main>
  )
}

export default App
