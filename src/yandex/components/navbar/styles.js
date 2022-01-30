import styled from "styled-components";

export const Navbarwrap=styled.div`
width: 100%;
font-size: 50px;
text-align: center;
color: red;
background: lightgreen;
padding: 20px;
span{
    margin-left: 10px;
    color: gray;
    font-size: 18px;
}
@media only screen and (max-width: 942px){
font-size: 50px;
padding: 25px 0;

span{
    font-size: 18px;
margin-left:10px ;
}
}
@media only screen and (max-width: 768px){
font-size: 40px;
padding: 20px 0;
span{
    font-size: 15px;
    margin-left: 10px;
}
}
@media only screen and (max-width: 425px){
font-size: 30px;
padding: 10px 0;
}
`