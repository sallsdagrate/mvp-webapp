/** @jsx jsx */
import React from "react"
// import "./Loading.css"
import styled from "@emotion/styled";
import { jsx, css } from "@emotion/core"
import { font, primaryColors, shape } from "styles/styles";
import * as rs from "react-spinners"

const container = css`
    ${primaryColors}
    border-radius: 30px;
    padding: 5px;
    --dim: 40px;
    width: var(--dim);
    height: var(--dim);
    margin-top: 10px;
    margin: auto;
    display: flex;
    justify-content: center;
    background-color: var(--color2);
    align-items: center;
    div {
        width: 80%;
        height: 80%;
    }
`

const loading = css`
    width: 30px;
    height: 30px;
    background-color: black;
    border-radius: 100vw;
    -webkit-animation:spin 2s linear infinite;
    -moz-animation:spin 2s linear infinite;
    animation:spin 2s linear infinite;
    margin: auto;
`

const segment = css`
    height: 10px;
    width: 10px;
    background-color: green;
    ${primaryColors}
    background-color: var(--color2);
`

const inner = css`
    width: 10px;
    height: 10px;
    border-radius: 5px;
    transform: translateX(5px) translateY(-5px);
    background-color: green;
    ${primaryColors}
    background-color: var(--color2);
`

const Loading = (props) => {
    return (
        // <Wrapper>
        <div css={container}>
            {<rs.RingLoader css={{}} size={30} sizeUnit={'px'} />}
            {/* <div css={loading} >
                <div css={segment}></div>
                <div css={inner}></div>
            </div> */}
        </div>
     )
}
export default Loading
// import styled from "@emotion/styled";
// import { font, primaryColors, shape } from "config/styles";


// // export default Loading
// export default function Loading() {
//   return <Wrapper onClick={onClick}>{text}
//   yoo there
//   </Wrapper>;
// }