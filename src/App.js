import { useState} from 'react';

function App(){
  const [data, setdata] = useState(1);

  function handleClick(){
    setdata(data+1);
  }

  return(
    <>
    <h1>Counter Value is : {data}</h1>
    <button onClick={handleClick}>Click Me !!!</button>
    </>
  )
}

export default App;
