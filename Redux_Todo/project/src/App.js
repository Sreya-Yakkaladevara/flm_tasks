import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { ADD, SUB } from './Action';

function App() {
  const dispatch = useDispatch();
  const counter=useSelector((store)=>store.count)
  
  const AddFunction = ()=>{
   return  dispatch({type:ADD,payload:1})
  }
  const SubFunction = ()=>{
    return dispatch({type:SUB,payload:1})
  }
  return (
    <div className="App">
      <h1>Count:{counter}</h1>
       <button onClick={AddFunction}>+</button>
       <button onClick={SubFunction}>-</button>
    </div>
  );
}

export default App;
