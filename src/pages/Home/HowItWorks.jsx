import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const HowItWorks = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div className="my-36 overflow-x-hidden">
            <h1 data-aos="fade-up" className="font-bold text-[#164863] text-4xl lg:text-6xl text-center my-6 mb-7">How it Works</h1>
            <p data-aos="fade-up" data-aos-delay="200" className="w-7/12 lg:w-8/12 text-center mx-auto">Embark on your career journey with CareerConnect - the pathway to success. Discover, apply, and connect with top job opportunities effortlessly. Our streamlined process ensures a seamless experience from exploration to employment. Join us today and take the next step toward a fulfilling career!</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-8 mx-auto max-w-screen-lg">
                <div data-aos="flip-up" data-aos-delay="300" className="text-center">
                    <img src="https://i.ibb.co/rw5C81m/pngwing-com-40.png" className="w-2/6 md:w-2/5 lg:w-2/5 my-2 mx-auto" alt="" />
                    <p className="font-medium text-lg my-1">Create your resume</p>
                    <p className="w-4/5 mx-auto opacity-80 my-2">Build your winning resume effortlessly. Our simple yet effective resume builder helps you create a standout profile, unlocking doors to your dream career. Start now and make your first impression count!</p>
                </div>

                <div data-aos="flip-up" data-aos-delay="300" className="text-center">
                    <img src="https://i.ibb.co/KL41F6F/pngwing-com-41.png" className="w-2/6 md:w-2/5 lg:w-2/5 my-2 mx-auto" alt="" />
                    <p className="font-medium text-lg my-1">Apply For Jobs</p>
                    <p className="w-4/5 mx-auto opacity-80 my-2">Browse through a myriad of job opportunities and apply with just a click. Our intuitive platform makes the application process seamless, helping you land your dream job effortlessly. Your next career move is just a step away!</p>
                </div>

                <div data-aos="flip-up" data-aos-delay="300" className="text-center">
                    <img src="https://i.ibb.co/CwcN9qw/pngwing-com-42.png" className="w-2/6 md:w-2/5 lg:w-2/5 my-2 mx-auto" alt="" />
                    <p className="font-medium text-lg my-1">Hired Now</p>
                    <p className="w-4/5 mx-auto opacity-80 my-2">Accelerate your career growth by exploring exclusive opportunities on CareerConnect. Get hired by top companies actively seeking talent like you. Take the leap and embark on a fulfilling professional journey today!</p>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
