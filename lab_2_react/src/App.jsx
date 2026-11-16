import { useState } from 'react'

import Header from './components/Header'
import Experience from './components/Experience'
import Education from './components/Education'
import Footer from './components/Footer'
import Reviews from './components/Reviews'
import ContactForm from './components/ContactForm'

function App() {
    const [theme, setTheme] = useState(() => {
        const hour = new Date().getHours()

        return hour >= 7 && hour < 21
            ? 'light'
            : 'dark'
    })

    function toggleTheme() {
        setTheme((previousTheme) =>
            previousTheme === 'dark' ? 'light' : 'dark'
        )
    }

    const isDark = theme === 'dark'

    return (
        <div className={`min-h-screen px-4 py-10 sm:px-8 ${
            isDark
                ? 'bg-slate-950 text-white'
                : 'bg-gray-100 text-slate-900'
        }`}>
            <main className="max-w-4xl mx-auto space-y-6">
                <Header
                    theme={theme}
                    toggleTheme={toggleTheme}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Experience theme={theme} />
                    <Education theme={theme} />
                </div>

                <Reviews theme={theme} />

                <Footer theme={theme} />
            </main>

            <ContactForm />
        </div>
    )
}

export default App