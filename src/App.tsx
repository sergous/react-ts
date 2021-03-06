import React, { Component } from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import { STORE_ROOT } from './constants/stores';
import { inject, observer } from 'mobx-react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button>Learn React</Button>
                    </a>
                </header>
            </div>
        );
    }
}

export default inject(STORE_ROOT)(observer(App));
