import './services.css'
import img1 from '../images/services/f-icon-1.png.webp'
import img2 from '../images/services/f-icon-2.png.webp'
import img3 from '../images/services/f-icon-3.png.webp'
import img4 from '../images/services/f-icon-4.png.webp'
import img5 from '../images/services/f-icon-5.png.webp'
import img6 from '../images/services/f-icon-6.png.webp'
export default function Services() {
      // Array of service data
      const servicesData = [
        {
            img: img1,
            title: "ادارة الحملات الاعلانية الممولة",
            description: "نقدم لكم خدمة ادارة الحملات الاعلانية الممولة و ذلك باقل التكاليف مع اعلى النتائج",
            link: "#"
        },
        {
            img: img2,
            title: "الاعلان في وسائل التواصل الاجتماعي",
            description: " محترفون في اشهار اعلانك الي اكبر عدد ممكن من الفئة المستهدفة",
            link: "#"
        },
        {
            img: img3,
            title: "التغطية الاعلامية عبر سناب شات",
            description: "نقدم لك خدمة التصوير الاحترافي باحدث و افضل اجهزة التصوير",
            link: "#"
        },
        {
            img: img4,
            title: "التصوير الاحترافي",
            description: "نقدم لك خدمة التصوير الاحترافي باحدث و افضل اجهزة التصوير",
            link: "#"
        },
        {
            img: img5,
            title: "ادارة الحملات الاعلانية الممولة",
            description: "نقدم لك خدمة التصوير الاحترافي باحدث و افضل اجهزة التصوير",
            link: "#"
        },
        {
            img: img6,
            title: "التخزين السحابي",
            description: "نقدم لك خدمة التصوير الاحترافي باحدث و افضل اجهزة التصوير",
            link: "#"
        }
    ];
    return(
        <div classNameName="services">
            <section className="banner_area">
                <div className="container">
                    <div className="banner_inner_text">
                        <h2>خدماتنا</h2>
                        <p>: القي نظرة الي ما هو أفضل ما نقوم به</p>
                    </div>
                </div>
            </section>
            <section className="service_feature">
                <div className="container">
                    <div className="row feature_inner">
                        {servicesData.map((service, index) => (
                            <div className="col-lg-4 col-sm-6" key={index}>
                                <div className="feature_item">
                                    <div className="f_icon">
                                        <img src={service.img} alt={service.title} />
                                    </div>
                                    <h4>{service.title}</h4>
                                    <p>{service.description}</p>
                                    <a className="more_btn" href={service.link}>قراءة المزيد</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* <section className="service_solution_area p_100">
                <div className="container">
                    <div className="row s_solution_inner">
                        <div className="col-lg-6">
                            <div className="s_solution_item">
                                <div className="l_title">
                                    <img src="./img/title-icon.png.webp" alt>
                                    <h6>Discover the features</h6>
                                    <h2>Simple solutions for complicated times</h2>
                                </div>
                                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a orci facilisis rutrum. Nam convallis vel erat id dictum. Sed ut risus in orci convallis viverra a eget nisi. Aenean pellentesque elit vitae eros dignissim ultrices. </p>
                                <div id="accordion" role="tablist" className="solution_collaps">
                                    <div className="card">
                                        <div className="card-header" role="tab" id="headingOne">
                                            <h5 className="mb-0">
                                                <a data-toggle="collapse" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis
                                                    <i className="minus">-</i>
                                                    <i className="plus">+</i>
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="collapseOne" className="collapse show" role="tabpanel" aria-labelledby="headingOne" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" role="tab" id="headingTwo">
                                            <h5 className="mb-0">
                                                <a className="collapsed" data-toggle="collapse" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Sed dapibus nunc vulputate mi fringilla, eu consequat
                                                    <i className="minus">-</i>
                                                    <i className="plus">+</i>
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="collapseTwo" className="collapse" role="tabpanel" aria-labelledby="headingTwo" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header" role="tab" id="headingThree">
                                            <h5 className="mb-0">
                                                <a className="collapsed" data-toggle="collapse" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Curabitur eu libero sed erat viverra gravida at id ex
                                                    <i className="minus">-</i>
                                                    <i className="plus">+</i>
                                                </a>
                                            </h5>
                                        </div>
                                        <div id="collapseThree" className="collapse" role="tabpanel" aria-labelledby="headingThree" data-parent="#accordion">
                                            <div className="card-body">
                                                <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}