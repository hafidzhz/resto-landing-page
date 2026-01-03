"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import AnimatedSection from "./ui/AnimatedSection";

type FormData = {
  name: string;
  phone: string;
  date: Date | null;
  time: string;
  guests: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    date: null,
    time: "",
    guests: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "6281234567890";
    const formattedDate = formData.date ? format(formData.date, "dd/MM/yyyy") : "Not specified";
    const whatsappMessage = `Reservation request:
Name: ${formData.name}
Phone: ${formData.phone}
Date: ${formattedDate}
Time: ${formData.time}
Guests: ${formData.guests || "Not specified"}
Notes: ${formData.message || "None"}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-cream-warm bg-pattern">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <p className="font-[family-name:var(--font-lato)] text-heritage-gold text-sm tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-bold text-forest-deep mb-6">
            Contact <span className="text-heritage-gold">Us</span>
          </h2>
          <div className="w-20 h-[2px] bg-heritage-gold mx-auto mb-6" />
          <p className="font-[family-name:var(--font-lato)] text-forest-deep/70 max-w-2xl mx-auto leading-relaxed">
            Ready to experience Heritage? Whether you're planning a meal, an event, or just have questions, we'd love to hear from you.
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-forest-deep mb-1">
                      Location
                    </h3>
                    <p className="font-[family-name:var(--font-lato)] text-forest-deep/70 text-sm">
                      Heritage Cafe & Resto<br />
                      Jl. Dago Atas No. 123<br />
                      Dago, Bandung 40135
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-forest-deep mb-1">
                      Opening Hours
                    </h3>
                    <p className="font-[family-name:var(--font-lato)] text-forest-deep/70 text-sm">
                      Monday - Sunday: 10am - 10pm<br />
                      <span className="text-heritage-gold">Open every day</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-heritage-gold/10 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-heritage-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-forest-deep mb-1">
                      Reservations
                    </h3>
                    <p className="font-[family-name:var(--font-lato)] text-forest-deep/70 text-sm">
                      Phone: +62 812 3456 7890<br />
                      WhatsApp: +62 812 3456 7890<br />
                      Email: reservations@heritagecafe.id
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <p className="font-[family-name:var(--font-lato)] text-forest-deep/70 text-sm mb-4">
                  Follow us on social media
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-forest-deep flex items-center justify-center hover:bg-heritage-gold transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-forest-deep flex items-center justify-center hover:bg-heritage-gold transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-forest-deep flex items-center justify-center hover:bg-heritage-gold transition-colors"
                    aria-label="WhatsApp"
                  >
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Reservation Form */}
          <AnimatedSection animation="fade-up" delay={200} className="lg:justify-self-end">
            <div
              id="reservation"
              className="bg-white p-6 md:p-8 shadow-lg max-w-lg w-full rounded-lg"
            >
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-forest-deep mb-6">
                Make a Reservation
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="font-[family-name:var(--font-lato)] w-full px-4 py-2.5 border border-forest-deep/20 focus:border-heritage-gold focus:outline-none text-sm rounded"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="WhatsApp Number *"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="font-[family-name:var(--font-lato)] w-full px-4 py-2.5 border border-forest-deep/20 focus:border-heritage-gold focus:outline-none text-sm rounded"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <select
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleChange}
                    className="font-[family-name:var(--font-lato)] w-full px-4 py-2.5 border border-forest-deep/20 focus:border-heritage-gold focus:outline-none text-sm text-forest-deep/60 rounded"
                  >
                    <option value="">Number of Guests *</option>
                    <option value="1-2">1-2 Guests</option>
                    <option value="3-4">3-4 Guests</option>
                    <option value="5-6">5-6 Guests</option>
                    <option value="7-10">7-10 Guests</option>
                    <option value="10+">More than 10</option>
                  </select>
                  <DatePicker
                    selected={formData.date}
                    onChange={(date: Date | null) => setFormData({ ...formData, date })}
                    dateFormat="dd/MM/yyyy"
                    placeholderText="DD/MM/YYYY *"
                    className="font-[family-name:var(--font-lato)] w-full px-4 py-2.5 border border-forest-deep/20 focus:border-heritage-gold focus:outline-none text-sm rounded"
                    required
                  />
                </div>
                <select
                  name="time"
                  required
                  value={formData.time}
                  onChange={handleChange}
                  className="font-[family-name:var(--font-lato)] w-full px-4 py-2.5 border border-forest-deep/20 focus:border-heritage-gold focus:outline-none text-sm text-forest-deep/60 rounded"
                >
                  <option value="">Preferred Time *</option>
                  <option value="morning">Morning (10am - 12pm)</option>
                  <option value="afternoon">Afternoon (12pm - 5pm)</option>
                  <option value="evening">Evening (5pm - 10pm)</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Special Requests (Optional)"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  className="font-[family-name:var(--font-lato)] w-full px-4 py-2.5 border border-forest-deep/20 focus:border-heritage-gold focus:outline-none text-sm resize-none rounded"
                />
                <button
                  type="submit"
                  className="font-[family-name:var(--font-lato)] w-full py-3 bg-heritage-gold text-white hover:bg-sunset-amber transition-colors tracking-wider uppercase text-sm font-medium rounded shadow-lg hover:shadow-xl"
                >
                  Chat on WhatsApp
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>

        {/* Map */}
        <AnimatedSection animation="scale-in" delay={300} className="mt-12 overflow-hidden border border-heritage-gold/20 bg-white/80 shadow-sm rounded-lg">
          <div className="relative w-full aspect-[16/9]">
            <iframe
              title="Heritage Cafe & Resto Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.195100966245!2d107.62302057584259!3d-6.867209393131405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e7d3eead37c7%3A0x27b669b56bc47fed!2sHERITAGE%20CAFE%20%26%20RESTO!5e0!3m2!1sen!2sid!4v1766917499694!5m2!1sen!2sid"
              className="absolute inset-0 h-full w-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
