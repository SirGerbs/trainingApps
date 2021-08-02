'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class TestForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          investment: '', 
          years: '', 
          interest: ''
        };
  
      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleInputChange(event) {
      const name = event.target.name;
      //console.log(name)
      //console.log(event.target.value)
      this.setState({[name]: event.target.value});
    }
  
    handleSubmit(event) {
      //alert('The following was submitted: ' + this.state.investment + ' ' + this.state.years + ' ' + this.state.interest);
      fetch('/api/investments', {
        method: 'POST',
        // We convert the React state to JSON and send it as the POST body
        body: JSON.stringify(this.state)
      }).then(function(response) {
        console.log(response)
        return response.json();
      });

      event.preventDefault();
    }

    render() {
      return (
        <>
            <h1>ROI Calculator</h1>
            <form onSubmit={this.handleSubmit}>
            <label>
                Initial Investment:
                <input type="text" name="investment" onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
                Years:
                <input type="text" name="years" onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
                Expected interest per year:
                <input type="text" name="interest" onChange={this.handleInputChange} />
            </label>
            <br />
            <input type="submit" value="Submit" />
            </form>
        </>
      );
    }
  }

ReactDOM.render(
<TestForm />,
document.getElementById('react')
);