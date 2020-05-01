import React from "react";
import { HeaderRouting } from "../components/headerRouting/HeaderRouting";
import { useSelector } from "react-redux";
import { Header } from "./header/Header";

export const App = () => {
  const token = useSelector((state) => state.user.userToken);
  const routing = HeaderRouting(token);
  return (
    <>
      <Header token={token} />
      {routing}
    </>
  );
};
