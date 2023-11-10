
const Footer = () => {
    return (
        <div className="w-10/12 mx-auto lg:w-full md:w-full">

            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                <img src="https://i.ibb.co/7b0WpWz/pngwing-com-26.png" className="w-2/12" alt="" />
                    <p className="font-medium">CareerConnect<br />Seize Opportunities, Connect Careers.</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>

        </div>
    );
};

export default Footer;