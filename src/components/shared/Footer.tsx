import React from "react";
import { FacebookIcon, MailIcon } from "lucide-react";
import { LinkedinIcon } from "lucide-react";
import { GithubIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer>
      <div className="flex gap-4 mt-15 social-icon justify-center">
        <a target="_blank" href="https://www.facebook.com/mdas.suhag">
          <FacebookIcon size={15} />
        </a>

        <a target="_blank" href="https://linkedin.com/in/suhag102">
          {" "}
          <LinkedinIcon size={15} />
        </a>
        <a href="mailto:abdussalamsuhag104@gmail.com">
          <MailIcon size={15} />
        </a>
        <a target="_blank" href="https://github.com/md-suhag">
          <GithubIcon size={15} />
        </a>
      </div>
      <p className="text-center text-muted-foreground my-5  text-sm container px-4 mx-auto ">
        &copy; All right reserved. Developed by Md Abdus Salam Suhag.
      </p>
    </footer>
  );
};

export default Footer;
