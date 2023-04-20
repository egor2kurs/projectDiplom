import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserPlace from './place/UserPlace';
import WorkPlace from './place/WorkPlace';


export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

<Context.Provider value={{
    user: new UserPlace(),
    works: new WorkPlace()

}}>

<App />
</Context.Provider>
   
  </React.StrictMode>
);