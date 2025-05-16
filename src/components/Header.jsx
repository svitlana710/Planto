import Slider from 'react-slick';
import bag from '../assets/img/bag.svg'; 
import play from '../assets/img/play.svg';
import img_2 from '../assets/img/img-2.webp';
import img_3 from '../assets/img/img-3.webp';
import img_4 from '../assets/img/img-4.webp';
import img_7 from '../assets/img/img-7.webp';
import img_8 from '../assets/img/img-8.webp'; 
import img_9 from '../assets/img/img-9.webp'
 
function Header(){

    const settings ={
        autoplay: true,
        slidesToShow: 1,
        autoplaySpeed: 5000,
        speed: 1000,
        dots: true,
        infinite: true,
        arrows: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    }

    const slides = [
        {
            img: img_2,
            subtitle: 'Trendy House Plant',
            title: 'Dieffenbachia seguine',
        },
        {
            img: img_3,
            subtitle: 'Trendy Garden Plant',
            title: 'Monsteraㅤ Plant',
        },
        {
            img: img_4,
            subtitle: 'Trendy City Plant',
            title: 'Sansevieria Plant',
        }
    ]

    return(
    <header className="header" id="home">

        <section className="header-description">

            <article className="header-description__about">

                <article className="header-description__text">
                <h1>Breath Natureal</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="header-description__info">
                    <button className="header-btn">Explore</button>
                    <img src={play} alt="play" />
                    <p>Live Demo...</p>
                </div>
                </article>

                <Slider {...settings} className="plants">

                    {slides.map((slide, i) => (
                        <article className="plant" key={i}>
                        <img src={slide.img} alt="plant" />
    
                        <div className="plant-info">
                                <h3>{slide.subtitle}</h3>
                                <h2>{slide.title}</h2>
                                <button className="header-btn">Buy Now</button>
                        </div>
                    </article>
                    ))}

                </Slider>
            </article>

            <article className="header-description__testimonial">

                <div className="header-description__profile">
                    <img src={img_9} alt="user" />
                    <div>
                        <h3>alena Patel</h3>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                        <span>★</span>
                    </div>
                </div>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>

            </article>

        </section>

        <section className="header-plants">

            <article className="header-plants__title">
                <h2>Our Trendy Plants</h2>
            </article>

            <article className="header-plants__block">
                <article className="plant">
                    <div><img src={img_7} alt="plant" /></div>
                    
                    <div className="plant-info">
                        <h2>For Small Decs Ai Plat</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <h2>$ 30.2</h2>
                        <div>
                            <button className="header-btn">Explore</button>
                            <button className="plant-btn">
                                <img src={bag} alt="bag" />
                            </button>
                        </div>
                        
                    </div>
                </article>

                <article className="plant">
                    <div><img src={img_8} alt="plant" /></div>
                    
                    <div className="plant-info">
                        <h2>For Small Decs Ai Plat</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                        <h2>$ 10.5</h2>
                        <div>
                            <button className="header-btn">Explore</button>
                            <button className="plant-btn">
                                <img src={bag} alt="bag" />
                            </button>
                        </div>
                        
                    </div>
                </article>
            </article>
            
        </section>
    </header>
    )
}

function SampleNextArrow(props) {
    const { onClick } = props;
    return <button className="next-arrow" onClick={onClick}></button>;
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return <button className="prev-arrow" onClick={onClick}></button>;
}

export { Header }