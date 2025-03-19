import React from 'react';
import PathComponent from './_components/PathComponent';

const FloatingEmoji = ({ emoji, position, gradient }: { emoji: string; position: string; gradient: string }) => {
    return (
        <div
            className={`absolute animate-float opacity-70 text-transparent bg-clip-text ${gradient} ${position}`}
            style={{
                animation: `float 3s ease-in-out infinite`,
                fontSize: '28px'
            }}
        >
            {emoji}
        </div>
    );
};
 
export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-dvh sm:min-h-screen bg-gradient-to-tr from-black via-gray-900 to-blue-900 p-3 sm:p-4 flex items-center justify-center relative overflow-hidden">
            {/* Fun Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-3xl" />
            </div>
            
            {/* Floating Elements with Gradient Text */}
            <div className="absolute inset-0">
                <FloatingEmoji emoji="💭" position="left-[200px] top-1/4" gradient="bg-gradient-to-r from-blue-400 to-violet-500" />
                <FloatingEmoji emoji="✨" position="left-[200px] bottom-1/4" gradient="bg-gradient-to-r from-violet-400 to-purple-500" />
                <FloatingEmoji emoji="💫" position="right-[200px] top-1/4" gradient="bg-gradient-to-r from-blue-500 to-indigo-500" />
                <FloatingEmoji emoji="🌟" position="right-[200px] bottom-1/4" gradient="bg-gradient-to-r from-indigo-400 to-violet-500" />
            </div>
 
            <div className="w-full max-w-md relative backdrop-blur-md bg-white/80 dark:bg-[#0d0d0d] border-none shadow-xl rounded-3xl overflow-hidden">
                <div className="p-4 py-7 sm:p-7">
                    {/* Fun Header */}
                    <div className="text-center mb-8">                                
                        <h1 className="text-3xl font-bold text-white">
                            <PathComponent/>
                        </h1>
                    </div>
                    
                    {children}
                </div>
            </div>
        </div>
    );
}