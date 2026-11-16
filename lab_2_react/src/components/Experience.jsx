function Experience({ theme }) {
    const isDark = theme === 'dark'

    return (
        <section className={`p-6 rounded-xl shadow-lg border ${
            isDark
                ? 'bg-slate-800 text-white border-slate-700'
                : 'bg-white text-slate-900 border-gray-200'
        }`}>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
                Досвід
            </h2>

            <p className={`leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
                Навчальні проєкти з програмування та кібербезпеки.
            </p>
        </section>
    )
}

export default Experience