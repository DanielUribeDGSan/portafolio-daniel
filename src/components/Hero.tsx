
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="bg-white rounded-lg p-8 md:p-12 mb-8 flex flex-col md:flex-row items-center justify-between shadow-sm relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-4 left-8 text-yellow-400 text-xl">○</div>
            <div className="absolute top-12 right-1/3 text-green-400 text-xl">○</div>
            <div className="absolute bottom-8 left-1/4 text-green-400 text-xl">○</div>
            <div className="absolute top-20 right-10 text-yellow-400 rotate-45 text-2xl">□</div>
            <div className="absolute bottom-20 right-1/2 text-blue-400 rotate-12 text-xl">□</div>
            <div className="absolute bottom-10 right-10 text-red-400 text-sm">△</div>


            <div className="max-w-lg z-10">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
                    I'm Daniel Uribe
                </h1>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                    <span className="text-yellow-400">Full Stack</span> Developer
                </h2>
                <p className="text-gray-500 mb-8 leading-relaxed max-w-sm">
                    Desarrollador Full Stack con 7 años de experiencia en aplicaciones web y móviles. Experto en React, TypeScript, Next.js, Node.js, Laravel, Angular y React Native.
                </p>
                <button className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-8 rounded flex items-center gap-2 transition-colors uppercase text-sm">
                    Hire Me <ArrowRight size={16} />
                </button>
            </div>

            <div className="mt-8 md:mt-0 relative z-10 w-full md:w-1/2 flex justify-center items-center perspective-1000 h-80 md:h-96" onMouseMove={(e) => {
                const { currentTarget, clientX, clientY } = e;
                const { left, top, width, height } = currentTarget.getBoundingClientRect();
                const x = (clientX - left) / width - 0.5;
                const y = (clientY - top) / height - 0.5;

                currentTarget.style.setProperty('--mouse-x', x.toString());
                currentTarget.style.setProperty('--mouse-y', y.toString());
            }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.setProperty('--mouse-x', '0');
                    e.currentTarget.style.setProperty('--mouse-y', '0');
                }}
            >
                {/* Icons Container with 3D effect */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 transform-style-3d transition-transform duration-200 ease-out"
                    style={{
                        transform: 'rotateY(calc(var(--mouse-x, 0) * 10deg)) rotateX(calc(var(--mouse-y, 0) * -10deg))'
                    }}
                >
                    {/* React Icon */}
                    <div className="absolute top-0 right-10 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center transform transition-transform duration-500 hover:scale-110"
                        style={{ transform: 'translateZ(50px) translateX(calc(var(--mouse-x, 0) * -20px)) translateY(calc(var(--mouse-y, 0) * -20px))' }}>
                        <img
                            src="/assets/react.svg"
                            alt="React"
                            className="w-full h-full drop-shadow-lg"
                        />
                    </div>

                    {/* JavaScript Icon */}
                    <div className="absolute bottom-10 left-0 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transform transition-transform duration-500 hover:scale-110"
                        style={{ transform: 'translateZ(30px) translateX(calc(var(--mouse-x, 0) * -40px)) translateY(calc(var(--mouse-y, 0) * -30px))' }}>
                        <img
                            src="/assets/js.svg"
                            alt="JavaScript"
                            className="w-full h-full drop-shadow-lg"
                        />
                    </div>

                    {/* Tailwind Icon */}
                    <div className="absolute bottom-0 right-10 w-14 h-14 md:w-20 md:h-20 flex items-center justify-center transform transition-transform duration-500 hover:scale-110"
                        style={{ transform: 'translateZ(20px) translateX(calc(var(--mouse-x, 0) * 30px)) translateY(calc(var(--mouse-y, 0) * 30px))' }}>
                        <img
                            src="/assets/tailwind.svg"
                            alt="Tailwind CSS"
                            className="w-full h-full drop-shadow-lg"
                        />
                    </div>

                    {/* Node.js Icon */}
                    <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 flex items-center justify-center transform transition-transform duration-500 hover:scale-110"
                        style={{ transform: 'translateZ(40px) translateX(calc(var(--mouse-x, 0) * 10px)) translateY(calc(var(--mouse-y, 0) * 40px))' }}>
                        <img
                            src="/assets/nodejs.svg"
                            alt="Node.js"
                            className="w-full h-full drop-shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
