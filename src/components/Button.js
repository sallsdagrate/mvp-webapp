import React, { Component } from "react";
import styled from "@emotion/styled";
import { font, primaryColors, shape } from "styles/styles";
import { button } from "../styles/theme"
import { Link } from "react-router-dom";

const Wrapper = styled.button`
  ${font}
  ${shape}
  text-decoration: none;
`;

class Button extends Component {
  render() {
    const text = this.props.text ? this.props.text : 'Pass a "text" prop to the Button!'
    const onClick = this.props.onClick ? this.props.onClick : () => {alert('Pass an "onClick" prop to the button!')}
    if (this.props.to) {
      return (
        <div css={button}>
        <Link to={this.props.to} >
          {text}
        </Link>
</div>
      )
    }
    return (
      // <button css={}>

      <button css={button} onClick={onClick}>
        {text}
      </button>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('STATE IN BTN:', state)
  return {
    state,
    app: state.app,
    theme: state.theme
  }
}

export default Button 
// = connect(mapStateToProps)(Button)