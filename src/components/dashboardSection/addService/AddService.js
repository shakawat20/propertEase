import React, { useState } from 'react';

// import img1 from "../../Regal Residence/Image_Icon/Icon/cloud-upload-outline 1.png"
import img1 from "../../propertEase/Image_Icon/Icon/cloud-upload-outline 1.png"
import { useForm } from 'react-hook-form';

const AddService = ({ setProject }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();


    const onSubmit = async data => {
        console.log(data)

        const imageStorageKey = 'b728bf91428c21f77d164f1426edf9be'
        const image = data.file[0]


        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`

        const formData = new FormData()

        formData.append('image', image)
        console.log(formData)

        fetch(url, {
            method: 'POST',
            body: formData

        }
        )
            .then(res => res.json())
            .then(result => {

                if (result.success) {
                    const img = result.data.url;
                    const Service = {
                        type: data?.title,
                        layout: data?.layout,
                        img: img,
                        price: data?.price
                    }
                    fetch('https://regal-residence-server.vercel.app/residence', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(Service)

                    })
                        .then(res => res.json())
                        .then(data => setProject(data))

                }

            })
        reset()


    };




    // type
    // "One-Bedroom Apartment"
    // img
    // "https://i.ibb.co/qM6Wkmy/images.jpg"
    // size
    // "800 square feet"
    // layout
    // "Two-Bedroom: Spacious living room, kitchen with a breakfast nook, two …"
    // price
    // "1200$"





    return (
        <div style={{ marginLeft: "-90px", marginTop: "-40px",color:"black" }} >
            <div style={{ marginLeft: "130px", marginTop: '90px' }}>Add a project</div>
            <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: '400px', margin: '0 auto', position: 'relative', left: "-200px", top: "40px" }}>
                <div style={{ marginBottom: '10px', display: "flex", alignItems: "center", }}>
                    <div>
                        <label htmlFor="title" style={{ display: 'block', marginBottom: '5px',color:"black" }}>
                            Service Title:
                        </label>
                        <input
                            style={{ width: '200px', padding: '5px', height: "27px",border:"1px solid black" }}
                            type="text" id="title" {...register('title')}
                        />
                    </div>

                    <div style={{ marginBottom: '20px', display: "inline", height: "40px", width: "173px", marginLeft: "25px", }}>
                        <div style={{ paddingBottom: "4px" }}>Image</div>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", border: "2px solid white", borderRadius: "5px" }}>
                            <label htmlFor="file" >
                                <img height="24px" width="24px" src={img1} alt="" />
                            </label>
                            <label htmlFor="file"
                            >
                                <h1 style={{ marginLeft: "8px" }}>Upload img</h1>
                            </label>

                        </div>
                        <input type="file" accept="image/*" id="file" {...register('file')} style={{ display: "none",border:"1px solid black" }} />
                    </div>

                </div>

                <div style={{ marginBottom: '10px', display: "inline", position: "relative", left: "-96px" }}>
                    <label htmlFor="size" style={{ display: 'block', marginBottom: '5px' }}>
                        size:
                    </label>
                    <input
                        style={{ width: '200px', padding: '5px', height: "27px",border:"1px solid black" }}
                        type="text" id="size" {...register('size')}
                    />
                </div>
                <div style={{ marginBottom: '10px', display: "inline", position: "relative", left: "-96px" }}>
                    <label htmlFor="size" style={{ display: 'block', marginBottom: '5px' }}>
                        price
                    </label>
                    <input
                        style={{ width: '200px', padding: '5px', height: "27px",border:"1px solid black" }}
                        type="text" id="price" {...register('price')}
                    />
                </div>



                <div style={{ marginBottom: '10px', display: "inline", position: "relative", left: "-96px" }}>
                    <label htmlFor="layout" style={{ display: 'block', marginBottom: '5px', width: "200px", borderRadius: '5px' }}>
                        layout:
                    </label>
                    <textarea

                        type="text"
                        id="layout" {...register('layout')}
                        style={{ width: '100%', padding: '5px', borderRadius: "5px" ,border:"1px solid black"}}
                    />
                </div>

                <button type="submit" style={{ padding: '10px 20px', background: 'blue', color: 'white', border: 'none', borderRadius: "5px", marginTop: "40px" }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddService;