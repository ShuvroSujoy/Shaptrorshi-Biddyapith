import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const SptCourses2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // tablet and larger devices
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className='container'>
      <div className='flex flex-col items-center gap-5 mt-10 '>
        <h1 className='md:text-4xl text-xl text-red-600 text-center font-SptFont2'>
          Our Activities On Classes
        </h1>
        <div className='flex items-center'>
          <div className='h-[3px] w-16 bg-red-800'></div>
          <div className='h-[5px] w-16 bg-red-800'></div>
          <div className='h-[3px] w-16 bg-red-800'></div>
        </div>
      </div>
      <div className="lg:mx-20 md:mx-10 mx-2 mt-10 mb-10">
        <Slider {...settings}>
          <div className="">
            <img className="h-[300px] md:w-[400px]  rounded-md" src="public/Image/project1.jpg" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">Spoken English</h2>
          </div>
          <div className="">
            <img className="h-[300px] md:w-[400px]  rounded-md" src="public/Image/SptLogo.png" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">Prige</h2>
          </div>
          <div className="">
            <img className="h-[300px] md:w-[400px]  rounded-md" src="public/Image/project1.jpg" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">Prige</h2>
          </div>
          <div className="">
            <img className="h-[300px] md:w-[400px]  rounded-md" src="public/Image/SptLogo.png" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">Prige</h2>
          </div>
          <div className="">
            <img className="h-[300px] md:w-[400px]  rounded-md" src="public/Image/SptLogo3.jpg" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">Prige</h2>
          </div>
          <div className="">
            <img className="h-[300px] md:w-[400px]  rounded-md" src="public/Image/project1.jpg" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">Prige</h2>
          </div>
          <div className="">
            <img className="h-[300px] md:w-[400px]  rounded-md" src="public/Image/SptLogo3.jpg" alt="" />
            <h2 className="text-2xl text-red-800 font-SptFont text-center mt-2">Prige</h2>
          </div>
        </Slider>
      </div>

    </div>
  );
};

export default SptCourses2;