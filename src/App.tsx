import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

import { Layout } from './Layout/Layout';
import { HelloWorld } from './components/HelloWorld';
import './App.css';

const App = () =>  {
  const [isShowText, setIsShowText] = useState(false);
  const [counter, setCounter] = useState(1);
  
  return (
    <div className="App">
      {/* <header className="App-header">
      </header> */}
      <Layout>
        <HelloWorld text={'Hello world'} counter={counter} isShowText={isShowText} /> 
        <Button
          onClick={() => setIsShowText(prevShowText => !prevShowText )} 
          variant='contained'
          color='primary'
        >
          Show text.
        </Button>
        <Button 
          onClick={() => setCounter((prevCounter) => prevCounter + 1)} 
          variant='outlined'
          color='secondary'
        >
          Add counter
        </Button>
      </Layout>

    </div>
  );
}

export default App;
