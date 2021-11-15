import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function NewEntryForm() {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          width={12}
          label="Description"
          placeholder="New shinny thing"
        />
        <Form.Input
          icon="dollar"
          width={4}
          label="Value"
          icon="dollar"
          iconPosition="left"
        />
      </Form.Group>
      <ButtonSaveOrCancel></ButtonSaveOrCancel>
    </Form>
  );
}

export default NewEntryForm;
