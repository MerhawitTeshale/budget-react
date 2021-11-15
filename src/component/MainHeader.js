import React from "react";
import { Header } from "semantic-ui-react";
function MainHeader(props) {
  const { title } = props;
  const type = props.type;
  return <Header as={type}>{title}</Header>;
}

export default MainHeader;
