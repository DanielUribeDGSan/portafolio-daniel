
import { Monitor, FileCode, Mic, Gamepad2, Camera, Megaphone } from "lucide-react";

const services = [
    {
        icon: Monitor,
        title: "Web Development",
        description: "Blog, E-Commerce",
    },
    {
        icon: FileCode,
        title: "UI/UX Design",
        description: "Mobile App, Website Design",
    },
    {
        icon: Mic,
        title: "Sound Design",
        description: "Voice Over, Beat Making",
    },
    {
        icon: Gamepad2,
        title: "Game Design",
        description: "Character Design, Props & Objects",
    },
    {
        icon: Camera,
        title: "Photography",
        description: "Portrait, Product Photography",
    },
    {
        icon: Megaphone,
        title: "Advertising",
        description: "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Vitae Nulla Diam In Ac Dictum A Urna Viverra Morbi.",
    },
];

export default function Services() {
    return (
        <section className="mb-12">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">My Services</h2>
                <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
                    Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia Consequat Duis Enim Velit Mollit. Lorem Ipsum
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div key={service.title} className="bg-white p-8 rounded-lg shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow">
                        <div className="mb-6 text-yellow-400">
                            <service.icon size={48} strokeWidth={1.5} />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                        <p className="text-gray-500 text-sm">{service.description}</p>
                        {service.title === "Advertising" && (
                            <button className="mt-4 text-yellow-500 text-xs font-bold uppercase flex items-center">Order Now &gt;</button>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
