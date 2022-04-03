import './Content.css';
import React from 'react';
import { BlockFormula, InlineFormula } from './Formula'

class StaticsOverview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 0
    }
  }
  componentDidMount() {
    this.props.setHeight(this.contentDiv.clientHeight);
    this.setState({
      height: this.contentDiv.clientHeight
    });
  }
  componentDidUpdate() {
    if (this.contentDiv.clientHeight != this.state.height) {
      this.props.setHeight(this.contentDiv.clientHeight);
      this.setState({
        height: this.contentDiv.clientHeight
      });
    }
  }
  render() {
    return (
      <div className='content' ref={ (contentDiv) => { this.contentDiv = contentDiv } }>
        <div className='content-text'>
          &emsp;&emsp;Static Mechanics, or Statics, is a branch of mechanics that deals with the analysis of 
          rigid bodies that have no acceleration, and are therefore in static equilibrium. Applying this acceleration 
          of <InlineFormula formula='\textbf{a}=0'/> to Newton's Second Law of Motion, we can see:
          <BlockFormula formula='\textbf{F} = m \cdot \textbf{a} = m \cdot 0 = 0'/>
          Where <InlineFormula formula='\textbf{F}'/> is the force vector (or the total force acting on the
          system), <InlineFormula formula='m'/> is the mass of the system, and <InlineFormula formula='\textbf{a}'/> is 
          the acceleration in the system (which is <InlineFormula formula='0'/> here).
          <br /><br />
          &emsp;&emsp;An acceleration of <InlineFormula formula='\alpha=0'/> can also be applied to the summation of 
          moments acting on the system, for which we get:
          <BlockFormula formula='\textbf{M} = I \cdot \alpha = I \cdot 0 = 0'/>
          Where <InlineFormula formula='\textbf{M}'/> is the summation of all moments acting on the system, 
          <InlineFormula formula='I'/> is the mass moment of inertia, and <InlineFormula formula='\alpha'/> is 
          the angular acceleration of the system.
          <br /><br />
          &emsp;&emsp;We can combine those two concepts to solve for loads and torques applied to the system, as well as 
          other useful information.
        </div>
      </div>
    )
  }
}

export default StaticsOverview;
