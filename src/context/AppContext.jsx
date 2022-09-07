import { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

export function AppContextProvider(props) {
  const [animation, setAnimation] = useState('');

  useEffect(() => {
  }, [animation])
  

  function createAnimation(animationName){
    setAnimation(animationName);
  }

  function resetAnimation(){
    setAnimation('');
  }

  return <AppContext.Provider value={{animation,createAnimation, resetAnimation}}>{props.children}</AppContext.Provider>;
}

