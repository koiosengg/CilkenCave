import React, { useState, useEffect } from "react";
import Banner1 from "../../assets/Home/Banner 3.png";
import Banner2 from "../../assets/Home/Banner 2.svg";
import Banner3 from "../../assets/Home/Banner.svg";
import MobileBanner1 from "../../assets/Home/MobileBannerImg1.png";
import MobileBanner2 from "../../assets/Home/MobileBannerImg2.png";
import MobileBanner3 from "../../assets/Home/MobileBannerImg3.png";

function HomeBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [banners, setBanners] = useState([Banner1, Banner2, Banner3]);
  const bannerCount = banners.length;
  const delay = 5000;

  useEffect(() => {
    const updateBanners = () => {
      if (window.innerWidth < 1200) {
        setBanners([MobileBanner1, MobileBanner2, MobileBanner3]);
      } else {
        setBanners([Banner1, Banner2, Banner3]);
      }
    };

    updateBanners();
    window.addEventListener("resize", updateBanners);

    return () => window.removeEventListener("resize", updateBanners);
  }, []);

  const nextBanner = () => {
    if (currentIndex < bannerCount - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevBanner = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < bannerCount - 1) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [currentIndex, bannerCount]);

  const handleControlClick = (action) => {
    action();
    setCurrentIndex((prevIndex) => prevIndex); 
  };


  return (
    <div className="homeBannerContainer">
      <div className="homeBanner">
        <div
          className="homeBannerSlider"
          style={{
            display: "flex",
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.5s ease-in-out",
            width: `${bannerCount * 100}%`,
          }}
        >
          {banners.map((banner, index) => (
            <img
              key={index}
              src={banner}
              alt={`Banner ${index + 1}`}
              style={{ width: "100%", flexShrink: 0 }}
            />
          ))}
        </div>
        <div className="homeBannerControlDiv">
          <div
            className="homeBannerControlLeft"
            onClick={() => handleControlClick(prevBanner)}
            style={{
              opacity: currentIndex === 0 ? 0.3 : 1,
              cursor: currentIndex === 0 ? "default" : "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              style={{ transform: "rotate(180deg)" }}
            >
              <mask
                id="mask0_353_3810"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect
                  y="32"
                  width="32"
                  height="32"
                  transform="rotate(-90 0 32)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_353_3810)">
                <path
                  d="M24 16L16 24L14.1333 22.1333L18.9333 17.3333H6.66663L6.66663 14.6667H18.9333L14.1333 9.86667L16 8L24 16Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>

          <div className="homeBannerIndicatorDiv">
            {banners.map((_, index) => (
              <div
                key={index}
                className={`homeBannerIndicator ${
                  index === currentIndex ? "activeHomeBannerIndicator" : ""
                }`}
              ></div>
            ))}
          </div>

          <div
            className="homeBannerControlRight"
            onClick={() => handleControlClick(nextBanner)}
            style={{
              opacity: currentIndex === bannerCount - 1 ? 0.3 : 1,
              cursor: currentIndex === bannerCount - 1 ? "default" : "pointer",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <mask
                id="mask0_353_3810"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="32"
                height="32"
              >
                <rect
                  y="32"
                  width="32"
                  height="32"
                  transform="rotate(-90 0 32)"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_353_3810)">
                <path
                  d="M24 16L16 24L14.1333 22.1333L18.9333 17.3333H6.66663L6.66663 14.6667H18.9333L14.1333 9.86667L16 8L24 16Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <div className="homeBannerText">
        <h1>
          Transforming Ideas into Reality with
          <br /> Custom Semiconductor Solutions
        </h1>
        <p>Delivering Excellence, One Detail at a Time</p>
      </div>
    </div>
  );
}

export default HomeBanner;
