import './Content.css';
import React from 'react';
import { BlockFormula, InlineFormula } from './Formula'
/* Images */
import basic_moment from './images/moment.png'
import moment_signs from './images/moment_signs.png'
import moment_offcenter from './images/moment_offcenter.png'
import moment_matrix from './images/matrix.png'
import matrix_shaded from './images/matrix_shaded.png'
import matrix_example from './images/matrix_example.png'

class Moment extends React.Component {
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
          &emsp;&emsp;A moment (sometimes called torque) is the measure of a force's ability to rotate a body about an 
          axis, which is neither intersects nor is parallel to the force, and has units of <InlineFormula formula='[force \cdot distance]'/>,
          which is usually <InlineFormula formula='[N \cdot m]'/> or <InlineFormula formula='[lbf \cdot ft]'/>.
          <div className='diagram-wrapper'><img className='diagram' src={basic_moment} alt='Moment' /></div>
          &emsp;&emsp;Similar to a force, a moment is represented by direction and a magnitude, which can be found one of two 
          ways. With the first approach, the direction is found using the 
          <a className='content-link' href="https://en.wikipedia.org/wiki/Right-hand_rule"> right-hand rule</a>, where counter 
          clockwise (CCW) is "out of the page" and clockwise (CW) is "into the page". Commonly, a CCW 
          moment is denoted as positive (+), while a CW moment is denoted as negative (-), but alternate conventions 
          do exist. The diagram below shows the common convent, where <InlineFormula formula='F_1'/> results in a positive 
          (CCW) moment, while <InlineFormula formula='F_2'/> results in a negative (CW) moment.
          <div className='diagram-wrapper'><img className='diagram' src={moment_signs} alt='Moment Signs' /></div>
          The magnitude of the moment is then found by multiplying the magnitude of the force by the perpendicular distance 
          from the force to the point where the moment acts. In the above diagram, this would be:
          <BlockFormula formula='M_1 = F_1 \cdot d_1 \quad\quad\quad M_2 = F_2 \cdot d_2'/>
          More complex cases can arise though, such as when the line of action of the force needs to be extended in order to 
          find the perpendicular distance from the point where the moment acts:
          <div className='diagram-wrapper'><img className='diagram' src={moment_offcenter} alt='Offcenter Moment' /></div>
          <BlockFormula formula='M = F \cdot d'/>
          &emsp;&emsp;The second approach uses vector notation, where the direction and magnitude(s) are found by calculating 
          the <a className='content-link' href="https://en.wikipedia.org/wiki/Cross_product">cross product</a> of the radius 
          vector, <InlineFormula formula='\vec{r}'/>, and the force vector, <InlineFormula formula='\vec{F}'/>: 
          <BlockFormula formula='\vec{M} = \vec{r} \times \vec{F}'/>
          Since the force and radius vectors are in (at most) 3 dimensions, there is a convenient shortcut that can be used 
          to calculate the moment. If we have a force vector <InlineFormula formula='\vec{F} = (F_x, F_y, F_z)'/> and a radius 
          vector <InlineFormula formula='\vec{r} = (r_x, r_y, r_z)'/> from the point we are finding the moment about, we can 
          organize write the vectors in the following matrix:
          <div className='diagram-wrapper'><img className='diagram matrix' src={moment_matrix} alt='Moment Matrix' /></div>
          Here, the <InlineFormula formula='i'/>, <InlineFormula formula='j'/>, and <InlineFormula formula='k'/> in the top 
          row will help identify the <InlineFormula formula='x'/>, <InlineFormula formula='y'/>, and 
          <InlineFormula formula='z'/> components of the moment, respectively, and we added the <InlineFormula formula='i'/> and 
          <InlineFormula formula='j'/> columns at the end to help visualize the operations that will be done.  We start by 
          drawing diagonal lines from each top row down through the bottom row, multiplying the components on each line. We then 
          subtract the products of the backwards diagonals from the products of the forwards diagonals based on the 
          <InlineFormula formula='i'/>, <InlineFormula formula='j'/>, or <InlineFormula formula='k'/> coefficient attached to 
          those products. This looks like:
          <div className='diagram-wrapper'><img className='diagram matrix' src={matrix_shaded} alt='Moment Matrix with Diagonals' /></div>
          which results in the following equation:
          <BlockFormula formula='\vec{M} = (i \cdot r_y \cdot F_z) + (j \cdot r_z \cdot F_x) + (k \cdot r_x \cdot F_y) - (k \cdot r_y \cdot F_x) - (i \cdot r_z \cdot F_y) - (j \cdot r_x \cdot F_z)'/>
          which can be simplified to:
          <BlockFormula formula='\vec{M} =  (r_y F_z - r_z F_y)i + (r_z F_x - r_x F_z)j + (r_x F_y - r_y F_x)k'/>
          For example, if we have a force vector <InlineFormula formula='\vec{F} = (7, -4, 0) [N]'/>, and a radius 
          vector <InlineFormula formula='\vec{r} = (3, 5, 0) [m]'/>, we can calculate the moment with:
          <div className='diagram-wrapper'><img className='diagram matrix' src={matrix_example} alt='Moment Matrix Example' /></div>
          <BlockFormula formula='\vec{M} = (i \cdot 5 \cdot 0) + (j \cdot 0 \cdot 7) + (k \cdot 3 \cdot -4) - (k \cdot 5 \cdot 7) - (i \cdot 0 \cdot -4) - (j \cdot 3 \cdot 0)'/>
          <BlockFormula formula=' = 0i + 0j - 47k \mkern406mu'/>
          <BlockFormula formula=' = (0, 0, -47) [N \cdot m] \mkern374mu'/>
          So the moment has a magnitude of <InlineFormula formula='-47 [N \cdot m]'/> in the z direction. You can see that 
          when the force and radius are in only 2 dimensions, the x and y components of the moment are cancelled out, and 
          there is only a z component, which corresponds to the magnitude of the moment. When the force and radius have 
          components in all 3 dimensions, the moment will have components in each of the x, y, and z directions. In this 
          case, the magnitude of the moment can be found using the Pythagrean Theorem:
          <BlockFormula formula='\lvert M \rvert = \sqrt{M_x^2 + M_y^2 + M_z^2}'/>
        </div>
      </div>
    )
  }
}

export default Moment;
