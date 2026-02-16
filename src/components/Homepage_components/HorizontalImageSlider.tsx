import { useState } from "react";

interface ImageItem {
    id: number;
    title: string;
    image: string;
}

const AutoScrollingImageSlider = () => {
    const [isPaused, setIsPaused] = useState(false);

    // Sample data
    const items: ImageItem[] = [
        { id: 1, title: "Mountain Vista", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop" },
        { id: 2, title: "Ocean Waves", image: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=400&h=300&fit=crop" },
        { id: 3, title: "Forest Path", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop" },
        { id: 4, title: "Desert Dunes", image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=400&h=300&fit=crop" },
        { id: 5, title: "City Lights", image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop" },
        { id: 6, title: "Aurora Sky", image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=300&fit=crop" },
    ];

    return (
        <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 py-16 overflow-hidden">
            <h2 className="text-4xl font-bold text-white text-center mb-12">
                Infinite Image Gallery
            </h2>

            <div
                className="relative"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                <div className="flex">
                    {/* First set of items */}
                    <div
                        className="flex gap-6 animate-scroll"
                        style={{
                            animationPlayState: isPaused ? 'paused' : 'running'
                        }}
                    >
                        {items.map((item) => (
                            <div
                                key={`first-${item.id}`}
                                className="relative h-64 w-72 flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer shadow-xl"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                                        Hover to pause scrolling
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Duplicate set for seamless loop */}
                    <div
                        className="flex gap-6 animate-scroll"
                        style={{
                            animationPlayState: isPaused ? 'paused' : 'running'
                        }}
                    >
                        {items.map((item) => (
                            <div
                                key={`second-${item.id}`}
                                className="relative h-64 w-72 flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer shadow-xl"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <h3 className="text-xl font-bold">{item.title}</h3>
                                    <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-1">
                                        Hover to pause scrolling
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
        </div>
    );
};

export default AutoScrollingImageSlider;