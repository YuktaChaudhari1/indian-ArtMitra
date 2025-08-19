import { HeroGallery } from "./HeroGallery";
import { Heart, Leaf, Users, Sparkles, Landmark } from "lucide-react";
import { useRef, useEffect, useState } from "react";

const Home = () => {
  const reasons = [
    {
      icon: Sparkles,
      title: "Unique Expression",
      desc: "Every handmade piece tells a personal story, carrying the artist's soul and creativity.",
    },
    {
      icon: Landmark,
      title: "Cultural Connection",
      desc: "Handmade art connects us with traditions and heritage, keeping culture alive.",
    },
    {
      icon: Heart,
      title: "Healing & Mindfulness",
      desc: "Experiencing or creating art helps reduce stress, bringing peace and clarity.",
    },
    {
      icon: Leaf,
      title: "Eco-friendly & Sustainable",
      desc: "Handmade art promotes slow, sustainable living with minimal waste.",
    },
    {
      icon: Users,
      title: "Supports Local Artists",
      desc: "Every purchase uplifts an artisan’s life and encourages local talent.",
    },
  ];

  const testimonials = [
    {
      name: "Aarav S.",
      text: "Painting helped me overcome anxiety. Putting colors on canvas became my meditation.",
      image: "image1.jpg",
    },
    {
      name: "Meera K.",
      text: "Through handmade crafts, I found a way to connect with my grandmother’s traditions.",
      image: "image2.jpg",
    },
    {
      name: "Rohit P.",
      text: "Art gave me confidence. I started selling my sketches and turned passion into income.",
      image: "image3.jpg",
    },
    {
      name: "Ananya R.",
      text: "Whenever I feel stressed, making handmade jewelry brings me peace and joy.",
      image: "image4.jpg",
    },
  ];

  const [index, setIndex] = useState(0);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const interval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollBy({ left: 320, behavior: "smooth" });

        if (
          scrollContainer.scrollLeft + scrollContainer.clientWidth >=
          scrollContainer.scrollWidth
        ) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="relative">
      <HeroGallery />

      {/* Why we love art */}
      <section className="bg-white p-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-bold text-center m-2 p-3 text-purple-950 text-2xl md:text-3xl">
            The Importance of Art in Our Lives
          </h1>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2 text-gray-700 text-justify leading-relaxed font-serif font-medium">
              Art gives us joy, healing, and meaning in life. It inspires us
              with beauty, sparks our imagination, and helps us see the world in
              new ways. Art is also a silent language, allowing us to express
              emotions that words cannot capture. It connects us with our
              culture and traditions, keeping our heritage alive while also
              encouraging creativity and innovation for the future. Experiencing
              or creating art reduces stress, nurtures emotional well-being, and
              brings a sense of peace. At the same time, it unites communities,
              builds belonging, and celebrates diversity. Beyond all this, art
              teaches us patience, focus, and confidence — guiding us toward
              personal growth and self-discovery.
            </div>

            <div className="md:w-1/2 flex justify-center">
              <img
                src="image5.jpg"
                alt="importance of art"
                className="rounded-lg shadow-xl h-[300px] w-[300px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why people love handmade Art */}
      <section className="bg-amber-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-12">
            Why People Love Handmade Art
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {reasons.map((reason, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl transition transform hover:bg-purple-200 hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <reason.icon className="w-8 h-8 text-purple-600 transition-colors group-hover:text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-600">{reason.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-purple-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-purple-900 mb-8 text-center">
            What People Say About Art
          </h2>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide px-2 scroll-smooth"
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[300px] max-w-sm flex-shrink-0 bg-white p-6 rounded-xl shadow-lg snap-center hover:shadow-2xl transition"
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-60 w-full object-cover rounded-lg mb-4"
                />

                <p className="text-lg text-gray-700 italic">"{t.text}"</p>
                <h4 className="mt-4 font-semibold text-purple-800">
                  - {t.name}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Art Forms Section */}
     
    </main>
  );
};

export default Home;
