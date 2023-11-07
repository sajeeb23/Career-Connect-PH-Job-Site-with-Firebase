import { useEffect } from 'react';
import 'aos/dist/aos.css';
import aos from 'aos';

const Banner = () => {

    useEffect(() => {
        aos.init({
            duration: 1000,
        });
    }, []);
    return (
        
        <div className='my-4' data-aos="fade-up">
            <img src="https://i.ibb.co/9y21YZ2/businessman-using-laptop-analysis-data-investment.jpg" alt=""/>
        </div>
    );
};

export default Banner;