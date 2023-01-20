import React from "react";

function useLocalStorage(itemName, initialValue){
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [item, setItem] = React.useState(initialValue);

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
    
          setItem(parsedItem);
          
        } catch (error) {
            setError(error);
        }finally {
            setLoading(false);
        }
        
      }, 2000);
    },[]);

    let saveItem = (initialValue) =>{
      try {
        localStorage.setItem(itemName,JSON.stringify(initialValue));
        setItem(initialValue);
      } catch (error) {
        setError(error);
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error
    };
}

export { useLocalStorage };