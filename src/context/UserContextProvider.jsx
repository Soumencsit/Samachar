import React, { useState } from 'react'; // Import useState
import userContext from './UserContext'; 

function UserContextProvider({ children }) { 
  const [user, setUser] = useState(null);

  return (
    <userContext.Provider value={{ user, setUser }}> 
      {children}
    </userContext.Provider>
  );
}

export default UserContextProvider;
