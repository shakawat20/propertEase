import React, { useEffect, useState } from 'react';
import Product from '../product/Product';
import residentialHome from '../../Regal Residence/Image_Icon/Icon/residential-home.png'
import showroom from '../../Regal Residence/Image_Icon/Icon/showroom.png'
import interiorDesign from '../../Regal Residence/Image_Icon/Icon/interiorIcon.avif'
import Service from '../service/Service';
import './Products.css'

const Products = () => {
    //    const [products,setProducts]= useState([])
    //    const [loading,setLoading]=useState(true)
    //  useEffect(()=>{
    //     fetch('../product/products.json')
    //     .then(res=>res.json())
    //     .then(data=>{

    //         setProducts(data)
    //         setLoading(false)
    //         console.log(data)

    //     })
    //  },[])
    const services = [
        {
            id: 1,
            img: interiorDesign,
            title: "Office interior Design",
            price: "250$",
            description: "The website was designed with a clean and modern look, featuring intuitive navigation and engaging content that provides a great user experience."
        },
        {
            id: 2,
            img: showroom,
            title: "Showroom design",
            price: "350$",
            description: "Our showroom is designed to inspire and delight our customers. We've created a space that showcases our products in the best possible light, with careful attention layout, and decor. "
        },
        {
            id: 3,
            img: residentialHome,
            title: "Residential home",
            price: "500$",
            description: "The website was designed with a clean and modern look, featuring intuitive navigation and engaging content that provides a great user experience."
        }
    ]




    const products = [
        {
            id: 1,
            img: "https://i.ibb.co/Svz1jHN/beazy-p-MY1mpaa-UAs-unsplash.jpg",
            title: "Villa on London",
            place: "London"
        },
        {
            id: 2,
            img: "https://i.ibb.co/JsPWMdM/bernard-hermant-6ft-Zu-O-b64-unsplash-1.png",
            title: "Luxury house on chicago",
            place: "USA"
        },
        {
            id: 3,
            img: "https://i.ibb.co/bH6xvH9/deborah-cortelazzi-g-REqu-CUXQLI-unsplash.jpg",
            title: "Beautiful house on LA",
            place: "London"
        }
    ]




    //  if(loading){
    //     return <div>Loading</div>
    //  }



    return (
        <div style={{ marginTop: "30px" }} >

            <h1 className='font-bold text-3xl' style={{ textAlign: "center" }}>Discover the latest interior Design <br /> available today</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1" style={{ width: "100%" }}>


                {
                    products.map(value => <Product title={value.title} img={value.img} place={value.place} ></Product>)
                }

            </div>
            <div className='bg-base-200'>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: 'center' }}>
                    <h1 className='font-bold text-3xl' style={{ textAlign: "center", marginTop: "45px" }}>We're an agency tailored to all <br /> client's needs that always delivers </h1>
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 service" style={{ marginTop: "20px", marginLeft: "65px" }}>

                        {
                            services.map(data => <Service img={data.img} title={data.title} description={data.description} price={data.price} id={data.id}></Service>)
                        }
                    </div>
                </div>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}><button style={{
                    backgroundColor: `#251D58`, borderRadius: "5px", padding: "5px", height: "50px", width: "170px", marginBottom: "10px"
                }}>Explore More</button></div>

            </div>
        </div>

    );
};

export default Products;