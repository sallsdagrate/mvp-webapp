import { css } from "@emotion/core" 

const theme = {
}

export default theme

export const breakpoints = [576, 768, 992, 1200].map(
  bp => `@media (min-width: ${bp}px)`
)


export const core = css`
  a:link {text-decoration: none}
  a:link { color: var(--textColor); text-decoration: none; }
  a​:visited {  color: var(--textColor); text-decoration: none;}
  a​:hover {  color: var(--textColor); }
  a { color: var(--textColor);}
`

export const panel = css`
  font-family: var(--font1);
  width: 100%;
  margin: 20px auto;
  // width: 80%;
  width: 400px; 
  // max-width: 400px;
  max-width: 80%;
  border-radius: 3px;
  padding: 20px;
    
  position: relative;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--color2);
  // background: linear-gradient(var(--color2), var(--color2g)); // doesn't work because forms have backgrounds and are placed on a panel in the login component so there is a color mismatch
  color: var(--color1);

  > button {
    background-color: var(--color1);
    color: var(--color2);
  }

  > panel {
    padding: 0px;
  }

  .title {
    font-size: 30px;
    margin-bottom: 20px;
    font-weight: 900;
  }

  > .edit {
    position: absolute;
    height: 25px;
    right: 10px;
    top: 10px;
    cursor: pointer;
}
`

export const table = css`
table {
  background-color: whitesmoke;
  padding: 5px;
  border-radius: var(--radius);
  margin: 20px;
  font-size: 10px;
  transition-duration: 0.5s;
}

.tbody {
  height: 300px;
  overflow: scroll;
}

tr:nth-child(even){background-color: #dbd7d7;}
.tr:hover {background-color: rgba(153, 153, 153, 0.548);}

th:hover {background-color: rgba(79, 209, 170, 0.548);}
th {
  border-radius: 3px;
  transition-duration: 0.5s;
}

tr {
  border: 1px solid black;

  transition-duration: 0.5s;
}

td {
  padding: 5px;
  width: 10px;
  height: 10px;   
}
`