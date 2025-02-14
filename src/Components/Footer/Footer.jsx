import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";
import Img from "../../assets/onw.png";
const FooterLinks = [
  { id: 1, title: "Home", link: "/#" },
  {
    id: 2,
    title: "About",
    link: "/#about",
  },
  {
    id: 3,
    title: "Contact",
    link: "/#contact",
  },
  {
    id: 4,
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
        <div data-aos="fade" className="container">
          <div className="grid md:grid-cols-3 py-4">
            {/* company Details */}
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                VR World
              </h1>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Repellat dolor illum a aut iste expedita.
              </p>
              <br />

              {/* contact section */}
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Karachi, Pakistan</p>
                </div>
                <div className="flex items-center gap-3">
                  <FaMobileAlt />
                  <p>+92 333 7751641</p>
                </div>
                <div className="flex items-center gap-3">
                  <img width={20} className="rounded-full" src={Img} alt="" />
                  <p>
                    <a
                      target="_blank"
                      className="hover:underline hover:text-[red]"
                      href="https://github.com/Muhammad-Saim-Khan"
                    >
                      Muhammad Saim Khan
                    </a>
                  </p>
                </div>
              </div>

              {/* social handle */}
              <div className="flex items-center gap-3 mt-6">
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61554894977389"
                >
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/saimkhan_developer/"
                >
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a target="_blank" href="https://github.com/Muhammad-Saim-Khan">
                  <FaGithub className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>

            {/* Footer Links section */}
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3 ">Quick Links</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className="hover:translate-x-1 duration-300 "
                      >
                        <a
                          href={link.link}
                          className="cursor-pointer hover:text-primary"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3 ">Quick Links</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className="hover:translate-x-1 duration-300 "
                      >
                        <a
                          href={link.link}
                          className="cursor-pointer hover:text-primary"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div>
                <div className="py-8 px-4">
                  <h1 className="text-xl font-bold mb-3 ">Location</h1>
                  <ul className="space-y-3">
                    {FooterLinks.map((link) => (
                      <li
                        key={link.id}
                        className="hover:translate-x-1 duration-300 "
                      >
                        <a
                          href={link.link}
                          className="cursor-pointer hover:text-primary"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
