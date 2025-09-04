import React from "react";
import ContactForm from "../ContactForm";
import * as motion from "motion/react-client";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="text-center font-extrabold text-4xl my-16">
        Get In Touch
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className=""
        >
          <div className="p-4  py-6 my-6  rounded-lg bg-primary/10">
            <h4 className="">Phone</h4>
            <a className="text-sm" href="tel:01766758317">
              01766758317
            </a>
          </div>
          <div className="p-4 py-6  my-6  rounded-lg bg-primary/10 overflow-clip">
            <h4>Email</h4>
            <a
              className="text-[12px] sm:text-sm"
              href="mailto:abdussalamsuhag104@gmail.com"
            >
              abdussalamsuhag104@gmail.com
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
