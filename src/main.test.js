import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import App from "./App";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe("Fundation/Donation system", () => {
  it("renders and works according scenario", () => {
    act(() => {
      render(<App />, container);
    });

    console.log(container.innerHTML);

    const buttonElement = document.querySelector('a[href="/funds"]');
    expect(container.innerHTML.includes("Hotels")).toBe(false);

    act(() => {
      buttonElement.dispatchEvent(new MouseEvent("click", { bubbles: true }));
    });

    expect(container.innerHTML.includes("Hotels")).toBe(true);
  });
});
