import React, { useState } from "react";
import emailjs from "@emailjs/browser";
function ContactForm({ darkMode }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_nad28jg",
        "template_l8c2ydf",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "2AprgZZKz9oCa-W3O",
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send message");
        },
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      className={`p-8 rounded-2xl border transition-all ${darkMode ? "bg-white/[0.02] border-white/10 shadow-2xl" : "bg-white border-slate-200 shadow-xl"}`}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            className={`block text-sm font-bold mb-2 ${darkMode ? "text-gray-400" : "text-slate-600"}`}
          >
            NAME
          </label>
          <input
            type="text"
            required
            className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${darkMode ? "bg-white/5 border-white/10 text-white focus:border-[#11d3bb]" : "bg-slate-50 border-slate-200 text-slate-900 focus:border-[#11d3bb]"}`}
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label
            className={`block text-sm font-bold mb-2 ${darkMode ? "text-gray-400" : "text-slate-600"}`}
          >
            EMAIL
          </label>
          <input
            type="email"
            required
            className={`w-full px-4 py-3 rounded-xl border outline-none transition-all ${darkMode ? "bg-white/5 border-white/10 text-white focus:border-[#11d3bb]" : "bg-slate-50 border-slate-200 text-slate-900 focus:border-[#11d3bb]"}`}
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div>
          <label
            className={`block text-sm font-bold mb-2 ${darkMode ? "text-gray-400" : "text-slate-600"}`}
          >
            MESSAGE
          </label>
          <textarea
            required
            rows="4"
            className={`w-full px-4 py-3 rounded-xl border outline-none transition-all resize-none ${darkMode ? "bg-white/5 border-white/10 text-white focus:border-[#11d3bb]" : "bg-slate-50 border-slate-200 text-slate-900 focus:border-[#11d3bb]"}`}
            placeholder="Tell me about your project..."
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#f02e65] to-[#d946ef] text-white font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(240,46,101,0.4)] transition-all transform hover:scale-[1.02]"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
