import React, {lazy, Suspense} from 'react'
import { Routes, Route } from "react-router-dom"
import {AdminCategories, CreateProduct} from '../Link/link'
import Home from '../pages/home/home'
import Products from '../pages/products/products'
import WhoWeAre from '../pages/whoWeAre/whoWeAre'
import Management from '../pages/management/management'
import Organization from '../pages/organization/organization'
import Sustainability from '../pages/sustainability/sustainability'
import Investors from '../pages/investors/Investors'
import ContactUs from '../pages/contactUs/contactUs'
import ResearchCentre from '../pages/researchCentre/researchCentre'
import Media from '../pages/media/media'
import AntibacterialProducts from '../pages/antibacterialProducts/antibacterialProducts'
//import CetylpyridiniumChloridMonohydrate from '../pages/cetylpyridiniumChloridMonohydrate/cetylpyridiniumChloridMonohydrate'
import Certifications from '../pages/certifications/certifications'
import ManufacturingUnits from '../pages/manufacturingUnits/manufacturingUnits'
import Blog from '../pages/blog/blog'
import NewsEvent from '../pages/newsEvent/newsEvent'
import Careers from '../pages/careers/careers'
import CreateNews from '../Admin/createNews'
import NewsDetail from '../templates/home/NewsDetail';  
import BlogsDetail from '../templates/home/BlogDetail';  

import ProductDetails from '../templates/cetylpyridiniumChloridMonohydrate/ProductDetails'
import AllNews from '../templates/home/AllNews';  
import AllBlogs from '../templates/home/AllBlogs';  

import CreateBlog from '../Admin/createBlog'
import BlogDetail from '../templates/home/BlogDetail'
import MediaDetails from '../pages/mediaDetails/mediaDetails'
import BiotechCentre from '../pages/biotechCentre/biotechCentre'
import AdminDashboard from '../pages/Admin/page'
import AdminLayout from '../pages/Admin/Layout'
import CreateCareer from '../pages/careers/CreateCareer'

const RootRouter = () => {
    return (
       

        <Suspense fallback = {<div> Loading...</div>}>
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/who-we-are" element={<WhoWeAre />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/management" element={<Management />} />
            <Route path="/sustainability" element={<Sustainability />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/research-centre" element={<ResearchCentre />} />
            <Route path="/media" element={<Media />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/manufacturing-units" element={<ManufacturingUnits />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/news-events" element={<NewsEvent />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/admincategories" element={<AdminCategories />} />
            <Route path='/create-product' element={<CreateProduct/>} />
            <Route path="/createnews" element={<CreateNews/>}/>
            <Route path="/createblogs" element={<CreateBlog/>}/>

            {/* <Route path="/news/:id" element={<NewsDetail />} /> */}
            <Route path="/news/:id" element={<MediaDetails />} />
            <Route path="/blog/:id" element={<BlogDetail />} />

            <Route path="/category/:categoryName" element={<AntibacterialProducts />} />
            <Route path="/product-detail/" element={<ProductDetails />} />

            <Route path="/all-news" element={<NewsEvent />} />
            <Route path="/all-blogs" element={<AllBlogs />} />
            <Route path="/careers" element={<Careers />} />
            {/* <Route path="/media-details/:heading" element={<MediaDetails />} /> */}
            <Route path="/biotech-centre" element={<BiotechCentre />} />
            <Route path='/admin' element={<AdminLayout/>}>
            <Route path='' element={<AdminDashboard/>}/>
            <Route path='create-product' element={<CreateProduct/>} />
            <Route path="createnews" element={<CreateNews/>}/>
            <Route path="createblogs" element={<CreateBlog/>}/>
            <Route path="create-category" element={<AdminCategories />} />
            <Route path="create-career" element={<CreateCareer />} />
            </Route>
            </Routes>

        </Suspense>
    )
}

export default RootRouter