import React, { Component } from 'react';


class MyApp extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "Victor Marques",
            email: "victor.marques@stoom.com.br"
        }

        this.changeState = this.changeState.bind(this)
        this.resetState = this.resetState.bind(this)
        this.changeInput = this.changeInput.bind(this)
    }

    changeState() {
        this.setState({
            name: "Victor",
            email: "victorfmarques@outlook.com.br"
        })
    }

    resetState() {
        this.setState({
            name: "Victor Marques",
            email: "victor.marques@outlook.com.br"
        })
    }

    changeInput(event) {
        let target = event.target
        let index = target.name
        this.setState({
            [index]: target.value
        })
    }

    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Name:
                            <input 
                                type="text" 
                                name="name" 
                                value={this.state.name}
                                onChange={this.changeInput}
                                ></input>
                        </label>
                    </div>

                    <div>
                        <label>Email:
                            <input 
                                type="text"
                                name="email"
                                value={this.state.email}
                                onChange={this.changeInput}
                                ></input>
                        </label>
                    </div>


                </form>

                <button onClick={this.changeState}> Change State</button>
                <button onClick={this.resetState}> Reset State</button>
            </div >
        );
    }
}

export default MyApp;
