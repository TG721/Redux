import store from '../redux/store'
import { ROW_ADDED, ROW_REMOVED } from './actionTypes';

export function rowAdded(newText) {
    return {
      type: ROW_ADDED,
      payload: {
        text: newText,
      },
    };
  }
  
  export function rowRemoved(lastItemId) {
    return {
      type: ROW_REMOVED,
      payload: {
        id: lastItemId,
      },
    };
  }