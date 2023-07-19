import React, { useEffect, useState } from 'react'
import './row.scss'
import instance from '../../api';
import Slider from "react-slick";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Card from './Card';
function Row({ title, fetch }) {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <NavigateNextIcon className='arrow-next' onClick={onClick}/>
    );
  }
  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <NavigateBeforeIcon className='arrow-prev' onClick={onClick}/>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow:<SamplePrevArrow/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const [movies, setMovies] = useState([])
  useEffect(() => {
    async function fetchUrl() {
      const data = await instance.get(fetch)
      setMovies(data.data.results)
    }
    fetchUrl();
  }, [fetch])
  return (
    <div className='row'>
      <div className='title'>
        {title}
      </div>
      <div className='container'>
        <Slider {...settings}>
          {movies.map((i, index) => {
            return (
              <Card key={index} data={i}/>
              )
          })}
        </Slider>

      </div>
    </div>
  )
}

export default Row