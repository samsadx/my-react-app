import FeatureSection from "./featureSection";
import { useState } from "react";

function VideoInput() {
    const [videoUrl, setVideoUrl] = useState("");
    const [submittedUrl, setSubmittedUrl] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        if (!videoUrl.startsWith("http")) {
            setError("❌ Please enter a valid URL.");
            setLoading(false);
            return;
        }

        setTimeout(() => {
            setSubmittedUrl(videoUrl);
            setLoading(false);
        }, 1000);
    };

    const getEmbedUrl = (url: string) => {
        if (url.includes("youtube.com/watch?v=")) {
            const videoId = url.split("v=")[1].split("&")[0];
            return `https://www.youtube.com/embed/${videoId}`;
        } else if (url.includes("youtu.be/")) {
            const videoId = url.split("youtu.be/")[1];
            return `https://www.youtube.com/embed/${videoId}`;
        }
        return url;
    };

    return (
        <div style={{ textAlign: "center", padding: "2rem" }}>
            <h2>🎥 Paste Your Video URL</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="url"
                    placeholder="Enter YouTube or any video link"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    style={{
                        width: "60%",
                        padding: "10px",
                        fontSize: "1rem",
                        borderRadius: "8px",
                        border: "1px solid #ccc",
                        marginRight: "10px",
                    }}
                    required
                />
                <button
                    type="submit"
                    style={{
                        padding: "10px 20px",
                        border: "none",
                        borderRadius: "8px",
                        background: "#4f46e5",
                        color: "white",
                        cursor: "pointer",
                    }}
                >
                    Submit
                </button>
            </form>

            {loading && (
                <p style={{ color: "#4f46e5", marginTop: "1rem" }}>⏳ Loading video...</p>
            )}

            {error && (
                <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>
            )}

            {submittedUrl && !loading && !error && (
                <div style={{ marginTop: "2rem" }}>
                    <h3>▶️ Your Video:</h3>
                    {submittedUrl.includes("youtube") ? (
                        <iframe
                            width="560"
                            height="315"
                            src={getEmbedUrl(submittedUrl)}
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <video
                            width="560"
                            height="315"
                            controls
                            src={submittedUrl}
                            style={{ borderRadius: "10px" }}
                            onError={() => {
                                setError("⚠️ Video failed to load. Check the URL.");
                            }}
                        ></video>
                    )}
                </div>
            )}
        </div>
    );
}

function App() {
    return (
        <div>
            <FeatureSection />
            <VideoInput />
        </div>
    );
}

export default App;
