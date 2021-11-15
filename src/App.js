import { Container } from "semantic-ui-react";
import "./App.css";
import MainHeader from "./component/MainHeader";
import NewEntryForm from "./component/NewEntryForm";
import DisplayBalances from "./component/DisplayBalances";
import Entryline from "./component/Entryline";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" type="h1" />
      <DisplayBalances></DisplayBalances>
      <MainHeader title="History" type="h3" />
      <Entryline description="something" value="$10,000" isExpense></Entryline>
      <Entryline description="somethingelse" value="$100,000"></Entryline>
      <Entryline
        description="something else else"
        value="$17.00"
        isExpense
      ></Entryline>
      <MainHeader title="Add new transaction:" type="h3" />
      <NewEntryForm></NewEntryForm>
    </Container>
  );
}

export default App;
