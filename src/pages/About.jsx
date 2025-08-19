import React from "react";
import { Heart, Paintbrush, Handshake, ArrowLeft } from "lucide-react"; // icons
import { Link } from "react-router-dom";

function About() {
  return (
    <main>
      {/* Section 1 - About */}
      <section className="bg-gradient-to-r from-purple-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-4xl font-bold text-purple-900 mb-6">
              About <span className="text-purple-600">ArtMitra</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              ArtMitra is a platform dedicated to{" "}
              <span className="font-semibold">
                preserving India’s rich cultural heritage{" "}
              </span>
              and supporting communities.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We bring together{" "}
              <span className="text-purple-800 font-semibold">
                traditional Indian art forms{" "}
              </span>
              in one place, making it easier for people to discover, learn, and
              celebrate our cultural diversity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Through{" "}
              <span className="text-purple-800 font-semibold">ArtMitra</span>,
              we bring together traditional Indian art forms in one place,
              making it easier for people to discover, learn, and celebrate our
              cultural diversity while supporting local artists.
            </p>

            {/* Mission Highlights */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Paintbrush className="text-purple-600 w-6 h-6" />
                <p className="text-gray-800 font-medium">Celebrate Art</p>
              </div>
              <div className="flex items-center gap-3">
                <Handshake className="text-purple-600 w-6 h-6" />
                <p className="text-gray-800 font-medium">Support Communities</p>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="text-purple-600 w-6 h-6" />
                <p className="text-gray-800 font-medium">Create Impact</p>
              </div>
            </div>

            {/* Call to Action */}
            <button className="mt-8 px-6 py-3 bg-purple-700 text-white font-semibold rounded-lg shadow-md hover:bg-purple-800 transition flex items-center gap-2">
              <Link to="/" className="flex items-center gap-2">
                Back to Home <ArrowLeft className="w-5 h-5" />
              </Link>
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center">
            <img
              src="artmitar.png" // replace with your own
              alt="Art and Community"
              className="bg-red-200 rounded-2xl shadow-lg w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Section 2 - Creator Info + Artwork */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-16"
        style={{ backgroundImage: "url('background.jpeg')" }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/70 via-white/80 to-purple-50/70"></div>

        <div className="relative max-w-5xl mx-auto px-6 text-center text-gray-900">
          {/* Project Info */}
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            About ArtMitra
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            <span className="font-semibold text-purple-800">ArtMitra</span> is a
            platform dedicated to preserving India’s rich cultural heritage by
            showcasing traditional art forms in one place. Our mission is
            simple:
            <span className="font-semibold">
              {" "}
              Celebrate art, empower artists, and spread awareness
            </span>
            .
          </p>

          {/* Creator Info */}
          <h3 className="text-2xl font-semibold text-purple-800 mb-4">
            About the Creator
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Hi, I’m <span className="font-semibold">Yukta Mohan Chaudhari</span>
            , a B.Tech CSE student deeply passionate about both technology and
            art. Beyond coding, I find joy and peace in painting, mandala art,
            and Lipan art, which inspire me to explore creativity in different
            forms. I created ArtMitra as a way to bring together my technical
            skills and artistic interests. This platform is not just a project
            for me—it’s a reflection of my belief that art is a powerful bridge
            between culture, creativity, and community. Through ArtMitra, I aim
            to preserve India’s traditional art forms, make them more accessible
            to people, and encourage everyone to value the beauty of our
            heritage.
          </p>

          {/* My Artworks Section */}
          <h3 className="text-2xl font-semibold text-purple-800 mb-6">
            My Artworks
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
              <img
                src="myart3.jpg" // replace with your painting image
                alt="Painting"
                className="rounded-lg w-full h-100 object-cover"
              />
              {/* <p className="mt-3 text-gray-800 font-medium">Painting</p> */}
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
              <img
                src="myart1.png" // replace with your mandala art
                alt="Mandala Art"
                className="rounded-lg w-full h-100 object-cover"
              />
              {/* <p className="mt-3 text-gray-800 font-medium">Mandala Art</p> */}
            </div>
            <div className="bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition">
              <img
                src="myart2.png" // replace with your lipan art
                alt="Lipan Art"
                className="rounded-lg w-full h-100 object-cover"
              />
              {/* <p className="mt-3 text-gray-800 font-medium">Lipan Art</p> */}
            </div>
          </div>

          {/* Call to Action */}
          <p className="font-medium text-lg italic text-purple-700 mt-8">
            🌸 Join me in celebrating Indian art, supporting artists, and
            keeping these timeless traditions alive for future generations!
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
