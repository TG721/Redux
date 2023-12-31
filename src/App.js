
import './App.css';
import Row from './components/row/Row';
import store from '../src/redux/store'
import { rowAdded, rowRemoved } from './redux/actions';
import { ROW_ADDED, ROW_REMOVED } from './redux/actionTypes';
import { useSelector } from 'react-redux';  // Import useSelector from react-redux



const handleAddClick = () => {
  // Get the current state
  const currentState = store.getState();

  store.dispatch(
    rowAdded(`Item${currentState.rows.length+1}`)
  );
};

const handleRemoveClick = () => {
  // Get the current state
  const currentState = store.getState();

  if (currentState.rows.length > 0) {
    // Dispatch a ROW_REMOVED action with the ID of the last item
    store.dispatch(rowRemoved(currentState.rows.length));
  }
};

function App() {
  const rows = useSelector((state) => state.rows);

  return (
    <div className="App">
      <header>
      </header>
      {rows.map((row) => (
        <Row key={row.id} className="row" text={row.text} />
      ))}      <button onClick={handleAddClick}>Add</button>
      <button onClick={handleRemoveClick}>Remove</button>  
    </div>
  );
}

export default App;
