import React from "react";

const Footer = () => {
  const dt = new Date();
  return (
    <div className="bg-primary text-white text-center py-4">
      © {dt.getFullYear()}. All rights reserved by Varasampath Borra
    </div>
  );
};

export default Footer;
