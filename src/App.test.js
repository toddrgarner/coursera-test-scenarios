// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';



const rangeInput = screen.getByLabelText(/Score:/);
fireEvent.change(rangeInput, { target: { value: score }});

const textArea = screengetByLabelText(/Comments:/);
fireEvent.change(textArea, { target: { value: comment }});

const submitButton = screen.getByRole("button");
fireEvent.click(submitButton);
