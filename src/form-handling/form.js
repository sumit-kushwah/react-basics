import React, {Component} from "react";

class Form extends  Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            comments: '',
            countries: ['Country list', 'India', 'China', 'Japan'],
            gender: '',
            isAdmin: false
        }
    }

    getUserName(event) {
        this.setState({username: event.target.value})
    }

    getComments(event) {
        this.setState({comments: event.target.value});
    }

    getCountry(event) {
        const index = event.target.value;
        this.setState({country: this.state.countries[index]});
    }

    getFormData() {
        console.log(this.state)
    }

    getGender(event) {
        this.setState({
            gender: event.target.value ? 'Female': 'Male'
        })
    }

    checkIfActive() {
        this.setState({
            isAdmin: !this.state.isAdmin
        })
    }

    render() {
        return <div className={'container'}>
            <h1>User Form</h1>
            <div>
                <label>UserName</label>
                <input
                    type={'text'}
                    className={'form-control w-50'}
                    value={this.state.username}
                    onChange={(e) => this.setState({username: e.target.value})}
                />

            </div>

            <br/>
            <div>
                <label>Comments</label>
                <textarea
                    className={'form-control w-50'}
                    value={this.state.comments}
                    onChange={(e) => this.setState({comments: e.target.value})}
                ></textarea>
            </div>
            <br/>
            <div>
                <label>Country</label>
                <select className={'form-select w-50'}
                        value={this.state.value}
                        onChange={(e) => this.setState({country: this.state[e.target.value]})}
                >
                    {
                        this.state.countries.map((country, index) => (
                            <option key={index} value={index}>{country}</option>
                        ))
                    }
                </select>
            </div>
            <br/>
            <div>
                <label>Gender</label> &nbsp;
                <input
                    type={'radio'}
                    className={'form-check-input'}
                    name={'gender'}
                    value={1}
                    onChange={(e) => this.setState({gender: e.target.value})}
                /> &nbsp; Female &nbsp;

                <input
                    type={'radio'}
                    className={'form-check-input'}
                    name={'gender'}
                    value={0}
                    onChange={(e) => this.setState({gender: e.target.value})}
                /> &nbsp; Male
            </div>
            <br/>
            <div>
                <label>Admin</label> &nbsp; &nbsp;
                <input type={'checkbox'}
                       className={'form-check-input'}
                       value={this.state.isAdmin}
                       onChange={() => this.setState({isAdmin: !this.state.isAdmin})}
                />
            </div>
            <br/>
            <div>
                <button
                    className={'btn btn-primary'}
                    onClick={() => this.getFormData()}
                >Submit</button>
            </div>
        </div>
    }
}

export default Form;
