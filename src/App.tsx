import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import ReactPlayer from "react-player";
import { motion } from "framer-motion";

export default function App() {
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [videoUrl, setVideoUrl] = useState<string>("");

    // When file is dropped or selected
    const onDrop = (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];
        if (file) {
            setVideoFile(file);
            setVideoUrl(URL.createObjectURL(file));
        }
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: { "video/*": [] },
        multiple: false,
    });

    const handleRemove = () => {
        setVideoFile(null);
        setVideoUrl("");
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex flex-col items-center justify-center px-6">
            <motion.h1
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl font-extrabold mb-10 text-center"
            >
                🎬 AI Short Video Clipper
            </motion.h1>

            {!videoFile ? (
                <motion.div
                    {...getRootProps()}
                    className={`w-96 h-56 border-2 border-dashed rounded-2xl flex items-center justify-center text-gray-400 cursor-pointer transition ${isDragActive ? "bg-gray-800 border-blue-400" : "bg-gray-900 border-gray-600"
                        }`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <input {...getInputProps()} />
                    <p className="text-center px-4 text-blue-500 font-semibold text-lg hover:text-blue-700 transition-colors duration-200">
                        {isDragActive ? "Drop your video here 🎬" : "Drag & Drop or Click to Upload Video"}
                    </p>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full max-w-xl flex flex-col items-center"
                >
                    <ReactPlayer
                        url={videoUrl}
                        controls
                        width="100%"
                        height="360px"
                        className="rounded-lg shadow-lg mb-4"
                    />
                    <button
                        onClick={handleRemove}
                        className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-xl text-white font-medium transition"
                    >
                        Remove Video
                    </button>
                </motion.div>
            )}
        </div>
    );
}
