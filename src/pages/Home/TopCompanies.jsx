import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const TopCompanies = () => {

    useEffect(() => {
        AOS.init();
        const timeout = setTimeout(() => {
        }, 1000);

        return () => clearTimeout(timeout);
    }, []);
    return (
        <div className="mx-auto my-28 max-w-screen-lg">
            <h2 data-aos="fade-up" className='font-medium text-yellow-500 text-xl text-center mt-16'>Top Companies</h2>
            <h1 data-aos="fade-up" data-aos-delay="200" className="font-bold text-[#164863] text-4xl lg:text-6xl text-center my-6 mb-7">Get hired in top companies</h1>
            <Carousel
                autoPlay
                interval={2000}
                infiniteLoop
                showArrows={false}
                showStatus={false}
                showThumbs={false}
            >
                <div className="w-40 lg:w-60 md:w-60 h-60 mx-auto">
                    <img src="https://i.ibb.co/0VDNjB3/pngwing-com-33.png" alt="" className="w-2/12 object-cover" />
                </div>
                <div className="w-40 lg:w-60 md:w-60 h-60 mx-auto">
                    <img src="https://i.ibb.co/bRdnV4g/pngwing-com-32.png" alt="" className="w-2/12 object-cover" />
                </div>
                <div className="w-40 lg:w-60 md:w-60 h-60 mx-auto">
                    <img src="https://i.ibb.co/KXbG84T/pngwing-com-34.png" alt="" className="w-2/12 object-cover" />
                </div>
                <div className="w-40 lg:w-60 md:w-60 h-60 mx-auto">
                    <img src="https://i.ibb.co/PM9SB0h/pngwing-com-35.png" alt="" className="w-2/12 object-cover" />
                </div>
                <div className="w-40 lg:w-60 md:w-60 h-60 mx-auto">
                    <img src="https://i.ibb.co/LtwqpMw/pngwing-com-36.png" alt="" className="w-2/12 object-cover" />
                </div>
                <div className="w-40 lg:w-60 md:w-60 h-60 mx-auto">
                    <img src="https://i.ibb.co/R4GJ6Cx/pngwing-com-37.png" alt="" className="w-2/12 object-cover" />
                </div>
                <div className="w-40 lg:w-60 md:w-60 h-60 mx-auto">
                    <img src="https://i.ibb.co/Fsn7gDv/pngwing-com-38.png" alt="" className="w-2/12 object-cover" />
                </div>
                <div className="w-40 lg:w-60 md:w-60 h-60 mx-auto">
                    <img src="https://i.ibb.co/2PQRcsk/pngwing-com-39.png" alt="" className="w-2/12 object-cover" />
                </div>
            </Carousel>
        </div>
    );
};

export default TopCompanies;
