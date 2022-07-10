import React, { useEffect, useState } from 'react';

import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Sub } from './types';

interface AppState{
  subs: Array<Sub>
}

const INITIAL_STATE = [
  {
    nick: 'dapelu',
    subMonths: 3,
    avatar: 'https://i.pravatar.cc/150?u=dapelu',
    description: 'Dapelu hace de moderador a veces'
  },
  {
    nick: 'sergio_serrano',
    subMonths: 7,
    avatar: 'https://i.pravatar.cc/150?u=sergio_serrano'
  }
]

function App() {

    const[subs, setSubs] = useState<AppState["subs"]>([])

    useEffect(() => {
      setSubs(INITIAL_STATE)
    }, [])
    

  return (
    <div className="App">
      <h1>midu subs</h1>
      <List subs={subs}/>
      <Form onNewSub={setSubs}/>
    </div>
  );
}

export default App;
