import { useState } from "react";
import assets from "../assets/assets";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      access_key: "66ec1873-433f-489e-a4b9-25627d0d012b",
      subject: formData.subject,
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Message sent successfully! We'll get back to you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      toast.error(
        "Something went wrong. Please check your connection and try again."
      );
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
      id="contact-me"
      className="flex flex-col md:flex-row items-center justify-between w-full px-10 md:px-16 pt-[72px] pb-10 dark:text-white text-[#3B3B3B]"
    >
      <div className="flex flex-col justify-center md:w-1/2 space-y-4 md:space-y-6 md:pr-20">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl leading-8 sm:leading-10 md:leading-12 lg:leading-16 font-bold"
        >
          Got a project in <span className="text-[#5044e5]">mind?</span>
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 md:space-y-6"
        >
          <p className="text-sm sm:text-sm md:text-base lg:text-lg font-medium">
            I’m currently open to new opportunities, whether it’s a freelance
            project or a full-time position. Feel free to reach out to me
            anytime — I’d be happy to discuss how we can work together.
          </p>
          <div className="flex items-center gap-2.5 text-sm md:text-base">
            <img alt="Email me" className="w-5 md:w-6" src={assets.mail_icon} />
            <span>azizmsajjad@gmail.com</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm md:text-base">
            <img alt="Email me" className="w-5 md:w-6" src={assets.call_icon} />
            <span>+92 344 2959588</span>
          </div>
          <div className="flex items-center gap-2.5 text-sm md:text-base">
            <img
              alt="Email me"
              className="w-5 md:w-6"
              src={assets.location_icon}
            />
            <span>Karachi</span>
          </div>
        </motion.div>
      </div>

      <div className="w-full md:w-1/2 flex justify-center pt-10 md:pt-0">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full"
        >
          <div>
            <p className="mb-2 text-sm font-medium">Your name</p>
            <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
              <img src={assets.person_icon} alt="" />
              <input
                required
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 text-sm outline-none"
              />
            </div>
          </div>
          <div>
            <p className="mb-2 text-sm font-medium">Your email</p>
            <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
              <img src={assets.email_icon} alt="" />
              <input
                required
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 text-sm outline-none"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <p className="mb-2 text-sm font-medium">Subject</p>
            <div className="flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600">
              <input
                type="text"
                name="subject"
                placeholder="Enter subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full p-3 text-sm outline-none"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <p className="mb-2 text-sm font-medium">Message</p>
            <textarea
              required
              name="message"
              rows={8}
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 text-sm outline-none rounded-lg border border-gray-300 dark:border-gray-600"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mx-auto sm:mx-0 w-28 md:w-36  flex items-center justify-center gap-2 bg-primary text-white text-xs md:text-sm py-3 rounded-full cursor-pointer hover:scale-103 transition-all"
          >
            Submit
            <img
              alt="Submit contact form"
              className="w-3 md:w-4"
              src={assets.arrow_icon}
            />
          </button>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default ContactMe;
