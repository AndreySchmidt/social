import React from 'react'

// import './css/lk_page.css'
import AppPageLayout from './../../app/AppPageLayout/AppPageLayout'
import AdsListTopSection from './../../app/AppPageLayout/components/AdsListTopSection/AdsListTopSection'
import Menu from './../pages/OrganisationListPage/components/Menu/Menu'

import Footer from './../../app/components/Footer/Footer'

const PageLayout = ({ children }) => (
  <AppPageLayout>
    <div className="main_content_wrapper">
      <div className="container clearfix">
        <AdsListTopSection />
        <Menu />
        <div className="main_content">
          {children}
        </div>
      </div>
      <Footer />
      <div className="trasparent-stripe-left"></div>
      <div className="trasparent-stripe-right"></div>
    </div>
  </AppPageLayout>
)

export default PageLayout
