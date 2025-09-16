import React from "react";

export default function RightColumn() {
  return (
    <div style={{ flex: 2, backgroundColor: "#ffffff", padding: "24px", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "24px" }}>
      
      {/* Profile */}
      <div>
        <h2 style={{ marginBottom: "12px" }}>Profile</h2>
        <p style={{ lineHeight: "1.6", color: "#555" }}>
          Versatile frontend developer with strong UI/UX sense. Experienced building responsive web apps with React, Next.js, Tailwind and modern toolchain.
        </p>
      </div>

      {/* Experience */}
      <div>
        <h2 style={{ marginBottom: "12px" }}>Experience</h2>
        <div style={{ marginBottom: "12px", padding: "12px", backgroundColor: "#f0f2f5", borderRadius: "8px" }}>
          <h3 style={{ marginBottom: "6px" }}>Senior Frontend Developer - Awesome Company</h3>
          <p>Built core UI components library, improved...</p>
        </div>
        <div style={{ padding: "12px", backgroundColor: "#f0f2f5", borderRadius: "8px" }}>
          <h3 style={{ marginBottom: "6px" }}>Frontend Developer - Startup X</h3>
          <p>Implemented landing pages, dashboards...</p>
        </div>
      </div>

      {/* Selected Projects */}
      <div>
        <h2 style={{ marginBottom: "12px" }}>Selected Projects</h2>
        <div style={{ display: "flex", gap: "16px" }}>
          <div style={{ flex: 1, padding: "12px", backgroundColor: "#f0f2f5", borderRadius: "8px" }}>
            <h3 style={{ marginBottom: "6px" }}>Project A</h3>
            <p>A short one-line description. <a href="#">Live Code</a></p>
          </div>
          <div style={{ flex: 1, padding: "12px", backgroundColor: "#f0f2f5", borderRadius: "8px" }}>
            <h3 style={{ marginBottom: "6px" }}>Project B</h3>
            <p>A short one-line description. <a href="#">Live Code</a></p>
          </div>
        </div>
      </div>

      {/* Certificates & Courses */}
      <div>
        <h2 style={{ marginBottom: "12px" }}>Certificates & Courses</h2>
        <p>React - Advanced (Platform Name), UX Design Fundamentals, Accessibility Essentials</p>
      </div>

      {/* References */}
      <div>
        <h2 style={{ marginBottom: "12px" }}>References</h2>
        <p>Available on request</p>
      </div>

    </div>
  );
}
