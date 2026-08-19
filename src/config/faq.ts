export type FaqItem = { question: string; answer: string };
export type FaqCategory = { category: string; items: FaqItem[] };

export const faqCategories: FaqCategory[] = [
  {
    category: "General",
    items: [
      {
        question: "What areas do you serve?",
        answer:
          "Peachtree City is the primary focus, along with South Metro Atlanta more broadly — including nearby communities like Fayetteville, Trilith, Tyrone, Senoia, Newnan, Sharpsburg, Serenbe, Palmetto, and the rest of Coweta County where it makes sense.",
      },
      {
        question: "Will I work with Angelica directly, or with a team?",
        answer:
          "Directly with Angelica. There's no team hand-off, ISA, or rotating point of contact — when you reach out, you're talking with her.",
      },
      {
        question: "Is there a cost to just talk things through?",
        answer:
          "No. A conversation about your situation, timeline, and options doesn't cost anything and doesn't commit you to anything.",
      },
      {
        question: "Do you only work in Peachtree City itself?",
        answer:
          "Peachtree City is the primary focus, but the service area extends across South Metro Atlanta — including Fayetteville, Trilith, Tyrone, Senoia, Newnan, Sharpsburg, Serenbe, Palmetto, and the rest of Coweta County where it fits.",
      },
      {
        question: "What about Trilith or Fayetteville — are those covered too?",
        answer:
          "Yes. Trilith and Fayetteville are both part of the broader South Metro Atlanta area Angelica works in, alongside Peachtree City itself.",
      },
    ],
  },
  {
    category: "Buying",
    items: [
      {
        question: "How does buyer representation work?",
        answer:
          "Before touring homes, Angelica will walk you through how representation works and what it means for you. Representation terms are discussed and documented up front, consistent with current industry practice — nothing is assumed.",
      },
      {
        question: "Can I browse listings myself?",
        answer:
          "Yes — if a brokerage-approved listings search is available, it's linked from the Buy page. You're also welcome to send Angelica what you're looking for and she'll follow up with matches personally.",
      },
      {
        question: "I'm just starting to look — is that too early to reach out?",
        answer:
          "No. Early conversations are often the most useful ones, since they shape what the rest of the search looks like. There's no pressure to be ready to buy immediately.",
      },
    ],
  },
  {
    category: "Selling",
    items: [
      {
        question: "Can you just give me an instant online home value?",
        answer:
          "Angelica doesn't rely on automated estimates for pricing. Algorithms can't fully account for your home's condition, renovations, lot characteristics, or current competing listings — a home value consultation looks at all of that directly.",
      },
      {
        question: "What does the selling process look like?",
        answer:
          "Broadly: understanding your goals, evaluating your property and the current market, preparing and positioning the home, launching and negotiating offers, and closing. The Sell page walks through each stage.",
      },
      {
        question: "I'm not ready to sell yet — can I still talk to Angelica?",
        answer:
          "Yes. Many sellers start the conversation months before they're actually ready to list, just to understand timing and options.",
      },
    ],
  },
  {
    category: "Relocating",
    items: [
      {
        question: "I'm moving from out of state — can I do most of this remotely?",
        answer:
          "Yes. Angelica works with relocating clients on remote orientation and touring strategy before you're able to visit in person, drawing on her own experience relocating from California.",
      },
      {
        question: "Has Angelica actually relocated herself?",
        answer:
          "Yes — she relocated from Newport Beach, California to Georgia, and previously worked in real estate and held a California real-estate license there.",
      },
      {
        question: "What's it actually like living in Peachtree City?",
        answer:
          "The Peachtree City guide page covers this in more detail — the short version is a planned community built around five villages and a 100+ mile multi-use path network that golf carts, bikes, and pedestrians all share.",
      },
    ],
  },
];
