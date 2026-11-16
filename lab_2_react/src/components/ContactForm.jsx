import { useEffect, useState } from "react";

function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
            <div className="bg-slate-800 text-white p-6 rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto relative">

                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute top-3 right-4 text-2xl text-white"
                    aria-label="Закрити форму"
                >
                    ×
                </button>

                <h2 className="text-2xl font-bold mb-5 text-blue-400">
                    Форма зворотного зв'язку
                </h2>

                <form
                    action="https://formspree.io/f/mrppoyea"
                    method="POST"
                    className="flex flex-col gap-3"
                >
                    <label htmlFor="contact-name">Ім'я:</label>
                    <input
                        id="contact-name"
                        type="text"
                        name="name"
                        required
                        className="p-2 rounded bg-slate-900 border border-slate-600"
                    />

                    <label htmlFor="contact-email">Email:</label>
                    <input
                        id="contact-email"
                        type="email"
                        name="email"
                        required
                        className="p-2 rounded bg-slate-900 border border-slate-600"
                    />

                    <label htmlFor="contact-phone">Телефон:</label>
                    <input
                        id="contact-phone"
                        type="tel"
                        name="phone"
                        required
                        className="p-2 rounded bg-slate-900 border border-slate-600"
                    />

                    <label htmlFor="contact-message">Повідомлення:</label>
                    <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows="4"
                        className="p-2 rounded bg-slate-900 border border-slate-600"
                    />

                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 p-3 rounded-lg font-semibold"
                    >
                        Надіслати
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;