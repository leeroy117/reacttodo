import React, { useReducer } from "react";

function useLocalStorage(itemName, initialValue){
  const [state, dispatch] = useReducer(reducer, initialState(initialValue));

  const { syncronizedItem, item, loading, error} = state;
  // const [loading, setLoading] = React.useState(true);
  // const [error, setError]  = React.useState(false);
  // const [item, setItem] = React.useState(initialValue);
  // const [syncronizedItem, setSyncronizedItem ] = React.useState(true);

  // creatorTypes

    const onError = (error) => {
      dispatch({
        type: actionTypes.error,
        payload: error
      })
    }

    const onLoading = () => {
      dispatch({
        type: actionTypes.loading
      })
    }

    const onSave = (item) =>{
      dispatch({
        type: actionTypes.save,
        payload: item
      })
    }

    const onSyncronize = () =>{
      dispatch({
        type: actionTypes.syncronize
      })
    }

    const onSyncronized = () => {
      dispatch({
        type: actionTypes.syncronized
      })
    }

    React.useEffect(()=>{
      setTimeout(() => {
        try {
          let localStorageItem = JSON.parse(localStorage.getItem(itemName));
          let parsedItem = [];
        
          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
          }else{
            parsedItem = localStorageItem;
          }
    
          // setItem(parsedItem);
          onSave(parsedItem);
          // setSyncronizedItem(true);
          onSyncronized();
        } catch (error) {
            // setError(error);
          onError(error);
        } finally {
            // setLoading(false);
          // onLoading();
          onSyncronized();
        }
        
      }, 2000);
    },[syncronizedItem]);

    const saveItem = (initialValue) =>{
      try {
        localStorage.setItem(itemName,JSON.stringify(initialValue));
        // setItem(initialValue);
        onSave(initialValue)
      } catch (error) {
        // setError(error);
        onError(error);
      }
    }

    const syncronizeItem = () => {
      console.log('syncronize');
      // setLoading(true);
      // setSyncronizedItem(false);
      onSyncronize();
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
      syncronizeItem
    };
}

const initialState = (initialValue) => ({
  loading: true,
  error:  false,
  item :initialValue,
  syncronizedItem: true
})

const actionTypes = {
  save: 'SAVE_ITEM',
  syncronize: 'LOAD_ITEM',
  error: 'SYNCHRONIZE_ITEM',
  loading: 'LOADING',
  syncronized:'SYNCHRONIZED_ITEM'
}

const objectReducer = (state, payload) =>({
  [actionTypes.save]:{
    ...state,
    item: payload
  },
  [actionTypes.syncronize]:{
    ...state,
    loading: true,
    error: false, 
    syncronizedItem: false
  },
  [actionTypes.error]:{
    ...state,
    loading: false,
    error: true
  },
  [actionTypes.loading]:{
    ...state,
    loading: true
  },
  [actionTypes.syncronized]:{
   ...state,
    loading: false,
    error: false,
    syncronizedItem: true
  }
});

const reducer = (state, action) => {
  return objectReducer(state, action.payload)[action.type];
}

export { useLocalStorage };