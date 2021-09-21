import { render } from "@testing-library/react";
import ClientTable from "../ClientTable";

describe("ClientTable", () => {
  it("should render correctly", () => {
    const dom = render(<ClientTable />);

    expect(dom.asFragment()).toMatchSnapshot();
  });
});
