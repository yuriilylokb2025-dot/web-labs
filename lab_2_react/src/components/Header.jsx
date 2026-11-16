function Header({ theme, toggleTheme }) {
    return (
        <header className={`p-8 rounded-xl shadow-lg text-center ${
            theme === "dark"
                ? "bg-slate-900 text-white"
                : "bg-white text-slate-900"
        }`}>
            <h1 className="text-4xl font-bold text-blue-400 mb-3">
                Юрій
            </h1>

            <p className={`text-lg ${
                theme === "dark"
                    ? "text-gray-300"
                    : "text-gray-700"
            }`}>
                Студент спеціальності «Кібербезпека»
            </p>

            <button
                type="button"
                onClick={toggleTheme}
                className="mt-5 px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
                {theme === "dark"
                    ? "☀️ Світла тема"
                    : "🌙 Темна тема"}
            </button>
        </header>
    );
}

export default Header;