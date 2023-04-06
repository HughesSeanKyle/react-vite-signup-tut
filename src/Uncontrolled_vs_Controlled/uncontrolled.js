import React, { useRef } from 'react';

function UncontrolledInput() {
	const inputRef = useRef(null);

	function handleClick() {
		console.log('Input value:', inputRef.current.value);
	}

	return (
		<div>
			<input type="text" ref={inputRef} />
			<button onClick={handleClick}>Submit</button>
		</div>
	);
}

export default UncontrolledInput;

/*
    In this example, we are using an uncontrolled component. We are using a ref to access the input field's value, and we are not using any state to control its value. Instead, we are accessing its value directly in the handleClick function by using the current property of the inputRef. This means that we can access the input field's value without updating any state.
*/
