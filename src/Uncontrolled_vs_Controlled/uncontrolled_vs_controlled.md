# Controlled vs uncontrolled components example

## Controlled Components

- The value of the input is controlled by React state.
- The value can be accessed using state.
- The value can be updated using a callback function that updates state.
- The value can be easily reset by resetting the state.
- Can be more verbose, but provides more control and flexibility.

## Uncontrolled Components

- The value of the input is not controlled by React state.
- The value can be accessed using a reference to the input DOM element.
- The value can be updated by the user directly.
- The value can be difficult to reset, especially if the input has complex logic.
- Can be less verbose, but provides less control and flexibility.
- Overall, controlled components provide more control and flexibility over the input's value and behavior, but they can be more verbose. Uncontrolled components are simpler and require less code, but they provide less control over the input's value and behavior.
