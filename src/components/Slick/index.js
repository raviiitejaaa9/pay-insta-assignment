import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const Slick = () => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 1, 
            slidesToScroll: 1,
          },
        },
      ],
  }
  return (
    <div className="slider-container">
      <Slider {...settings}>
         {/* 1 */}
      <div className="each-univ" >
        <img src= "https://snz04pap002files.storage.live.com/y4mPHrN-ICQtmwP8B0XKAbyi7ubJvscqx36CpWcheCvABjmg9BfjYMLyfXZQaP0nt2IVwSMgudwr0Ru0GZBecFF9IdjFoESMgnuTwTXT7mVM-xbbxMbu4BrLHT6BKnhVRfJ_en_ZzpoZBj8X3jsUTS1MzCUvB571-gGPdmYW1wx1LM61DYsvMrRW9QO8i_e4lnrmtgMhzb6RjrfSdl9aTG15g?encodeFailures=1&width=965&height=876"
            alt = "univ-pic" className="univ-img" />
        <h3 className="univ-name" > Harvard University </h3>
        <div className="univ-location-sec" >
            <p className="univ-para" > Cambridge, Massachusetts, UK </p>
            <div className="para-dots" > <p className="dots"> ... </p> </div>
        </div>
      </div>

      {/* 2  */}
      <div className="each-univ" >
        <img src= "https://snz04pap002files.storage.live.com/y4m1k1_ASGMr-cC4813G-9tXBIswG5npOEbRZJtKWtN4sc1N3P9RC6J535SJkMSOmS1YZx_A0Qk_1O62RbPY83M1hLwRjcv8rVqSUOBfQ97J3FiVM7vU8_FmLwCrI3akWTR5cnriWTxlJHF_zFlKqPMs3HNJ43uPQxjxCy4Or5tbHc5y0GH0m_66FobL6bf2d1K2z6-DEeKooq652oCqQWO2w?encodeFailures=1&width=965&height=876"
            alt = "univ-pic" className="univ-img" />
        <h3 className="univ-name" > Oxford University </h3>
        <div className="univ-location-sec" >
            <p className="univ-para" > Oxford, England </p>
            <div className="para-dots" > <p className="dots"> ... </p> </div>
        </div>
      </div>
      {/* 3  */}
      <div className="each-univ" >
        <img src= "https://snz04pap002files.storage.live.com/y4mBvcbnTSBMgvwjya3ZQM3TDqAT2Shbr0j5BG2sZPp2WdSNZJox441GYTCslWgIhlr1buzhnIzH1Xq3diyONF6FeSix1cFOM3b-mwj-nAQif2k-w0emt2wTx_jtZnggFryedzIALJdqml2jVtUSge-WyjYUiqzgWbogOs1AZ7KTZ1XvUcA7EuDzH8xxkm5KKZk5JDEAtk8HgMwNgSA5ajzvw?encodeFailures=1&width=965&height=876"
            alt = "univ-pic" className="univ-img" />
        <h3 className="univ-name" > Stanford University </h3>
        <div className="univ-location-sec" >
            <p className="univ-para" > Stanford, California </p>
            <div className="para-dots" > <p className="dots"> ... </p> </div>
        </div>
      </div>
        {/* 4  */}
        <div className="each-univ" >
        <img src= "https://snz04pap002files.storage.live.com/y4mlKUIBmSNX2-KFrwyk9Z54YgRBvFFmGK4xJuuCarhhNo_WOMKoX08znyZvspEaAVSkzwgyNvgLwB8alfi6HBLR03b6lBiBRp92HdjnKjnx8VE--nf6CzvHZZi_hu7g1KOjbaewOmfDGVJYxt-IPNbA4_20H6gEoj1br-N8OIcuciBJrJegATpIDoz5G0leBAYXRweh0Is7sOGVf8kLWB-0A?encodeFailures=1&width=678&height=876"
            alt = "univ-pic" className="univ-img" />
        <h3 className="univ-name" > Nanyang University </h3>
        <div className="univ-location-sec" >
            <p className="univ-para" > Nanyang Ave, Singapura </p>
            <div className="para-dots" > <p className="dots"> ... </p> </div>
        </div>
      </div>
      </Slider>
    </div>
  )
}

export default Slick