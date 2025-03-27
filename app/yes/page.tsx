"use client";

import Link from "next/link";

export default function YesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-100 to-pink-200 dark:from-red-900 dark:to-pink-950 p-4 overflow-hidden relative">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-red-500 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: Math.random() * 0.7 + 0.3,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      <main className="flex flex-col items-center max-w-3xl w-full text-center z-10 bg-white/80 dark:bg-gray-900/80 p-8 rounded-2xl shadow-xl backdrop-blur-sm">
        <div className="animate-heartbeat mb-6">
          <svg className="w-20 h-20 text-red-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
          </svg>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-red-600 dark:text-red-400">Thanks my Maybe ❤️</h1>
        
        <div className="space-y-6 w-full">
          <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-200">
            Thank you for making me the happiest person sometimes!
          </p>
          
          <div className="py-6 px-4 bg-pink-50 dark:bg-pink-900/30 rounded-lg my-8">
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic">
              "Every moment spent with you is like a beautiful dream that I never want to wake up from."
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded-lg shadow-md">
              <span className="block text-3xl mb-2">😍</span>
              <p className="text-sm text-gray-700 dark:text-gray-300">You make my heart skip a beat</p>
            </div>
            
            <div className="bg-pink-100 dark:bg-pink-900/40 p-4 rounded-lg shadow-md">
              <span className="block text-3xl mb-2">💖</span>
              <p className="text-sm text-gray-700 dark:text-gray-300">Forever and always</p>
            </div>
            
            <div className="bg-red-100 dark:bg-red-900/40 p-4 rounded-lg shadow-md">
              <span className="block text-3xl mb-2">🥰</span>
              <p className="text-sm text-gray-700 dark:text-gray-300">You're my everything</p>
            </div>
          </div>
        </div>
        
        <Link
          href="/"
          className="mt-12 py-3 px-6 bg-red-500 hover:bg-red-600 text-white font-bold rounded-full transition-all transform hover:scale-105 shadow-lg"
        >
          ← Back to Home
        </Link>
      </main>
      
      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        
        @keyframes heartbeat {
          0% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.2);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }
        
        .animate-float {
          animation-name: float;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }
        
        .animate-heartbeat {
          animation: heartbeat 1.5s infinite;
        }
      `}</style>
    </div>
  );
} 