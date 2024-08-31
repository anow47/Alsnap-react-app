import Landing from '../components/Landing'
import { Link } from 'react-router-dom'
import './home.css'
import '../pages/settings.css'
import secImg1 from '../images/auction.webp'
import secImg2 from '../images/marketing.webp'
import secImg3 from '../images/marketing2.webp'

export default function HomeContent() {
    return(
        <div className='home'>
            <Landing />
            <section className="home_feature">
                <div className="container">
                    <div className="row feature_inner">
                        <div className="col-lg-4 col-sm-6">
                            <div className="feature_item">
                                <div className="img_container">
                                    <img src={secImg1} alt="" />
                                </div>
                                <div class="content-frame-link">
                                    <Link to="/auctions" class="btn-link">مزادات عقارية</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="feature_item">
                                <div className="img_container">
                                    <img src={secImg2} alt="" />
                                </div>
                                <div class="content-frame-link">
                                    <Link to="/services" class="btn-link">خدماتنا</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-sm-6">
                            <div className="feature_item">
                                <div className="img_container">
                                    <img src={secImg3} alt="" />
                                </div>
                                <div class="content-frame-link">
                                    <Link to="/projects" class="btn-link">مشاريع عقارية</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}