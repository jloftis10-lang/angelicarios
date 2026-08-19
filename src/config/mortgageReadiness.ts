/**
 * Question set and guidance for the /get-prequalified readiness check.
 *
 * WHAT THIS IS NOT — read before editing:
 *
 * Angelica is a Realtor, not a mortgage loan originator. This tool does not
 * prequalify anyone, does not approve anyone, and must never behave as if
 * it does. Specifically it must never:
 *
 *   - state or imply that a visitor qualifies, or would qualify, for a loan
 *   - output a maximum purchase price, loan amount, payment, or rate
 *   - ask for a Social Security number, account numbers, or exact income
 *   - name a specific lender, program, or rate as a recommendation
 *
 * What it DOES is tell a buyer how prepared they are to walk into a
 * lender conversation, and exactly what to gather first. That is genuinely
 * useful, it is squarely within what a Realtor can speak to, and it plays
 * to real underwriting experience rather than pretending to lend.
 *
 * Every piece of guidance below should survive the question "could a
 * licensed lender read this and object?" — keep it to preparation and
 * process, never to eligibility.
 */

export type ReadinessOption = {
  value: string;
  label: string;
  /** How far along this answer indicates the buyer is. Higher = more prepared. */
  points: number;
  /** Concrete next step to show when this answer is chosen. Preparation only. */
  guidance?: string;
};

export type ReadinessQuestion = {
  id: string;
  question: string;
  help?: string;
  options: ReadinessOption[];
};

export const readinessQuestions: ReadinessQuestion[] = [
  {
    id: "stage",
    question: "Where are you in the mortgage conversation so far?",
    options: [
      {
        value: "none",
        label: "Haven't started",
        points: 0,
        guidance:
          "Start here: talking to a lender early costs nothing and is the single fastest way to turn a vague budget into a real one. It does not commit you to anything.",
      },
      {
        value: "informal",
        label: "I've talked to a lender informally",
        points: 1,
        guidance:
          "An informal conversation is a good start, but it isn't something a seller will act on. The next step is a written prequalification or preapproval letter.",
      },
      {
        value: "prequalified",
        label: "I'm prequalified",
        points: 2,
        guidance:
          "Prequalification is based on what you told the lender. Ask what it would take to move to a full preapproval with documents reviewed — it carries considerably more weight on an offer.",
      },
      {
        value: "preapproved",
        label: "I'm preapproved with documents reviewed",
        points: 3,
        guidance:
          "That's the strongest position short of cash. Check the letter's expiration date and ask your lender what would cause it to change.",
      },
      {
        value: "cash",
        label: "I'm paying cash",
        points: 3,
        guidance:
          "You'll want current proof of funds ready to send with an offer. Ask what form the seller's side will expect it in.",
      },
    ],
  },
  {
    id: "credit",
    question: "Do you know where your credit currently stands?",
    help: "You do not need to tell anyone the number — this is just about whether you've looked.",
    options: [
      {
        value: "known",
        label: "Yes, I've checked it recently",
        points: 2,
      },
      {
        value: "rough",
        label: "Roughly, but not recently",
        points: 1,
        guidance:
          "Pull your reports before a lender does. If there's an error on one, you want to find it now — corrections take time you won't have once you're under contract.",
      },
      {
        value: "no",
        label: "No, I haven't looked",
        points: 0,
        guidance:
          "Check all three reports before anything else. You're entitled to free copies, and errors are more common than people expect.",
      },
      {
        value: "concerned",
        label: "I have some concerns about it",
        points: 0,
        guidance:
          "Worth raising with a lender early and directly. Lenders work with a wide range of situations, and knowing what you're dealing with beats guessing at it.",
      },
    ],
  },
  {
    id: "employment",
    question: "How is your income structured?",
    help: "Different income types get documented differently. None of them is a problem — they just need different paperwork.",
    options: [
      { value: "w2", label: "Salaried W-2", points: 2 },
      {
        value: "variable",
        label: "W-2 with bonus, commission, or overtime",
        points: 1,
        guidance:
          "Variable income is usually averaged over a period rather than counted at its current rate. Ask your lender how they'll treat yours, and have the history ready to show.",
      },
      {
        value: "self",
        label: "Self-employed or 1099",
        points: 1,
        guidance:
          "Expect to document more, and expect the timeline to be a little longer. Have full returns and business records assembled before you apply — this is where deals most often slow down.",
      },
      {
        value: "retired",
        label: "Retired or on fixed income",
        points: 1,
        guidance:
          "Award letters and account statements matter here. Ask your lender exactly which sources they can count and what documentation each one needs.",
      },
      {
        value: "mixed",
        label: "A mix of sources",
        points: 1,
        guidance:
          "Multiple income sources means multiple documentation trails. Assemble each one separately rather than trying to summarize them together.",
      },
    ],
  },
  {
    id: "funds",
    question: "Where do your down payment and closing funds stand?",
    options: [
      {
        value: "seasoned",
        label: "Saved, and it's been in my accounts for a while",
        points: 2,
      },
      {
        value: "recent",
        label: "Saved, but recently moved or deposited",
        points: 1,
        guidance:
          "Lenders trace where funds came from. Keep records of any large or recent deposit — an unexplained one is a routine question that becomes a delay if you can't answer it quickly.",
      },
      {
        value: "gift",
        label: "Some or all is coming as a gift",
        points: 1,
        guidance:
          "Gift funds are common and entirely workable, but they have their own paperwork, including a signed letter and a documented transfer. Ask your lender for their exact requirements before the money moves.",
      },
      {
        value: "saving",
        label: "Still saving",
        points: 0,
        guidance:
          "Worth talking to a lender anyway. Knowing the real number you're saving toward — including closing costs, not just down payment — makes the target concrete.",
      },
    ],
  },
  {
    id: "sale",
    question: "Do you need to sell a home before buying?",
    options: [
      { value: "no", label: "No", points: 2 },
      {
        value: "maybe",
        label: "Possibly — I'm weighing it",
        points: 1,
        guidance:
          "This decision shapes everything else about your timing. Worth working through the sequencing before you start touring.",
      },
      {
        value: "yes",
        label: "Yes",
        points: 1,
        guidance:
          "Buying and selling at once is very doable, but the order of operations matters a great deal. Talk through the sequencing early — it affects your offer strategy as much as your finances.",
      },
    ],
  },
  {
    id: "changes",
    question: "Has anything changed in the last two years a lender would ask about?",
    help: "A job change or gap, a move between industries, a past late payment, a collection, or a bankruptcy or foreclosure.",
    options: [
      { value: "no", label: "Nothing I can think of", points: 2 },
      {
        value: "job",
        label: "A job or career change",
        points: 1,
        guidance:
          "Lenders look at a two-year history, though a change within the same field is usually straightforward. Have the dates and offer letters ready rather than reconstructing them later.",
      },
      {
        value: "credit",
        label: "Something on my credit history",
        points: 0,
        guidance:
          "Bring it up with the lender yourself, up front. Most situations have a known path and a known waiting period — what causes problems is discovering it late.",
      },
      {
        value: "unsure",
        label: "I'm not sure",
        points: 0,
        guidance:
          "A lender conversation will surface anything relevant quickly. That's a reason to have it sooner, not later.",
      },
    ],
  },
];

