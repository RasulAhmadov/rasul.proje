import React, { useState } from "react";
import { Progress, Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";

export default function LeftColumn() {
  const [imageUrl, setImageUrl] = useState(null);

  const handleUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => setImageUrl(e.target.result);
    reader.readAsDataURL(file);
    return false;
  };

  return (
    <div style={{ flex: 1, backgroundColor: "#f5f5f5", padding: "24px", borderRadius: "12px", display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Şəkil yeri */}
      <div
        style={{
          height: "180px",
          width: "180px",
          backgroundColor: "#d9d9d9",
          borderRadius: "12px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
          margin: "0 auto"
        }}
      >
        {imageUrl ? (
          <img src={imageUrl} alt="Profile" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <Upload beforeUpload={handleUpload} showUploadList={false}>
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        )}
      </div>

      {/* Ad və vəzifə */}
      <div style={{ textAlign: "center" }}>
        <h2 style={{ marginBottom: "8px" }}>Ehmedov Resul</h2>
        <p style={{ color: "#555", marginBottom: "16px" }}>Frontend Developer - React & UI/UX</p>
      </div>

      {/* Linklər */}
      <div>
        <h3 style={{ marginBottom: "8px" }}>Contact</h3>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
          <li><a href="mailto:rasul.ahmadov.56@gmail.com">Email</a></li>
          <li><a href="https://github.com/youruser" target="_blank">GitHub</a></li>
          <li><a href="https://linkedin.com/rasul.ahmad" target="_blank">LinkedIn</a></li>
        </ul>
      </div>

      {/* Skills */}
      <div>
        <h3 style={{ marginBottom: "12px" }}>Skills</h3>
        <div style={{ marginBottom: "12px" }}>
          <p>HTML & CSS <span style={{ float: "right" }}>95%</span></p>
          <Progress percent={95} strokeColor="#1890ff" />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <p>JavaScript <span style={{ float: "right" }}>85%</span></p>
          <Progress percent={85} strokeColor="#52c41a" />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <p>React <span style={{ float: "right" }}>80%</span></p>
          <Progress percent={80} strokeColor="#faad14" />
        </div>
      </div>

      {/* Languages */}
      <div>
        <h3 style={{ marginBottom: "8px" }}>Languages</h3>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
          <li>Azerbaijan — Professional</li>
          <li>English — Native</li>
          <li>Turkish — Conversational</li>
        </ul>
      </div>

      {/* Education */}
      <div>
        <h3 style={{ marginBottom: "8px" }}>Education</h3>
        <p>B.Sc. In Computer Science - University Name (2020-2024)</p>
      </div>
    </div>
  );
}
