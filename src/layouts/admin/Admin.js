import React, { useEffect } from 'react';
import Header from './Header/Header'
import Sadebar from "./Sidebar/Sadebar";
import Dashboard from '../../page/dashboard/Dashboard';


const Admin = () => {

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

        // let sidebarItms = document.querySelectorAll('.sidebar_menu_item');
        // for (const item of sidebarItms) {
        //     item.addEventListener('click', () => {
        //         for (const i of sidebarItms) {
        //             i.classList.remove('active')
        //         }
        //         item.classList.add('active')
        //         let sectionId = item.getAttribute('data-section-id');
        //         let allSections = document.querySelectorAll('.main_section');
        //         for (const section of allSections) {
        //             section.classList.add('d-none')
        //         }
        //         document.getElementById(`${sectionId}`).classList.remove('d-none')
        //     })
        // }
    }, [])

    return (
        <div>
            <Header />
            <Sadebar />
            <section id="content_section" className={`bg-light py-2 px-3 `}>
                <Dashboard/>
            </section>
        </div>
    );
};

export default Admin;

// ${showSidebar? "with_sidebar":null}