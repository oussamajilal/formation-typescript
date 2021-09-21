import { render, RenderResult } from "@testing-library/react";
import ClientRow from "../ClientRow";

let dom: RenderResult;

beforeEach(() => {
  dom = render(
    <ClientRow
      id={1}
      firstName={"fake first name"}
      lastName={"fake last name"}
    />
  );
});

describe("ClientRow", () => {
  it("should render correctly", () => {
    expect(dom.asFragment()).toMatchSnapshot();
  });

  it("should increment the cell when I click on the inc button", () => {
    expect(dom.getByTestId("inc-cell")).toHaveTextContent("0");

    dom.getByTestId("inc-btn").click();

    expect(dom.getByTestId("inc-cell")).toHaveTextContent("1");

    dom.getByTestId("inc-btn").click();

    expect(dom.getByTestId("inc-cell")).toHaveTextContent("2");
  });

  it("should decrement the cell when I click on the inc button", () => {
    expect(dom.getByTestId("dec-cell")).toHaveTextContent("0");

    dom.getByTestId("dec-btn").click();

    expect(dom.getByTestId("dec-cell")).toHaveTextContent("1");

    dom.getByTestId("dec-btn").click();

    expect(dom.getByTestId("dec-cell")).toHaveTextContent("2");
  });
});
