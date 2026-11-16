import { useEffect, useState } from "react";

function Reviews({ theme }) {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const isDark = theme === "dark";

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts/18/comments"
                );

                if (!response.ok) {
                    throw new Error("Помилка завантаження");
                }

                const data = await response.json();
                setReviews(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchReviews();
    }, []);

    return (
        <section className={`p-6 rounded-xl shadow-lg border ${
            isDark
                ? "bg-slate-800 text-white border-slate-700"
                : "bg-white text-slate-900 border-gray-200"
        }`}>
            <h2 className="text-2xl font-bold mb-5 text-blue-400">
                Відгуки попередніх роботодавців
            </h2>

            {loading && <p>Завантаження відгуків...</p>}

            {error && (
                <p className="text-red-500">{error}</p>
            )}

            {!loading && !error && reviews.map((review) => (
                <div
                    key={review.id}
                    className={`p-4 mb-4 rounded-lg border ${
                        isDark
                            ? "bg-slate-900 border-slate-700"
                            : "bg-gray-50 border-gray-200"
                    }`}
                >
                    <h3 className="text-blue-400 font-semibold">
                        {review.name}
                    </h3>

                    <p className={`text-sm ${
                        isDark
                            ? "text-gray-400"
                            : "text-gray-600"
                    }`}>
                        {review.email}
                    </p>

                    <p className={`mt-2 ${
                        isDark
                            ? "text-gray-200"
                            : "text-gray-800"
                    }`}>
                        {review.body}
                    </p>
                </div>
            ))}
        </section>
    );
}

export default Reviews;