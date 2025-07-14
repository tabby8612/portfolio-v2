import { BaselineEmail, ExternalLink, Github, SharpPhoneInTalk } from "@/assets/svgicons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="dark:bg-primary-bg dark:text-white w-10/12 mx-auto my-7 rounded-2xl p-11">
      <h1 className="text-4xl text-primary-color font-primary-font font-medium">Let's Connect</h1>
      <div className="lg:flex gap-30">
        <div
          id="contact-form"
          className="my-6 lg:w-7/12 ">
          <form action="">
            <div className="lg:flex justify-between gap-5 my-5">
              <div id="nameinput">
                <label
                  htmlFor="name"
                  className="block mb-2 font-primary-font tracking-wider after:content-['*'] after:ml-2 after:text-primary-color cursor-pointer after:relative after:-top-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Your Name"
                  className="outline-0 border-1 border-gray-600 shadow py-2 px-3 rounded-lg w-full lg:w-sm text-lg bg-white"
                />
              </div>
              <div
                id="emailinput"
                className="mt-3 lg:mt-0">
                <label
                  htmlFor="email"
                  className="block mb-2 font-primary-font tracking-wider after:content-['*'] after:ml-2 after:text-primary-color cursor-pointer after:relative after:-top-1">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  className="outline-0 border-1 border-gray-600 shadow py-2 px-3 rounded-lg w-full lg:w-sm text-lg bg-white"
                />
              </div>
            </div>
            <div className="lg:flex  w-full justify-between gap-5">
              <div id="addressinput">
                <label
                  htmlFor="address"
                  className="block mb-2 font-primary-font tracking-wider cursor-pointer">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Your Address"
                  className="outline-0 border-1 border-gray-600 shadow py-2 px-3 rounded-lg w-full lg:w-sm text-lg bg-white"
                />
              </div>
              <div
                id="phoneinput"
                className="mt-3">
                <label
                  htmlFor="phone"
                  className="block mb-2 font-primary-font tracking-wider cursor-pointer">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="Your Phone"
                  className="outline-0 border-1 border-gray-600 shadow py-2 px-3 rounded-lg w-full lg:w-sm text-lg bg-white"
                />
              </div>
            </div>
            <div className="flex w-full justify-between gap-5 my-5 ">
              <div
                id="subjectinput"
                className=" w-full">
                <label
                  htmlFor="subject"
                  className="block mb-2 font-primary-font tracking-wider after:content-['*'] after:ml-2 after:text-primary-color cursor-pointer after:relative after:-top-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  className="outline-0 border-1 border-gray-600 shadow py-2 px-3 rounded-lg text-lg lg:w-[49.3rem] w-full object-contain bg-white"
                />
              </div>
            </div>
            <div className="flex w-full justify-between gap-5 my-5 ">
              <div
                id="messageinput"
                className="w-full">
                <label
                  htmlFor="message"
                  className="block mb-2 font-primary-font tracking-wider after:content-['*'] after:ml-2 after:text-primary-color cursor-pointer after:relative after:-top-1">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows={5}
                  className="outline-0 border-1 border-gray-600 shadow py-2 px-3 rounded-lg text-lg lg:w-[49.3rem] w-full object-contain bg-white"
                />
              </div>
            </div>
            <button className="py-3 px-6 bg-primary-color font-primary-font rounded-lg text-lg flex items-center justify-center gap-3">Submit {<ExternalLink className="inline-block w-5" />}</button>
          </form>
        </div>
        <div
          id="contact-info"
          className="lg:w-1/4 my-auto lg:mx-auto">
          <div className="flex gap-3 items-center">
            <SharpPhoneInTalk className="text-6xl p-4 dark:bg-gray-600 bg-white rounded-lg text-primary-color my-3" />
            <div>
              <p className="text-gray-400 text-sm font-primary-font">Phone</p>
              <p className="text-md font-primary-font font-medium">+92 313-3933083</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <BaselineEmail className="lg:text-6xl text-7xl p-4 dark:bg-gray-600  bg-white rounded-lg text-primary-color my-3" />
            <div>
              <p className="text-gray-400 text-sm font-primary-font">Email</p>
              <p className="text-md font-primary-font font-medium wrap-anywhere">admin@tabishsajwani.com</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Github className="text-6xl p-4 dark:bg-gray-600  bg-white rounded-lg text-primary-color my-3" />
            <div>
              <p className="text-gray-400 text-sm font-primary-font">Github</p>
              <p className="text-md font-primary-font font-medium">tabby8612</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <SharpPhoneInTalk className="text-6xl p-4 dark:bg-gray-600  bg-white rounded-lg text-primary-color my-3" />
            <div>
              <p className="text-gray-400 text-sm font-primary-font">Phone</p>
              <p className="text-md font-primary-font font-medium">+92 313-3933083</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
