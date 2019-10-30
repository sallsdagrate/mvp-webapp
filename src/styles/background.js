import { css } from "@emotion/core";
import { hexToRgb } from "../utils"

// const color2_grad = hexToRgb(   )

export const bkgd = css`
    background: var(--color1);
    
    background: linear-gradient(var(--color1), var(--color2));
    width: 100%;
    min-height: 92vh;
    height: 100%;
    position: absolute;

    // position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    z-index: 0;
    overflow: hidden;
`

export const squares = css`
    
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    // z-index: -1;

    > li{
        position: absolute;
        display: block;
        list-style: none;
        width: 20px;
        height: 20px;
        background: rgba(255, 255, 255, 0.2);
        animation: animate 25s linear infinite;
        bottom: -150px;
        background-color: var(--color2);
    }

    > li:nth-child(1){
        left: 25%;
        width: 80px;
        height: 80px;
        animation-delay: 0s;
    }


    > li:nth-child(2){
        left: 10%;
        width: 20px;
        height: 20px;
        animation-delay: 2s;
        animation-duration: 12s;
    }

    > li:nth-child(3){
        left: 70%;
        width: 20px;
        height: 20px;
        animation-delay: 4s;
    }

    > li:nth-child(4){
        left: 40%;
        width: 60px;
        height: 60px;
        animation-delay: 0s;
        animation-duration: 18s;
    }

    > li:nth-child(5){
        left: 65%;
        width: 20px;
        height: 20px;
        animation-delay: 0s;
    }

    > li:nth-child(6){
        left: 75%;
        width: 110px;
        height: 110px;
        animation-delay: 3s;
    }

    > li:nth-child(7){
        left: 35%;
        width: 150px;
        height: 150px;
        animation-delay: 7s;
    }

    > li:nth-child(8){
        left: 50%;
        width: 25px;
        height: 25px;
        animation-delay: 15s;
        animation-duration: 45s;
    }

    > li:nth-child(9){
        left: 20%;
        width: 15px;
        height: 15px;
        animation-delay: 2s;
        animation-duration: 35s;
    }

    > li:nth-child(10){
        left: 85%;
        width: 150px;
        height: 150px;
        animation-delay: 0s;
        animation-duration: 11s;
    }



    @keyframes animate {

        0%{
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
        }

        100%{
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
        }

    }
`