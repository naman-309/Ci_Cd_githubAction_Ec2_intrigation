import React, { useState } from "react";

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Contact Form Data:", formData);
        setSubmitted(true);
    };

    const styles = {
        wrapper: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
            backgroundColor: "#0f172a",
            padding: "20px",
            fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            boxSizing: "border-box",
        },
        card: {
            backgroundColor: "#1e293b",
            borderRadius: "12px",
            padding: "36px",
            width: "100%",
            maxWidth: "520px",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.4)",
            border: "1px solid #334155",
            color: "#f8fafc",
        },
        header: {
            marginBottom: "24px",
            textAlign: "center",
        },
        title: {
            fontSize: "26px",
            fontWeight: "700",
            margin: "0 0 8px 0",
            color: "#ffffff",
        },
        subtitle: {
            fontSize: "14px",
            color: "#94a3b8",
            margin: 0,
        },
        fieldGroup: {
            marginBottom: "18px",
            display: "flex",
            flexDirection: "column",
        },
        label: {
            fontSize: "13px",
            fontWeight: "600",
            marginBottom: "6px",
            color: "#cbd5e1",
            letterSpacing: "0.3px",
        },
        input: {
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid #475569",
            backgroundColor: "#0f172a",
            color: "#f8fafc",
            fontSize: "14px",
            outline: "none",
            transition: "border-color 0.2s ease",
        },
        textarea: {
            padding: "10px 14px",
            borderRadius: "8px",
            border: "1px solid #475569",
            backgroundColor: "#0f172a",
            color: "#f8fafc",
            fontSize: "14px",
            outline: "none",
            minHeight: "110px",
            resize: "vertical",
            fontFamily: "inherit",
        },
        button: {
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            backgroundColor: "#3b82f6",
            color: "#ffffff",
            border: "none",
            borderRadius: "8px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
        },
        successBox: {
            padding: "16px",
            backgroundColor: "#064e3b",
            border: "1px solid #059669",
            borderRadius: "8px",
            color: "#a7f3d0",
            textAlign: "center",
            fontSize: "14px",
        },
        resetBtn: {
            marginTop: "12px",
            background: "transparent",
            border: "1px solid #a7f3d0",
            color: "#a7f3d0",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "13px",
        },
    };

    return (
        <div style={styles.wrapper}>
            <div style={styles.card}>
                <div style={styles.header}>
                    <h2 style={styles.title}>Get in Touch</h2>
                    <p style={styles.subtitle}>
                        Have questions or feedback? Drop a message below.
                    </p>
                </div>

                {submitted ? (
                    <div style={styles.successBox}>
                        <p style={{ margin: 0, fontWeight: "600" }}>
                            Message logged to console!
                        </p>
                        <p style={{ margin: "4px 0 0 0", fontSize: "12px" }}>
                            (Open DevTools to view state payload)
                        </p>
                        <button
                            type="button"
                            style={styles.resetBtn}
                            onClick={() => {
                                setSubmitted(false);
                                setFormData({ name: "", email: "", subject: "", message: "" });
                            }}
                        >
                            Send Another
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <div style={styles.fieldGroup}>
                            <label style={styles.label}>Name</label>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Enter your name"
                                value={formData.name}
                                onChange={handleChange}
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.fieldGroup}>
                            <label style={styles.label}>Email</label>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="name@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.fieldGroup}>
                            <label style={styles.label}>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                required
                                placeholder="Brief subject"
                                value={formData.subject}
                                onChange={handleChange}
                                style={styles.input}
                            />
                        </div>

                        <div style={styles.fieldGroup}>
                            <label style={styles.label}>Message</label>
                            <textarea
                                name="message"
                                required
                                placeholder="Write your message here..."
                                value={formData.message}
                                onChange={handleChange}
                                style={styles.textarea}
                            />
                        </div>

                        <button type="submit" style={styles.button}>
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
}