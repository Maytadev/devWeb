import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer
      className="wow fadeInUp dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24"
      data-wow-delay=".1s"
    >
      <div className="container">
        <div className='flex flex-col items-center'>
          <img src="./gamarra-city.png" alt="" />
          <img src="./images/colorbar.png" alt="" className="pt-16 max-w-[900px]" />
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                {/* <Image
                    src="/images/logo/logo-2.svg"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo.svg"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  /> */}
              </Link>
              <p className="dark:text-body-color-dark mb-9 text-base leading-relaxed text-body-color">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque deserunt, odio, fuga blanditiis ipsum.
              </p>
              <div className="flex items-center">
                {/* Facebook */}
                <a
                  href="/"
                  aria-label="social-link"
                  className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                >
                  <FaFacebookF size="1rem" />
                </a>
                {/* Twitter */}
                <a
                  href="/"
                  aria-label="social-link"
                  className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                >
                  <FaTwitter size="1rem" />
                </a>
                {/* Youtube */}
                <a
                  href="/"
                  aria-label="social-link"
                  className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                >
                  <FaYoutube size="1.2rem" />
                </a>
                {/* Linkedin */}
                <a
                  href="/"
                  aria-label="social-link"
                  className="dark:text-body-color-dark text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                >
                  <FaLinkedin size="1.2rem" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-white">
            Proyecto de Programación Web{' - '}
            <a href="https://upal.edu.pe/" rel="nofollow noopener">
              Universidad Privada Peruano Alemana
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
