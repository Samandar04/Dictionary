import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Card1, Card2, Comma, Example, Gen, Mean, MinusSign, Number, Pos, Select, Syn, Textarea, Tr, TranslateColWrapper, TranslatedWord, TranslateWord, TranslateWordBox, TranslateWordPronunciation, Wrap } from './styles'

function Body() {
    const [input, setinput] = useState([])
    const [Language, setLanguage] = useState([])
    // const getLanguages = (e) => {
    //     const lang = document.getElementById("select").value;
    //     axios.get("https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20210915T143839Z.96e17f7f60ad28d4.e1bf52d3b734ee95be20a7e82dfe268e2601fce7&lang=" + lang)
    //         .then((res) => {
    //             console.log(res.data);
    //         })
    // }
    const start = (e) => {

        e.preventDefault()
          
        const lang = document.getElementById("select").value;
        console.log(lang);
        const form = document.getElementById("text").value ;
        axios.get(`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=dict.1.1.20210915T143839Z.96e17f7f60ad28d4.e1bf52d3b734ee95be20a7e82dfe268e2601fce7&lang=${lang}&text=${form}`)
            .then((res) => {

                console.log(res.data.def);
                setLanguage(res.data.def)
                setinput(res.data.def)

            })
    }
    useEffect(() => {
        // getLanguages()

    }, [])
    return (
        <Wrap>
            <Card1>
                <Textarea rows={4} id="text" onChange={start} type="text" name="names" placeholder="Type something to translate" />
                <Select id="select" onChange={start}>
                    <option value="ru-ru">Russian ➞ Russian </option>
                    <option value="ru-en">Russian ➞ English </option>
                    <option value="ru-pl">Russian ➞ Polandish </option>
                    <option value="ru-uk">Russian ➞ Ukrainian </option>
                    <option value="ru-de">Russian ➞ German </option>
                    <option value="ru-fr">Russian ➞ French </option>
                    <option value="ru-es">Russian ➞ Spanish </option>
                    <option value="ru-it">Russian ➞ Italian </option>
                    <option value="ru-tr">Russian ➞ Turkish </option>
                    <option value="en-ru">English ➞ Russian </option>
                    <option value="en-en">English ➞ English </option>
                    <option value="en-de">English ➞ German </option>
                    <option value="en-fr">English ➞ French </option>
                    <option value="en-es">English ➞ Spanish </option>
                    <option value="en-it">English ➞ Italian </option>
                    <option value="en-tr">English ➞ Turkish </option>
                    <option value="pl-ru">Polandish ➞ Russian </option>
                    <option value="uk-ru">Ukrainian ➞ Russian </option>
                    <option value="de-ru">German ➞ Russian </option>
                    <option value="de-en">German ➞ English </option>
                    <option value="fr-ru">French ➞ Russian </option>
                    <option value="fr-en">French ➞ English </option>
                    <option value="es-ru">Spanish ➞ Russian </option>
                    <option value="es-en">Spanish ➞ English </option>
                    <option value="it-ru">Italian ➞ Russian </option>
                    <option value="it-en">Italian ➞ English </option>
                    <option value="tr-ru">Turkish ➞ Russian </option>
                    <option value="tr-en">Turkish ➞ English </option>
                </Select>
            </Card1>
            <Card2>
                {

                    Language?.map(({text,pos,tr,ts}) => (
                        <>
                        
                        <TranslateWordBox>
                            <TranslateWord>
                                {text}
                            </TranslateWord>
                            <TranslateWordPronunciation>
                                [{ts}]
                            </TranslateWordPronunciation>
                            <Pos>
                                {pos}
                            </Pos>
                        </TranslateWordBox>

                        {tr?.map(({text, pos, gen, syn, mean, ex}, trIndex) =>
                            <>
                                <TranslatedWord>
                                    {tr.length>1 &&
                                        <Number>
                                            {trIndex + 1}
                                        </Number>
                                    }
                                    <Tr>
                                        {text}
                                        {gen && <Gen>
                                            {gen}
                                        </Gen>}
                                        <Comma>
                                            {syn ? "," : ''}
                                        </Comma>
                                    </Tr>

                                    {syn?.map(({text, pos, gen}, synIndex) =>
                                        <Syn>
                                            {text}
                                            {gen &&
                                            <Gen>
                                                {gen}
                                            </Gen>}
                                            <Comma>
                                                {syn.length - 1 !== synIndex ? "," : ''}
                                            </Comma>
                                        </Syn>
                                    )}

                                </TranslatedWord>
                                {mean &&
                                <Mean>
                                    ({mean.map(({text},meanIndex) => <span>{text}{mean.length-1!==meanIndex && " "}</span>)})
                                </Mean>
                                }

                                {ex &&
                                <Example>
                                    {ex.map(({text,tr}) =>
                                        <div>
                                            {text}
                                            <MinusSign>-</MinusSign>
                                            {tr && tr.map(({text})=><span>{text}</span>)}
                                        </div>
                                    )}
                                </Example>
                                }


                            </>
                        )}

                        <Example>

                        </Example>
                    </>
                        // <div>
                        //    <div>
                        //        {tr.text}
                        //    </div>
                           
                        //     {tr?.map(({text},trIndex)=>{
                        //         console.log(text);
                        //             <>
                        //             <div>{tr.length>1 &&
                        //             <p>
                        //                 {trIndex+1}
                        //             </p>}</div>
                                        
                                        
                        //                <p>{text}</p> 
                                   
                                    
                        //             </>
                        //         })
                        //     }
                        // </div>
                    ))
                }
                



            </Card2>
        </Wrap>
    )
}

export default Body
