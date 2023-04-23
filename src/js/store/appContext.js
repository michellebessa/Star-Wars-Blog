import React, { useState, useEffect } from "react";
import getState from "./flux.js";

export const Context = React.createContext(null);

// This function injects the global store to any view/component where you want to use it, I will inject the context on layout.js
const injectContext = (PassedComponent) => {
  const StoreWrapper = (props) => {
    //this will be passed as the context value
    const [state, setState] = useState(
      getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: (updatedStore) =>
          setState({
            store: Object.assign(state.store, updatedStore),
            actions: { ...state.actions },
          }),
      })
    );

    useEffect(() => {
      
      // This function is the equivalent to "window.onLoad", it only runs once on the entire application lifetime
     
      state.actions.getMessage(); // <---- calling this function from the flux.js actions
      state.actions.getPeople();
      state.actions.getPlanets();
      state.actions.getStarships();
    }, []);

    // The initial value for the context is not null anymore, but the current state of this component,
    // the context will now have a getStore, getActions and setStore functions available, because they were declared
    // on the state of this component
    return (
      <Context.Provider value={state}>
        <PassedComponent {...props} />
      </Context.Provider>
    );
  };
  return StoreWrapper;
};

export default injectContext;
