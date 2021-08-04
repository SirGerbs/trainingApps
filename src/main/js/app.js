'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

class TestForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        investment: 0, 
        years: 0, 
        interest: 0,        
        isSubmitted: false
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
      this.setState({isSubmitted: true});
      event.preventDefault();
    }

    render() {
      return (
        <>
            <h1>ROI Calculator</h1>
            <form onSubmit={this.handleSubmit}>
            <label>
                Initial Investment:
                <input type="number" name="investment" onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
                Years:
                <input type="number" name="years" onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
                Expected interest per year:
                <input type="number" name="interest" onChange={this.handleInputChange} />
            </label>
            <br />
            <input type="submit" value="Submit" />
            </form>
            {this.state.isSubmitted && <Results investment={this.state.investment} years={this.state.years} interest={this.state.interest}/>}
        </>
      );
    }
  }

class Results extends React.Component {
  render() {
    const years = +this.props.years; //convert string to number
    var investment = +this.props.investment;
    const interest = 100 + +this.props.interest;
    var yearsArray = new Array(years + 1);
    yearsArray[0] = {
      "year":0,
      "investment":investment.toFixed(2)
    }
    for (var i = 1; i < yearsArray.length; i++){
      const year = i;
      investment = (investment * interest) / 100; 
      yearsArray[i] = {
        "year":i,
        "investment":investment.toFixed(2)
      }
    }

    console.log(yearsArray);

    const listItems = yearsArray.map(year =>
      <Year key={year.year} year={year.year} investment={year.investment} />
      //<li key={year.year.toString()}>{year.year} {year.investment}</li>
      //<li>test</li>
    );
  
		return (
      <>
      <h1>Investment Details</h1>
      <p>Your initial investment of ${this.props.investment} will grow to ${yearsArray.slice(-1)[0].investment} after {this.props.years} years with a {this.props.interest}% interest rate year over year</p>
			<table>
        <tbody>
          <tr>
            <th>Year</th>
            <th>Investment</th>
          </tr>
        </tbody>
        {listItems}
      </table>
      </>
		);
	}
}

class Year extends React.Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>{this.props.year}</td>
          <td>${this.props.investment}</td>
        </tr>
      </tbody>
    )
  }
}

ReactDOM.render(
<TestForm />,
document.getElementById('react')
);