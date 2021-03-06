import React from 'react'
// import './css/normalize.css'
// import './css/buttons-forms.css'
// import './css/page.css'
import './css/lk_page.css'
import AppPageLayout from './../../app/AppPageLayout/AppPageLayout'

import Footer from './components/Footer/Footer'
import Sidebar from './../pages/UserPage/components/Sidebar/Sidebar'

const PageLayout = ({ children }) => (
  <AppPageLayout>
    <div className="main_content_wrapper">
      <div className="container clearfix">
        <Sidebar />
        {children}
      </div>
      <Footer />
      <div className="trasparent-stripe-left"></div>
      <div className="trasparent-stripe-right"></div>
    </div>
  </AppPageLayout>
)

export default PageLayout
