import React, { useState } from "react";
import artForms from "../data/artForms.json";

// Import all 14 images
import madhubani from "../data/img/madhubani.jpg";
import tanjore from "../data/img/tanjore.jpg";
import warli from "../data/img/warli.jpg";
import kalighat from "../data/img/kalighat.jpg";
import phad from "../data/img/phad.jpg";
import pattachitra from "../data/img/pattachitra.jpg";
import gond from "../data/img/gond.jpg";
import miniature from "../data/img/miniature.jpg";
import keralaMural from "../data/img/kerala_mural.jpg";
import kalamkari from "../data/img/kalamkari.jpg";
import pichwai from "../data/img/pichwai.jpg";
import bhil from "../data/img/bhil.jpg";
import cheriyal from "../data/img/cheriyal.jpg";
import manjusha from "../data/img/manjusha.jpg";

const images = {
  "madhubani.jpg": madhubani,
  "tanjore.jpg": tanjore,
  "warli.jpg": warli,
  "kalighat.jpg": kalighat,
  "phad.jpg": phad,
  "pattachitra.jpg": pattachitra,
  "gond.jpg": gond,
  "miniature.jpg": miniature,
  "kerala_mural.jpg": keralaMural,
  "kalamkari.jpg": kalamkari,
  "pichwai.jpg": pichwai,
  "bhil.jpg": bhil,
  "cheriyal.jpg": cheriyal,
  "manjusha.jpg": manjusha,
};

function ArtForms() {
  const [selectedArt, setSelectedArt] = useState(null);

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-purple-900 text-center mb-12">
          Traditional Indian Art Forms
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {artForms.map((art) => (
            <div
              key={art.id}
              className="group bg-purple-50 p-6 rounded-2xl shadow-md hover:shadow-2xl transition transform hover:scale-105 cursor-pointer"
              onClick={() => setSelectedArt(art)} // 👉 Open modal on click
            >
              <img
                src={images[art.image]}
                alt={art.name}
                className="h-[300px] w-full object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                {art.name}
              </h3>
              <p className="text-sm text-gray-500 mb-1">
                <span className="font-semibold">Region:</span> {art.region}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                <span className="font-semibold">Origin:</span> {art.origin}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedArt && (
        <div className="fixed inset-0 bg-red-50 bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-white max-w-4xl w-full mx-4 p-6 rounded-2xl relative overflow-y-auto max-h-[100vh]">
            {/* Close button */}
            <button
              onClick={() => setSelectedArt(null)}
              className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-2xl font-bold"
            >
              ✕
            </button>

            {/* Image */}
            <img
              src={images[selectedArt.image]}
              alt={selectedArt.name}
              className="w-full h-[400px] object-cover rounded-lg mb-6"
            />

            {/* Details */}
            <h3 className="text-2xl font-bold text-purple-800 mb-2">
              {selectedArt.name}
            </h3>
            <p className="text-sm text-gray-500 mb-1">
              <span className="font-semibold">Region:</span>{" "}
              {selectedArt.region}
            </p>
            <p className="text-sm text-gray-500 mb-3">
              <span className="font-semibold">Origin:</span>{" "}
              {selectedArt.origin}
            </p>
            <p className="text-gray-700 mb-4">{selectedArt.description}</p>
            <p className="text-purple-700 font-medium italic">
              ❤️ {selectedArt.whyPeopleLove}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default ArtForms;
