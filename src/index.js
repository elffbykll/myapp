import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const style = {backgroundColor: 'red', color: 'white'};
    return(
    <div>
        <label htmlFor="name" className="label">enter e-mail</label>
        <input id="name" type="text"/>
        <button style={style}>
            Submit
        </button>
    </div>
    )
}

ReactDOM.render(
     <App />, document.querySelector('#root')
)