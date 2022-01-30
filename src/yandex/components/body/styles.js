import styled from "styled-components";

export const Wrap=styled.div`
width: 1200px;
margin: auto;
position: relative;
margin-top: 20px;
/* display: flex; */
`
export const Card1=styled.div`
width: 48%;

position: relative;
border: 1px solid lightgrey;
&:focus-within{
outline: 1px auto yellowgreen;
}
@media only screen and (max-width: 768px){
     position: relative;
width: 48%;

}
@media only screen and (max-width: 425px){
    position: relative;
width: 48%;

} 
`
export const Textarea=styled.textarea`
    width: 100%;
    position: relative;
    height: 200px;
    border: 0;
    padding: 60px 20px;
    &:focus-within{
outline: 1px auto yellow;
}
    &:focus{
outline: 0;
}
&::placeholder{
font-size: 20px;
}

resize: none;
 @media only screen and (max-width: 768px){
     position: relative;
font-size: 18px;
&::placeholder{
font-size: 18px;
}
}
@media only screen and (max-width: 425px){
    position: relative;
font-size: 15px;
&::placeholder{
font-size: 15px;
}
} 
`
export const Select=styled.select`
   position: absolute;
    top: 10px;
    left: 10px;
    padding: 10px;
    option{
        margin-top: 10px;
    }
    @media only screen and (max-width: 768px){
        position: absolute;
        width: 150px;
    padding: 0;
    height: 30px;
        top: 10px;
    left: 10px;

}
@media only screen and (max-width: 425px){
    width: 150px;
    padding: 0;
    height: 30px;
    position: absolute;
    top: 10px;
    left: 10px;

}

` 
export const Card2=styled.div`
width: 48%;
margin-left: 10px;
position: absolute;
left: 50%;
top: 0;
`

export const TranslateColWrapper = styled.div`
width: 100%;
`;

export const TranslateWordBox = styled.div`
//display: flex;
`;

export const TranslateWord = styled.span`
font-weight:bold;
`;

export const TranslateWordPronunciation = styled.span`
margin: 0 5px;
color: darkgrey;
`;

export const Pos = styled.small`
color: grey;
`;

export const Gen = styled.small`
color: grey;
margin-left: 5px;
`;

export const TranslatedWord = styled.div`
display: flex;
flex-wrap: wrap;
padding-left: 25px;
position: relative;
`;

export const Number=styled.div`
position: absolute;
top: 0;
left: 0;

color: darkgrey;
`;


export const Tr = styled.div`
margin-right: 5px;
color: #4b4b99;

`;

export const Syn = styled.div`
margin-right: 5px;
color: #4b4b99;


`;


export const Mean = styled.div`
color: #80494b;
//margin:5px 0 5px 25px;
margin-left: 25px;
`;

export const Example = styled.div`
color: grey;
margin-left: 40px;


`;

export const Comma = styled.span`
color: black;
`;

export const MinusSign = styled.span`
margin: 0 5px;
`;
