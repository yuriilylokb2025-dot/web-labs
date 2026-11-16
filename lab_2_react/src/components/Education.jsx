function Education({ theme }) {
    const isDark = theme === 'dark'

    return (
        <section className={`p-6 rounded-xl shadow-lg border ${
            isDark
                ? 'bg-slate-800 text-white border-slate-700'
                : 'bg-white text-slate-900 border-gray-200'
        }`}>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">
                Освіта
            </h2>

            <h3 className={`text-xl font-semibold mb-2 ${
                isDark ? 'text-gray-200' : 'text-gray-800'
            }`}>
                Національний університет «Львівська політехніка»
            </h3>

            <p className={`mb-2 ${
                isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
                Спеціальність: Кібербезпека
            </p>

            <p className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-500'
            }`}>
                Студент
            </p>
        </section>
    )
}

export default Education