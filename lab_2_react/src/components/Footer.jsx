import { useEffect, useState } from "react";

function Footer({ theme }) {
    const [systemInfo, setSystemInfo] = useState(null);

    const isDark = theme === "dark";

    useEffect(() => {
        const info = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            language: navigator.language
        };

        localStorage.setItem(
            "systemInfo",
            JSON.stringify(info)
        );

        const savedInfo = JSON.parse(
            localStorage.getItem("systemInfo")
        );

        setSystemInfo(savedInfo);
    }, []);

    return (
        <footer className={`text-center p-5 rounded-xl border ${
            isDark
                ? "bg-slate-900 text-gray-400 border-slate-700"
                : "bg-white text-gray-700 border-gray-200"
        }`}>
            <p className="text-sm">
                © 2026 Юрій
            </p>

            {systemInfo && (
                <div className="mt-4 text-sm">
                    <h3 className={`text-lg font-bold mb-3 ${
                        isDark
                            ? "text-gray-200"
                            : "text-gray-900"
                    }`}>
                        Інформація про систему
                    </h3>

                    <p>Браузер: {systemInfo.userAgent}</p>
                    <p>Платформа: {systemInfo.platform}</p>
                    <p>Мова: {systemInfo.language}</p>
                </div>
            )}
        </footer>
    );
}

export default Footer;