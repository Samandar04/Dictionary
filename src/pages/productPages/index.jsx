import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, Form, ProductCards } from './styled'

function ProductPages() {
        const [open, setOpen] = useState(true)
    const [saleProduct, setsaleProduct] = useState([])
    const [update, setupdate] = useState({ edit: false, data: {} })
    const getProducts = () => {
        axios.get("https://ibs-school.herokuapp.com/api/v1/for-developer/product")
            .then((res) => {
                setsaleProduct(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getProducts()
    }, [])
    const submitForm = (e) => {
        e.preventDefault()
        const { name, price, description } = e.target
        const form = {
            name: name.value,
            price: price.value,
            description: description.value,
        }
        axios.post("https://ibs-school.herokuapp.com/api/v1/for-developer/product", form)
            .then((res) => {
                console.log("submited successfully");
                getProducts();
                e.target.reset();
            })
            .catch()

    }
    const deleteProduct = (id) => {
        axios.delete("https://ibs-school.herokuapp.com/api/v1/for-developer/product/" + id)

            .finally(() => {
                getProducts()
            })
    }
    const updateform = (e) => {
        e.preventDefault()
        const { name, price, description } = e.target
        const form = {
            name: name.value,
            price: price.value,
            description: description.value,
        }
        axios.put("https://ibs-school.herokuapp.com/api/v1/for-developer/product/" +update.data.id,form)
            .then((res)=>{
                console.log(res.data);
                getProducts();
                e.target.reset();
                setupdate({edit:false,data:{}})
            })
    }
    return (
        <>
        <button
        onClick={() => {
          setOpen(!open);
        }}
      >
        toggle
      </button>
            <Form open={open} onSubmit={update.edit ? updateform : submitForm}>
                <input defaultValue={update.edit ? update.data.name : ""} type="text" name="name" placeholder="Name" required />

                <input defaultValue={update.edit ? update.data.price : ""} type="number" name="price" placeholder="Price" required />

                <textarea defaultValue={update.edit ? update.data.description : ""} name="description" rows="5" placeholder="Description" />
                <button>
                    {update.edit ? "update" : "submit"}
                </button>
            </Form>
            <ProductCards>
                {saleProduct?.map(({ id, name, price, description }) => (
                    <Card key={id}>
                        <p>Product Name : {name}</p>
                        <p>Product price : ${price}</p>
                        <p> description :{description}</p>
                        <button onClick={() => deleteProduct(id)} className="red">Delete</button>
                        <br />
                        <button onClick={() => { setupdate({ edit: true, data: { id, name, price, description } }) }}>Update</button>
                    </Card>
                ))}

            </ProductCards>
        </>
    )
}
export default ProductPages;