import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Random() {

    const [person, setperson] = useState([])
    const getPerson = () => {
        axios.get("https://randomuser.me/api/")
            .then((res) => {
                setperson(res.data.results)
                console.log(res.data.results);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getPerson()
    }, [])
    return (
        <div>
            {/* {
                person?.map(({street, gender, name, location:{street}, email, phone, cell, picture }, index) => (
                    <>
                        <p>{gender}</p>
                        <div>{name?.title} {name?.first} {name?.last}</div>
                        <p>{street.name}</p>
                        <p>{street.number}</p>
                    </>
                ))
            } */}
        </div>
    )
}

export default Random
