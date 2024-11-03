import React, { useEffect } from 'react'
import Category from "./category/Category";
import Product from './product/Product';


export default function Content() {

    useEffect(() => {
        document.getElementById('handle_toggle_sidemenu').addEventListener('change', function () {
            if (this.checked) {
                document.querySelector('.mini_sidebar').classList.add('expanded')
                document.getElementById('content_section').classList.add('with_sidebar')
            } else {
                document.querySelector('.mini_sidebar').classList.remove('expanded')
                document.getElementById('content_section').classList.remove('with_sidebar')
            }
        })
    }, [])

    return (
        <section id="content_section" className={`bg-light py-2 px-3 `}>
            {/* <Dashboard/> */}
           {/* <Category/> */}
           <Product/>
        </section>
    )
}
