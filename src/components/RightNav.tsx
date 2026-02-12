
import { Home, FileText, GraduationCap, Briefcase, PenTool, MessageSquare } from "lucide-react";

export default function RightNav() {
    return (
        <div className="hidden lg:flex w-[80px] bg-white border-l border-gray-100 flex-col items-center py-10 h-screen sticky top-0 right-0 z-50">
            <div className="mb-auto">
                <button className="w-10 h-10 flex items-center justify-center text-gray-400 hover:text-gray-800 transition-colors mb-4">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </button>
            </div>

            <div className="flex flex-col gap-6 items-center flex-1 justify-center">
                <button className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-gray-800 shadow-md">
                    <Home size={20} />
                    <span className="absolute right-20 bg-black text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">Home</span>
                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-yellow-400 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors group relative">
                    <FileText size={20} />

                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-yellow-400 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors group relative">
                    <GraduationCap size={20} />

                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-yellow-400 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors group relative">
                    <Briefcase size={20} />

                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-yellow-400 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors group relative">
                    <PenTool size={20} />

                </button>
                <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-yellow-400 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors group relative">
                    <MessageSquare size={20} />

                </button>
            </div>

            <div className="mt-auto"></div>
        </div>
    );
}
