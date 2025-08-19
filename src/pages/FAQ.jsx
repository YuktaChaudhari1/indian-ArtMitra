import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What is Indian traditional art?",
    answer: `Indian traditional art refers to the diverse and ancient art forms that have been passed down through generations in India. These include paintings, carvings, textile designs, and crafts such as Madhubani, Warli, Pattachitra, Kalamkari, and Lipan art. Each region of India has its own unique artistic style, deeply connected with its history, culture, and local traditions. 

These artworks are not just decorative; they often tell stories of mythology, nature, festivals, and daily life. They reflect the beliefs, customs, and spiritual values of the people, making them an essential part of India’s cultural identity.`,
  },
  {
    question: "Why is preserving traditional art important?",
    answer: `Preserving traditional art is important because it keeps our cultural identity alive. These art forms connect us with our ancestors and showcase the creativity and knowledge of past generations. Without preservation, we risk losing centuries of wisdom, symbolism, and storytelling that these artworks carry. 

Traditional art also provides livelihood opportunities for local artisans, especially in rural areas. By protecting and promoting these art forms, we not only support artists financially but also inspire future generations to take pride in their heritage and keep it alive.`,
  },
  {
    question: "What is Madhubani painting?",
    answer: `Madhubani painting, also called Mithila art, is a folk painting tradition from Bihar, India. It is famous for its use of bright natural colors, intricate patterns, and themes inspired by nature, mythology, and festivals. Artists often use fingers, twigs, or matchsticks instead of brushes to create fine details. 

These paintings are usually done on walls, handmade paper, and cloth, making them both decorative and meaningful. Madhubani art is also symbolic, as each design element—such as fish, peacocks, and the sun—represents prosperity, love, and spiritual connection.`,
  },
  {
    question: "What is Lipan art?",
    answer: `Lipan art, also known as mud and mirror work, is a traditional craft from the Kutch region of Gujarat. Artists use clay, camel dung, and small mirrors to create beautiful wall decorations, often seen in village homes. The patterns usually include geometric designs, flowers, and peacocks, symbolizing nature and local traditions. 

The shining mirrors reflect light during the day and oil lamp glow at night, giving homes a magical appearance. Beyond its beauty, Lipan art represents the close relationship between art, environment, and community living.`,
  },
  {
    question: "What is Mandala art?",
    answer: `Mandala art is a spiritual and symbolic design made of intricate circular patterns. The word “mandala” means circle in Sanskrit, and it represents balance, wholeness, and harmony. Traditionally, mandalas are used in meditation and rituals in Hinduism and Buddhism. 

In modern times, mandala art has become a popular form of creative expression and stress relief. Creating or coloring mandalas helps people focus, relax, and find inner peace. This art form beautifully connects creativity with mindfulness.`,
  },
  {
    question: "How can I start learning traditional art?",
    answer: `Learning traditional art can be both fun and fulfilling. A great way to begin is by exploring online tutorials, books, and workshops that teach simple designs and gradually move towards complex patterns. Many artists also offer step-by-step classes on platforms like YouTube or Instagram. 

You can start by practicing with basic shapes and natural colors, then experiment with your own creativity. Most importantly, patience and regular practice will help you improve and develop your own unique style.`,
  },
  {
    question: "Are traditional art forms still relevant today?",
    answer: `Yes, traditional art forms remain very relevant in modern times. Many designers, fashion brands, and home decorators are inspired by these art styles and use them in contemporary products such as clothes, jewelry, wallpapers, and even digital art. 

At the same time, these arts continue to hold cultural and spiritual importance, especially during festivals and rituals. They remind us of our roots while blending beautifully with modern lifestyles.`,
  },
  {
    question: "How does ArtMitra support artists?",
    answer: `ArtMitra works as a platform to showcase the beauty and value of India’s traditional art forms. By highlighting different styles, sharing their history, and telling the stories of artists, it spreads awareness among people who might not otherwise discover these treasures. 

The platform also helps artists connect with wider audiences, gain appreciation, and receive support for their work. In this way, ArtMitra not only preserves culture but also encourages young artists to continue the legacy.`,
  },
  {
    question: "Can children learn these art forms?",
    answer: `Yes, traditional art forms are perfect for children to learn! Many styles, such as Warli, Madhubani, and Mandala, start with simple patterns and shapes that are easy for kids to understand. Practicing these arts helps children improve their creativity, focus, and patience. 

It also introduces them to Indian culture and heritage in an engaging way. Many schools and workshops now include traditional art as part of creative activities for children.`,
  },
  {
    question: "How can I support Indian traditional artists?",
    answer: `There are many ways to support Indian artists. You can buy authentic handmade artwork directly from artisans instead of factory-made imitations. Sharing their work on social media, attending exhibitions, and recommending them to others also helps spread awareness. 

Another way is to participate in workshops or donate to organizations that work to preserve traditional art. Every small step, whether financial or social, contributes to keeping these beautiful art forms alive for future generations.`,
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-purple-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-900 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-5 cursor-pointer border border-purple-100"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-purple-600" />
                ) : (
                  <ChevronDown className="text-purple-600" />
                )}
              </div>
              {openIndex === index && (
                <p className="mt-3 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
