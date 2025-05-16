import React from 'react';
import Slider from 'react-slick';
import img_2 from '../assets/img/img-2.webp';
import img_3 from '../assets/img/img-3.webp';
import img_4 from '../assets/img/img-4.webp';
import img_5 from '../assets/img/img-5.webp';
import 'slick-carousel/slick/slick.css';

function Moreinfo() {
  const settings = {
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 5000,
    speed: 1000,
    infinite: true,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const slides = [
    {
      img: img_2,
      index: '01/04',
    },
    {
      img: img_4,
      index: '02/04',
    },
    {
      img: img_3,
      index: '03/04',
    },
    {
      img: img_5,
      index: '04/04',
    },
  ];

  return (
    <section className="best" id="more">
      <article className="best-title">
        <h2>Our Best o2</h2>
      </article>

      <Slider {...settings} className="best-container">
        {slides.map((slide, i) => (
          <div className="plant" key={i}>
            <div>
              <img src={slide.img} alt="plant" />
            </div>
            <div className="plant-info">
              <h2>We Have Small And Best O2 Plants Collection’s</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br /><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
              <div>
                <button className="header-btn">Explore</button>
                <p>{slide.index}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

function SampleNextArrow(props) {
  const { onClick } = props;
  return <button className="next-arrow" onClick={onClick}></button>;
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return <button className="prev-arrow" onClick={onClick}></button>;
}

export { Moreinfo };
