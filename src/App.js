import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Input from "./Component/Input/Input";
import TextTitle from "./Component/Title/TextTitle";

const App = () => (
  <Fragment>
    <TextTitle title={"Try Me"} />
    <Input />
  </Fragment>
);

export default App;
