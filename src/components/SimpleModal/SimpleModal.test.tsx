import React from "react";
import { render } from "@testing-library/react";

import SimpleModal from "./SimpleModal";

describe("Simple Modal", () => {
  test("renders the Simple Modal component", () => {
    render(<SimpleModal title="First Modal" body={<div>Testing Div</div>} isOpen={true} onClose={()=>{}} />);
  });
});