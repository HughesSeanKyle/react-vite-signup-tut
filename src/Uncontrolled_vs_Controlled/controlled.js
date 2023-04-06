import React, { useState } from 'react';

function ControlledInput() {
	const [value, setValue] = useState('');

	function handleChange(event) {
		setValue(event.target.value);
	}

	return <input type="text" value={value} onChange={handleChange} />;
}

export default ControlledInput;

/*
    In this example, we are using a controlled component. The input field's value is controlled by the value state, and the handleChange function updates this state on each change event. This means that the state is always up-to-date with the input field's value, and we can access the value using value state.
*/