export type ReadinessStage = {
  /** Minimum total points to land in this stage. */
  min: number;
  label: string;
  summary: string;
};

/**
 * Qualitative stages describing how prepared someone is for a *lender
 * conversation*. Deliberately says nothing about whether they qualify.
 */
export const readinessStages: ReadinessStage[] = [
  {
    min: 11,
    label: "Ready to shop",
    summary:
      "You're in good shape to be looking seriously. The remaining items below are about keeping your position clean between now and closing.",
  },
  {
    min: 7,
    label: "Nearly there",
    summary:
      "Most of the pieces are in place. A short list of items stands between you and a letter a seller will take seriously.",
  },
  {
    min: 4,
    label: "Getting ready",
    summary:
      "You've started, and the path from here is clear. Working through the items below before you tour will save you real time later.",
  },
  {
    min: 0,
    label: "Early stages",
    summary:
      "This is a perfectly normal place to start — and starting here, rather than after you've fallen for a house, is the right order.",
  },
];

export function stageFor(points: number): ReadinessStage {
  return readinessStages.find((s) => points >= s.min) ?? readinessStages[readinessStages.length - 1];
}

/**
 * The documents nearly every lender asks for. Generic and stable — this is
 * standard documentation, not a claim about any particular lender's
 * requirements, and the page says so.
 */
export const documentChecklist: { title: string; items: string[] }[] = [
  {
    title: "Identity and income",
    items: [
      "Government-issued photo ID",
      "Recent pay stubs covering the last full month",
      "W-2s and tax returns for the last two years",
      "If self-employed: business returns, and a year-to-date profit and loss",
      "If applicable: award letters for retirement, pension, disability, or Social Security income",
    ],
  },
  {
    title: "Assets",
    items: [
      "Recent statements for every account you'll draw funds from — all pages, including the blank ones",
      "Retirement or brokerage statements if any of those funds are in play",
      "Documentation for any large or unusual recent deposit",
      "If any funds are a gift: the donor's information and a signed gift letter",
    ],
  },
  {
    title: "Everything else",
    items: [
      "Current addresses for the last two years",
      "Details of any other property you own, including taxes and insurance",
      "If you're selling first: the contract or listing information once it exists",
      "Explanations, in writing, for any employment gap or credit event",
    ],
  },
];

/**
 * Things that routinely derail a loan *after* preapproval. This is process
 * guidance a Realtor can absolutely give — it is about not disturbing a
 * file mid-transaction, not about eligibility.
 */
export const keepItCleanRules: string[] = [
  "Don't open new credit — not a card, not a car, not store financing for the furniture you're already picturing.",
  "Don't close old accounts either, even ones you don't use.",
  "Don't change jobs mid-transaction if you can help it. If you must, tell your lender before it happens, not after.",
  "Don't move large sums between accounts without a record of what moved and why.",
  "Don't let a bill go late. A single missed payment can change the terms of a loan already in progress.",
  "Do send your lender anything they ask for the same day. Speed here is the cheapest advantage you have.",
];
