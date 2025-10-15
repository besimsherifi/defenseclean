import React, { useState } from "react";

export default function ContactUs() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
    });

    const onChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        // submit here
    };

    return (
        <section className="w-full bg-white">
            <div className="mx-auto max-w-3xl px-6 py-16">
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold tracking-tight text-black">
                        Get in Touch with Us
                    </h1>
                    <p className="mt-5 text-sm text-neutral-600">
                        Have questions or need assistance? Contact us for inquiries or support
                        related to our cleaning services. We’re here to help make your home sparkle!
                    </p>
                </header>

                <form onSubmit={onSubmit} className="space-y-4 text-sm">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <input
                            name="firstName"
                            placeholder="First name"
                            value={form.firstName}
                            onChange={onChange}
                            className="h-12 rounded-md border border-primary bg-white px-4 outline-none focus:ring-2 focus:secondary"
                        />
                        <input
                            name="lastName"
                            placeholder="Last name"
                            value={form.lastName}
                            onChange={onChange}
                            className="h-12 rounded-md border border-primary bg-white px-4 outline-none focus:ring-2 focus:secondary"
                        />
                    </div>

                    <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        value={form.email}
                        onChange={onChange}
                        className="h-12 w-full rounded-md border border-primary bg-white px-4 outline-none focus:ring-2 focus:secondary"
                    />

                    <input
                        name="phone"
                        placeholder="+1 (555) 000-0000"
                        value={form.phone}
                        onChange={onChange}
                        className="h-12 w-full rounded-md border border-primary bg-white px-4 outline-none focus:ring-2 focus:secondary"
                    />

                    <textarea
                        name="message"
                        placeholder="Leave us a message..."
                        rows={5}
                        value={form.message}
                        onChange={onChange}
                        className="w-full rounded-md border border-primary bg-white p-4 outline-none focus:ring-2 focus:secondary"
                    />

                    <button
                        type="submit"
                        className="w-full rounded-md bg-primary py-3 text-sm font-semibold text-black hover:bg-secondary transition"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
}
