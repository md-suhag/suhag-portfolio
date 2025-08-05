import React from "react";
import ContactForm from "../ContactForm";

const Contact = () => {
  return (
    <section id="contact">
      <h2 className="text-center font-extrabold text-4xl my-16">
        Get In Touch
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-5">
        <div>
          <div className="p-4  py-6 my-6  rounded-lg bg-primary/10">
            <h4 className="">Phone</h4>
            <a href="tel:01766758317">01766758317</a>
          </div>
          <div className="p-4 py-6  my-6  rounded-lg bg-primary/10">
            <h4>Email</h4>
            <a href="mailto:abdussalamsuhag104@gmail.com">
              abdussalamsuhag104@gmail.com
            </a>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
