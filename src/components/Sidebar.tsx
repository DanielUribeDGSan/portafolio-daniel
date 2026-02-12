
import { Facebook, Linkedin, MessageCircle, Download } from "lucide-react";

export default function Sidebar() {
    return (
        <aside className="w-full h-full bg-white p-6 flex flex-col overflow-y-auto border-r border-gray-100">
            {/* Profile Image & Name */}
            <div className="flex flex-col items-center mb-6">

                <h2 className="text-xl font-bold text-gray-800">Daniel Uribe García</h2>
                <p className="text-gray-500 text-sm mt-1">Desarrollador Full Stack</p>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center gap-3 mb-8">
                {[
                    { Icon: Facebook, id: 'fb', url: '#' },
                    { Icon: Linkedin, id: 'li', url: 'https://linkedin.com' },
                    { Icon: MessageCircle, id: 'mc1', url: 'https://wa.me/524431917018' }
                ].map(({ Icon, id, url }) => (
                    <a key={id} href={url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center text-gray-800 hover:bg-yellow-500 transition-colors">
                        <Icon size={14} strokeWidth={2.5} />
                    </a>
                ))}
            </div>
            {/* Personal Info */}
            <div className="space-y-3 mb-8">
                <div className="flex justify-between items-center text-sm">
                    <span className="bg-yellow-400 px-2 py-0.5 rounded text-gray-800 font-medium text-xs">Experience:</span>
                    <span className="text-gray-800">7 Years</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="bg-yellow-400 px-2 py-0.5 rounded text-gray-800 font-medium text-xs">Location:</span>
                    <span className="text-gray-800">Morelia, México</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="bg-yellow-400 px-2 py-0.5 rounded text-gray-800 font-medium text-xs">Freelance:</span>
                    <span className="text-green-500 font-medium">Available</span>
                </div>
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            {/* Languages */}
            <div className="mb-8">
                <h3 className="text-gray-800 font-bold mb-4">Languages</h3>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Español (Nativo)</span>
                            <span>100%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: "100%" }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Inglés (Técnico)</span>
                            <span>80%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            {/* Skills */}
            <div className="mb-8">
                <h3 className="text-gray-800 font-bold mb-4">Skills</h3>
                <div className="space-y-4">
                    <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>React / Next.js</span>
                            <span>95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>TypeScript</span>
                            <span>90%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: "90%" }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>Node.js</span>
                            <span>85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>PHP / Laravel</span>
                            <span>80%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: "80%" }}></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm text-gray-600 mb-1">
                            <span>React Native</span>
                            <span>85%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                            <div className="bg-yellow-400 h-1.5 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            {/* Extra Skills */}
            <div className="mb-8">
                <h3 className="text-gray-800 font-bold mb-4">Extra Skills</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                    <li className="flex items-center gap-2">
                        <span className="text-yellow-400">❐</span> Vue 3, Angular, Bootstrap
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-yellow-400">❐</span> MongoDB, MySQL, Docker
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-yellow-400">❐</span> AWS, Firebase
                    </li>
                    <li className="flex items-center gap-2">
                        <span className="text-yellow-400">❐</span> Git, CI/CD
                    </li>
                </ul>
            </div>

            <div className="border-t border-gray-200 my-6"></div>

            {/* Download CV */}
            <button className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-3 px-4 rounded flex items-center justify-center gap-2 transition-colors uppercase text-sm">
                Download CV <Download size={16} />
            </button>

        </aside>
    );
}
