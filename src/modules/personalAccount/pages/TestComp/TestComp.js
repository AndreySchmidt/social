
import React, {useState, useCallback} from 'react'

const TestComp = () => {


  console.log('reder')
  const [count, setCount] = useState(0)
  const hClick = useCallback(() => {setCount(count => count+1)}, [])

  return (
    <div>
    {count}
      <input /><button onClick={hClick}>Go</button>
    </div>
  )
}

export default TestComp
