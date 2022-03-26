import './Content.css';
import React from 'react';
import MathJax from 'react-mathjax';

function BlockFormula(props) {
  return (
    <MathJax.Provider>
      <MathJax.Node formula={props.formula}/>
    </MathJax.Provider>
  )
}

function InlineFormula(props) {
  return (
    <MathJax.Provider>
      <MathJax.Node inline formula={props.formula}/>
    </MathJax.Provider>
  )
}

export { BlockFormula, InlineFormula };
