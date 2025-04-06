import React from 'react'
import { Routes, Route } from "react-router-dom"
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
import CetylpyridiniumChloridMonohydrate from '../pages/cetylpyridiniumChloridMonohydrate/cetylpyridiniumChloridMonohydrate'
import Certifications from '../pages/certifications/certifications'
import ManufacturingUnits from '../pages/manufacturingUnits/manufacturingUnits'
import Blog from '../pages/blog/blog'
import NewsEvent from '../pages/newsEvent/newsEvent'
import Careers from '../pages/careers/careers'
import MediaDetails from '../pages/mediaDetails/mediaDetails'
import BiotechCentre from '../pages/biotechCentre/biotechCentre'

const RootRouter = () => {
    return (
        <React.Fragment>
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
                <Route path="/antibacterial-products" element={<AntibacterialProducts />} />
                <Route path="/cetylpyridinium-chloride-monohydrate" element={<CetylpyridiniumChloridMonohydrate />} />
                <Route path="/certifications" element={<Certifications />} />
                <Route path="/manufacturing-units" element={<ManufacturingUnits />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/news-events" element={<NewsEvent />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/media-details" element={<MediaDetails />} />
                <Route path="/biotech-centre" element={<BiotechCentre />} />
            </Routes>
        </React.Fragment>
    )
}

export default RootRouter