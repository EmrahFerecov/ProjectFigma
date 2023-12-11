import React from 'react'
import "./navbar.scss"

const Navbar = () => {
    return (
        <>
            <section id='emraH'>
                <div className='container'>
                    <div className='common-navbar'>

                        <div className='home-page'>
                            <div className='h2-tag'>
                                <h2>Exclusive</h2>

                            </div>







                            <ul className='pages'>
                                <li>Home</li>
                                <li>Contact</li>
                                <li>About</li>
                                <li>Sign Up</li>
                            </ul>
                        </div>
                        <div className='input-page'>
                            <div class="input">
                                <input type="text" />
                                <i class="fa-solid fa-magnifying-glass" ></i>

                            </div>
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-solid fa-cart-shopping"></i>


                        </div>


                    </div>


                </div>







            </section>

        </>
    )
}

export default Navbar