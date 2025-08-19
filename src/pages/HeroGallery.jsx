import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const galleryImages = [
  {
    src: "https://tse2.mm.bing.net/th/id/OIP.W5NreDeSZ32zyE8J7gokMQHaKO?pid=Api&P=0&h=180 ",
    alt: "Abstract purple flowers",
    className: "top-20 left-20",
  },
  {
    src: "https://tse1.mm.bing.net/th/id/OIP.qR2s6MMWU47mvkmxVHvsBwHaHa?pid=Api&P=0&h=180",
    alt: "Purple gradient waves",
    className: "top-32 right-16",
  },
  {
    src: "https://tse4.mm.bing.net/th/id/OIP.NbA0iBwWehFqhEN1tIxnqQHaHa?pid=Api&P=0&h=180",
    alt: "Purple mountain landscape",
    className: "bottom-32 left-16",
  },
  {
    src: "https://tse2.mm.bing.net/th/id/OIP.B_QtHrEUfZlomddBYB9vrAHaHa?pid=Api&P=0&h=180",
    alt: "Purple crystal formations",
    className: "bottom-20 right-20",
  },
  {
    src: "https://tse1.mm.bing.net/th/id/OIP.G0F-PoCZPQ5xrhyw2SUaVAHaE8?pid=Api&P=0&h=180",
    alt: "Neon architecture",
    className: "top-1/2 left-8",
  },
  {
    src: "https://tse4.mm.bing.net/th/id/OIP.GRpWNcQLXwRlJ3F1JQ4PZwHaHa?pid=Api&P=0&h=180",
    alt: "Light streaks",
    className: "top-1/3 right-8",
  },
];

export const HeroGallery = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.8]);
  const galleryOpacity = useTransform(scrollY, [200, 600], [0, 1]);
  const galleryScale = useTransform(scrollY, [200, 600], [0.9, 1]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsScrolled(latest > 200);
    });
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <section className="relative min-h-[200vh] overflow-hidden bg-gradient-to-r from-purple-400 to-red-400 ">
      {/* Hero Section */}
      <motion.div
        className="relative flex items-center justify-center min-h-screen"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Celebrating India’s Art & Heritage
            <br />
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              for artists
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            From the vibrant brushstrokes of Madhubani to the delicate threads
            of Phad and Pattachitra, ArtMitra brings you closer to India’s most
            loved paintings and handmade art forms. Discover their history, feel
            their beauty, and celebrate the creativity that continues to inspire
            generations.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-white text-black px-8 py-6 rounded-lg text-lg font-semibold">
              <Link to="/artforms">Explore ArtForms</Link>
            </button>
            <button className="border border-white/30 text-white px-8 py-6 rounded-lg text-lg font-semibold hover:bg-white/10">
              <Link to="/about">Learn about us</Link>
            </button>
          </motion.div>
        </div>

        {/* Floating Images in Hero */}
        {galleryImages.slice(0, 4).map((image, index) => (
          <motion.div
            key={index}
            className={`absolute w-32 h-24 md:w-48 md:h-36 rounded-2xl overflow-hidden shadow-2xl ${image.className}`}
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{
              opacity: 0.8,
              scale: 1,
              rotate: Math.random() * 20 - 10,
              y: [0, -10, 0],
            }}
            transition={{
              duration: 0.8,
              delay: 0.8 + index * 0.2,
              y: {
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Gallery View */}
      <motion.div
        className="relative p-8"
        style={{ opacity: galleryOpacity, scale: galleryScale }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={`gallery-${index}`}
              className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isScrolled ? 1 : 0, y: isScrolled ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Gallery Overlay Text */}
        <AnimatePresence>
          {isScrolled && (
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-2xl">
                Explore Art
              </h2>
              <p className="text-xl text-white/90 drop-shadow-lg">
                Discover beautiful creations
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{ opacity: useTransform(scrollY, [0, 200], [1, 0]) }}
      >
        <div className="flex flex-col items-center text-white/60">
          <p className="text-sm mb-2">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-px h-8 bg-white/40"
          />
        </div>
      </motion.div>
    </section>
  );
};
