import './Content.css';
import './Force.css';
import React from 'react';
import { BlockFormula, InlineFormula } from './Formula'
/* Images */
import basic_force from './images/force.png'
import comp_vectors from './images/comp_vectors.png'

class Force extends React.Component {
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
          &emsp;&emsp;Force is the action (either pushing or pulling) of one body on another, and is vector 
          characterized by its magnitude and direction.
          <div className='diagram-wrapper'><img className='diagram' src={basic_force} alt='Basic Force' /></div>
          &emsp;&emsp;Each force vector can be split into its component vectors, which are mutually perpendicular 
          force vectors that are parallel to the x-axis and y-axis.
          <div className='diagram-wrapper'><img className='diagram' src={comp_vectors} alt='Component Vectors' /></div>
          The direction of these component vectors is trivial, as they follow each axis of the coordinate system used, 
          and the magnitude of each vector can be found using the following formulas:
          <BlockFormula formula='F_x = F\cos(\theta) \quad\quad\quad F_y = F\sin(\theta)'/>
          Conversely, you can find the force <InlineFormula formula='F'/> and angle <InlineFormula formula='\theta'/> from 
          the component vectors:
          <BlockFormula formula='F = \sqrt{F_x^2 + F_y^2} \quad\quad\quad tan(\theta) = \frac{F_y}{F_x}'/>
          &emsp;&emsp;These concepts can be extended to the z-axis as well, and would have the following form, 
          where <InlineFormula formula='\theta_z'/> is the angle between the force vector and the z-axis:
          <BlockFormula formula='F_z = F\cos(\theta_z)'/>
        </div>
      </div>
    )
  }
}

export default Force;
