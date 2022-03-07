import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing: border-box;

};
#group-input-box{
    display:flex;
    flex-direction:column;
}

li{
  
    list-style:none;
    display:flex;
    align-items:center;
    justify-content: center;
    background-color: transparent !important;
}

a{

    font-size:18px;
    text-align: center;
    color:#1f1f1f;
    text-decoration: none;
    
}
#link-inscricao{
    background-color:green;
    color:#fff;
    padding:10px 20px;
    border-radius:4px;
    font-size:13px;
    font-weight:bold;
     border:1px solid #fff;
     box-shadow:1px 2px 8px green;
    &:active{
        border:1px solid #1e5945;
    }
}

input{
    width:250px;
    height:36px;
}
`;

export default GlobalStyle;
