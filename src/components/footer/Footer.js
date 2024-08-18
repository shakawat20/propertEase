import React from 'react';

const Footer = () => {
    return (
        <div className='flex justify-center items-center' style={{width:"100%"}} > 
            <footer class="p-10 footer bg-white  text-black flex justify-center" style={{width:"100%"}}>
                <div className='flex flex-col items-center justify-center '  style={{width:"100%" }}>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div className='flex flex-col items-center justify-center '  style={{width:"100%"}}>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div className='flex flex-col items-center justify-center '  style={{width:"100%"}}>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div>
    );
};

export default Footer;