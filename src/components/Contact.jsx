import Section from "./Section";
import Heading from "./Heading";
import { serviceImage, serviceImage2, check } from "../assets";
import {
  gymImage1,
  gymImage2,
  gymImage3,
  gymImage4,
  gymImage5,
} from "../assets";

import { fitPulseServices } from "../constants";
import { Gradient } from "./design/Services";
import { ScrollParallax } from "react-just-parallax";
import Notification from "./Notification";

const gymImages = [gymImage1, gymImage2, gymImage3, gymImage4, gymImage5];
const handleSubmit = (e) => {
  e.preventDefault();
};

const Contact = () => {
  return (
    <Section id="contact">
      <div className="container">
        <Heading
          title="JOIN NOW TO GET IN SHAPE."
          text="Take the first step by contacting our customer's service. Ourcustomer's service is available 24/7 and we can't wait to welcome you in our fitness center."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                alt="Smartest AI"
                height={730}
                src={serviceImage}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4 capitalize">We make fitness fun</h4>
              <p className="body-2 mb-[3rem] text-white capitalize">
                when it comes to helping people get into the best shape of their
                lives and reaching their fitness goals safely.
              </p>
              <ul className="body-2">
                {fitPulseServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="flex justify-center items-center min-h-screen bg-gray-100">
              <form
                className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
              >
                <h2 className="text-2xl font-bold mb-4 text-black">Contact Us</h2>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    name="name"
                    // value={formData.name}
                    // onChange={handleChange}
                    placeholder="Your Name"
                  />
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    name="email"
                    // value={formData.email}
                    // onChange={handleChange}
                    placeholder="Your Email"
                  />
                </div>

                <div className="mb-6">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    name="message"
                    // value={formData.message}
                    // onChange={handleChange}
                    placeholder="Your Message"
                    rows="4"
                  ></textarea>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>

            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4 capitalize">Always keep yourself fit</h4>
                <p className="body-2 mb-[2rem] text-n-3 capitalize">
                  FitPulse is the best for you, your friends and your generation
                  for keeping fit.
                </p>

                <ul className="flex items-center justify-between">
                  {gymImages.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={40} height={40} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={serviceImage2}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Gymer"
                />

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute right-[0] bottom-[11rem] w-[12rem] xl:flex hover:cursor-pointer"
                    title="Chat with admin"
                  />
                </ScrollParallax>
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
