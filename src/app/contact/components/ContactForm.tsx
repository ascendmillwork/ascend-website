"use client";
import { sendContactEmail } from "@/lib/actions/sendEmail";
import { useState, useTransition } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [isPending, startTransition] = useTransition();
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setResponseMessage("");
    startTransition(async () => {
      const res = await sendContactEmail(formData);
      if (res.success) {
        setResponseMessage("Message sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          message: "",
        });
      } else {
        setResponseMessage("Failed to send message. Please try again.");
      }
    });
  };

  return (
    <section className="py-24 my-24 px-4 sm:px-6 md:pl-52 md:pr-28 max-w-7xl m-auto relative z-10 grid grid-cols-1 md:grid-cols-[60%_40%] gap-16 light-dark-bg rounded-lg">
      {/* Left Column: Heading + Form */}
      <div>
        <div className="flex flex-col gap-4 accent-light border-b py-6 mb-10">
          <p className="font-bold text-sm sm:text-base uppercase tracking-widest">
            Contact us
          </p>
          <h3 className="heading-two text-3xl font-bold leading-snug">
            Start Your Hospitality or Multifamily Project Today
          </h3>
          <p>
            Contact our U.S.-based team to learn more about our turnkey
            casegoods and millwork solutions for hotels, multifamily residences,
            and commercial spaces.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
          {/* Name & Phone Row */}
          <div className="flex flex-wrap gap-4">
            <div className="flex-1">
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="contact-phone" className="sr-only">
                Phone Number
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="flex-1 border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="contact-email" className="sr-only">
              Email Address
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Type of Service Dropdown */}
          <div>
            <label htmlFor="contact-service" className="sr-only">
              Type of Service
            </label>
            <select
              id="contact-service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <option value="" disabled>
                Select Type of Project
              </option>
              <option value="Hospitality">
                Hospitality (Hotels & Resorts)
              </option>
              <option value="Multifamily">Multifamily Residences</option>
              <option value="Restaurants">Restaurants & QSR Chains</option>
              <option value="Retail">Retail & Commercial Spaces</option>
              <option value="Custom">Custom Casegoods or Millwork</option>
            </select>
          </div>

          {/* Inquiry Message */}
          <div>
            <label htmlFor="contact-message" className="sr-only">
              Your message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Your message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          <button
            type="submit"
            className="dark-bg cursor-pointer text-white px-6 py-3 rounded-md font-semibold hover:dark-bg  transition"
          >
            {isPending ? "Sending" : "Send Message"}
          </button>
          <p>{responseMessage ? responseMessage : ""}</p>
        </form>
      </div>

      {/* Right Column: Contact Info */}
      <div className="max-w-md space-y-6 accent-light border-l p-6 flex flex-col justify-between">
        <div>
          <div className="space-y-6">
            <h3 className="text-xl mb-4 font-bold">Connect with us</h3>

            <div className="space-y-3">
              <p>
                <span className="uppercase font-bold">Phone</span> <br />
                <a
                  href="tel:+17063406025"
                  className="text-accent hover:underline"
                >
                  +1 706-340-6025
                </a>
              </p>

              <p>
                <span className="uppercase font-bold">Email</span> <br />
                <a
                  href="mailto:info@example.com"
                  className="text-accent hover:underline"
                >
                  hello@ascendmillwork.com
                </a>
              </p>

              <p>
                <span className="uppercase font-bold">Address</span> <br />
                1440 Industrial BLVD, Madison, GA 30650
              </p>
            </div>
          </div>
        </div>

        <div>
          <p>
            Ascend Millwork partners with general contractors, architects, and
            developers to deliver precision-crafted interiors. Whether
            you&apos;re starting a hotel renovation or planning a new
            multifamily property, our in-house team is here to help — from
            concept to completion.
          </p>
        </div>
      </div>
    </section>
  );
}
