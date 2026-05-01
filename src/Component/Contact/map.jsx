import React from "react";

function ContactMapSection() {
    return (
        <section className="bg-white py-16 md:py-20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-8 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-600">
                        Our Location
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold text-slate-900 sm:text-4xl">
                        Find Us on the Map
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                        Visit our office location or connect with our team for project
                        discussions.
                    </p>
                </div>

                <div className="overflow-hidden rounded-[32px] border border-slate-200 shadow-sm">
                    <iframe
                        title="Office Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.2332135213146!2d78.10962487403232!3d9.50279719057867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b013aa74817aecb%3A0xc8e65ee383b8bf3d!2s2%2F315%2C%202%2F315%2C%20Srivilliputhur%20-%20Sivakasi%20-%20Virudhunagar%20-%20Aruppukottai%20-%20Tiruchuli%20-%20Narikudi%20-%20Parthibanoor%20Rd%2C%20Rajiv%20Nagar%2C%20Kanjanaiyakkenpatti%2C%20Aruppukkottai%2C%20Tamil%20Nadu%20626161!5e1!3m2!1sen!2sin!4v1773994817984!5m2!1sen!2sin"
                        width="100%"
                        height="420"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    );
}

export default ContactMapSection;