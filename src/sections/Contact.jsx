import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="px-6 md:px-12 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 bg-[#0d1117]"
    >
      {/* Left Contact Info */}
      <div>
        <h2 className="text-accent text-xl mb-4">
          DO YOU HAVE A PROJECT TO DISCUSS?
        </h2>
        <p className="text-lightText mb-6">GET IN TOUCH 💬</p>

        <div className="mb-4">
          <h4 className="text-white font-semibold">CONTACT</h4>
          <p className="text-link">web.smm.zty@gmail.com</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">SOCIAL MEDIA</h4>
          <div className="flex gap-4 text-xl text-white">
            <FaLinkedinIn />
            <FaFacebookF />
            <FaInstagram />
            <FaGithub />
            <FaTelegram />
          </div>
        </div>
      </div>

      {/* Right Contact Form */}
      <form className="space-y-6">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            className="w-full bg-[#1a1f2b] border border-gray-600 rounded px-4 py-2 text-white"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full bg-[#1a1f2b] border border-gray-600 rounded px-4 py-2 text-white"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            rows="4"
            className="w-full bg-[#1a1f2b] border border-gray-600 rounded px-4 py-2 text-white"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-[#ff3cac] to-[#784ba0] px-6 py-2 rounded-full font-semibold hover:scale-105 transition"
        >
          SEND
        </button>
      </form>
    </section>
  );
};

export default Contact;
