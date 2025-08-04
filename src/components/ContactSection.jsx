import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "../lib/utils";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


export const ContactSection = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const form = useRef();

    const handleChange = (e) => {
        setFormData((prev) => ({
          ...prev,
          [e.target.name]: e.target.value,
        }));
      };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            serviceID,
            templateID,
            form.current,
            publicKey
          )
          
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          alert("Message sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Something went wrong. Try again!");
        }
      );

    e.target.reset(); 
  };

    return (
    <section 
    id="contact"
    className="py-24 px-4 relative bg-secondary/30"
    >
        <div className="container mx-auto max-w-5xl">
        <h2 
        className="text-3xl md:text-4xl font-bold text-center mb-4">
            Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            reach out!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">
                    Contact Information
                </h3>

                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a href="mailto:ianmclarencorbett@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                ianmclarencorbett@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">Phone</h4>
                            <a href="tel:+14084661986" className="text-muted-foreground hover:text-primary transition-colors">
                                +1 (408) 466-1986
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary"/>
                        </div>
                        <div>
                            <h4 className="font-medium">Location</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">
                                Los Gatos, California, USA
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pt-8">
                    <h4 className="font-medium mb-4">Connect With Me</h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.linkedin.com/in/ian-corbett-826aa5232/" target="_blank">
                            <Linkedin />
                        </a>
                        <a href="https://www.instagram.com/ian_mclaren_/" target="_blank">
                        < Instagram />
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-xs">
                <h3 className="text-2xl font-semibold mb-6">Send A Message</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label 
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                        >
                            Your Name
                        </label>
                        <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder=""
                         />
                    </div>
                    <div>
                        <label 
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                        >
                            Your Email
                        </label>
                        <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                        placeholder=""
                         />
                    </div>
                    <div>
                        <label 
                        htmlFor="message"
                        className="block text-sm font-medium mb-2"
                        >
                            Your Message
                        </label>
                        <textarea 
                        id="message" 
                        name="message" 
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary  resize-none"
                        placeholder=""
                         />
                    </div>

                    <button 
                    type="submit" 
                    className={cn(
                        "cosmic-button w-full flex items-center justify-center gap-2"
                        )}
                        >
                            Send Message
                        <Send size={16}/>
                    </button>
                </form>
            </div>
        </div>
        </div>
    </section>
    );
};