import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Pages from "./page";
import useAccountStore from "./store/users";

function App() {
  const getUser = useAccountStore((state) => state.setAccount);
  useEffect(() => {
    const getUsers = async () => {
      await getUser();
    };
    getUsers();
  }, []);


  return (
    <BrowserRouter>
      <Pages />
    </BrowserRouter>
  );
}

export default App;
