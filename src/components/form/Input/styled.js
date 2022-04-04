import styled from "styled-components";

const Label = styled.label`
  color: #1f1f1fc2;
  font-size: 11px;
  font-weight: bold;
  width: 32%;
  height: 80px;
  margin-right:10px;
  display: ${(item)=>item.displayFlex ?item.displayFlex:'0'};
  flex-direction: ${(item)=>item.flexDirection ?item.flexDirection:'0'};
    

  input {
    outline: none;
    padding: 10px 10px;
    border-radius: 2px;
    width: 100%;
    height: 35px;
    border: 1px solid #bbb;
    margin-top: 6px;
    transition: 0.3s ease;
font-size: 10px;

 padding: 10px 10px;
  border-radius: 3px;
  width: 100%;
  height: 45px;
  border: 1px solid #ddd;

    &:-webkit-placeholder {
      color: red !important;
    }
    &:focus-visible {
      
      border: 1px solid green;
    }
  }
`;
export default Label;
