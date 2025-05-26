import React from "react";

type Props = {};

const Contact = (props: Props) => {
  return (
    <section className="bg-mainLightGray min-h-[90vh] w-full text-gray-300 flex justify-center items-center pt-28 lg:pt-0">
      <div className=" max-w-2xl mx-auto flex flex-col w-full gap-9 p-4 pb-0">
        <div className="flex flex-col gap-3">
          <h1 className="border-b-4 border-mainGoldColor w-fit text-2xl md:text-4xl font-bold">
            Contact Me
          </h1>
          <p className="text-gray-300">
            // Feel free to submit the form below or shoot me an email -{" "}
            <span className="font-bold">charlpayne1@gmail.com</span>
          </p>
        </div>
        <form
          method="POST"
          action="https://getform.io/f/nadoqgxb"
          className="flex flex-col max-w-2xl w-full gap-3"
        >
          <input
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            name="message"
            rows={10}
            placeholder="Message"
          ></textarea>
          <button className="text-mainGoldColor hover:text-white hover:font-bold border-2 hover:bg-mainGoldColor hover:border-mainGoldColor px-4 py-3 my-8 mx-auto border-mainGoldColor">
            Let's Colaborate
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
