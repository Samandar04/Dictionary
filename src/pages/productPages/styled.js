import styled from "styled-components";
export const ProductCards=styled.div`
display: flex;
flex-wrap: wrap;
width: 1200px;
margin: auto;
margin-top: 20px;
justify-content: space-between;
`
export const Card=styled.div`
width: 30%;
border-radius: 10px;
padding: 10px;
margin-bottom: 20px;
text-transform: capitalize;
background: lightskyblue;

p{
    word-wrap: break-word;
}
.red{
    background: red;
    color: white;
}
button{
    cursor: pointer;
    padding: 10px;
    border: 0;
    display: block;
    width: 100%;
    
    background: lightgreen;
}
`
export const Form=styled.form`
width: 400px;
margin: auto;
display:  ${({ open }) => open ? "block" : "none"};
padding: 10px;
background: lightgreen;
margin-top: 20px;
input{
    width: 100%;
    display: block;
    padding: 10px;
    margin: 10px 0;
}
textarea{
    padding: 10px;
    width: 100%;
    margin: 10px 0;
}
button{
    cursor: pointer;
padding: 10px;
margin: 10px 0;
width: 100%;
background: lightsalmon;
color: white;
border: 0;
}
`

