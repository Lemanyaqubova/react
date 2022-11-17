import React from 'react'

function Input({ inputs, setInputs, setIsResult }) {
    const chanceInput = (e) => {
        const { name, value } = e.target;
        console.log(e.target.value);
        // setInputValue();
    };
    const clickButton = () => setIsResult(false);

    return ( <
        >
        <
        label > Name < /label> <
        input id = "name"
        defaultValue = { input }
        name = "name"
        onChange = { chanceInput }
        /> <
        label > Password < /label> <
        input defaultValue = { input }
        name = "password"
        onChange = { chanceInput }

        /> <
        button > add < /button> <
        />
    );
}

export default Input;