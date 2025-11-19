import React from "react";

export default function BackgroundVideoLayout({ children }) {
  return (
    <div className="relative min-h-screen">
      {/* Global Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/pyfgif.mp4" type="video/mp4" />
        <source src="/videos/pyfgif.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Page Content */}
      <div className="relative z-20">
        {children}
      </div>
    </div>
  );
}
