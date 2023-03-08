import React from "react";
import { logo } from "../../assets/index";
import * as Unicons from "@iconscout/react-unicons";
import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <>
      <footer aria-label="Site Footer" className="bg-white">
        <div className="pt-16 pb-6 _sm:px-6 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="w-32 h-[45px]">
                <img src={logo} alt="logo" className="h-full w-full" />
              </div>

              <p className="mt-6 max-w-md text-center text-[16px] font-poppins font-medium leading-loose text-gray-700 _sm:max-w-xs _sm:text-justify _sm:leading-8 _md:text-justify">
                Our job is to filling your tummy with delicious food and with
                fast and free delivery.
              </p>

              <ul className="mt-8 flex justify-start gap-6 _sm:justify-center _md:gap-8">
                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75">
                    {/* <Unicons.UilInstagramAlt size="25" color="#EB5757" /> */}
                    {/* <i className="ri-instagram-fill ri-2x"></i> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"
                        fill="rgba(235,87,87,1)"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75">
                    {/* <Unicons.UilFacebookF size="25" color="#EB5757" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"
                        fill="rgba(235,87,87,1)"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75">
                    {/* <Unicons.UilTwitter size="25" color="#EB5757" /> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24">
                      <path fill="none" d="M0 0h24v24H0z" />
                      <path
                        d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"
                        fill="rgba(235,87,87,1)"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-[20px] font-bold font-poppins text-gray-900">
                  About Us
                </p>

                <nav aria-label="Footer About Nav" className="mt-8">
                  <ul className="space-y-4 font-poppins font-medium text-base">
                    <li>
                      <a
                        className="text-gray-700 transition hover:text-[#EB5757]/75"
                        href="/">
                        About Us
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-700 transition hover:text-[#EB5757]/75"
                        href="/">
                        Features
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-700 transition hover:text-[#EB5757]/75"
                        href="/">
                        News
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-700 transition hover:text-[#EB5757]/75"
                        href="/">
                        Menu
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-[20px] font-bold font-poppins text-gray-900">
                  Company
                </p>

                <nav aria-label="Footer Services Nav" className="mt-8">
                  <ul className="space-y-4 font-poppins font-medium text-base">
                    <li>
                      <a
                        className="text-gray-700 transition hover:text-[#EB5757]/75"
                        href="/">
                        Why Fudo?
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-700 transition hover:text-[#EB5757]/75"
                        href="/">
                        Partner With Us
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-700 transition hover:text-[#EB5757]/75"
                        href="/">
                        FAQ
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-700 transition hover:text-[#EB5757]/75"
                        href="/">
                        Blog
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-[20px] font-bold font-poppins text-gray-900">
                  Support
                </p>

                <nav aria-label="Footer Helpful Nav" className="mt-8">
                  <ul className="space-y-4 font-poppins font-medium text-base">
                    <li>
                      <a
                        className="text-gray-700 transition hover:text-[#EB5757]/75"
                        href="/">
                        Account
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-gray-700 transition hover:text-[#EB5757]/75"
                        href="/">
                        Support Center
                      </a>
                    </li>

                    <li>
                      <a
                        className="group flex justify-center gap-1.5 sm:justify-start"
                        href="/">
                        <span className="text-gray-700 transition group-hover:text-gray-700/75">
                          Feedback
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 transition hover:text-[#EB5757]/75"
                        href="/">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-gray-700 transition hover:text-[#EB5757]/75"
                        href="/">
                        Accessibilty
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-[20px] font-bold font-poppins text-gray-900">
                  Get in Touch
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start"
                      href="/">
                      <span className="text-gray-900 text-base font-poppins font-medium transition hover:text-[#EB5757]/75">
                        Question or feedback?
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="flex items-center justify-center gap-1.5 sm:justify-start "
                      href="/">
                      <span className="text-gray-900 text-base font-poppins font-medium transition hover:text-[#EB5757]/75">
                        We’d love to hear from you
                      </span>
                    </a>
                  </li>
                </ul>

                <div className="relative mt-8">
                  <label htmlFor="UserEmail" className="sr-only" />
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="Email Address"
                    className="w-full rounded-full border-gray-400 py-4 pl-4 shadow-sm sm:text-sm _md:pl-2"
                  />

                  <span className="absolute inset-y-0 right-0 grid w-10 pr-4 place-content-center _md:pr-1 ">
                    <Unicons.UilMessage size="20" color="#EB5757" />
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500">
                <span className="block sm:inline">All rights reserved.</span>

                <a
                  className="inline-block text-[#EB5757] underline transition hover:text-[#EB5757teal-600/75"
                  href="/">
                  Terms & Conditions
                </a>

                <span>&middot;</span>

                <a
                  className="inline-block text-[#EB5757] underline transition hover:text-[#EB5757teal-600/75"
                  href="/">
                  Privacy Policy
                </a>
              </p>

              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                &copy; 2023 Fudo
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
