/**
 * Copy for /ricketts-iran.
 *
 * Quotes are limited to three verified sources: the March 4, 2026 Senate floor
 * speech (office release), 1011 Now on May 20, 2026, and KETV on July 8, 2026.
 * Do not add the Sept. 24 Channel 3 / KMTV clip, and do not cite Courier Nebraska.
 */

const ROLL = (n) =>
  `https://www.senate.gov/legislative/LIS/roll_call_votes/vote1192/vote_119_2_${String(n).padStart(5, "0")}.htm`;

export const PAGE = {
  eyebrow: "Record vs rhetoric",
  title: "Ricketts on Iran: Keep the pressure on. Here’s his record.",
  dek: "What Sen. Pete Ricketts has said about the Iran conflict, and how he voted on Senate war powers resolutions since February 2026.",
  metaTitle: "Ricketts on Iran: Keep the pressure on. Here’s his record.",
  metaDescription:
    "Since February 2026, Sen. Pete Ricketts has voted no on every Iran war powers resolution he voted on, 13 times. His statements and the Senate roll calls, with sources.",
};

export const SHARE = {
  shareUrl: "https://unicameralwatchdog.com/ricketts-iran",
  shareText:
    "Since February, Sen. Ricketts has voted no on every Iran war powers resolution he voted on, 13 times. Read the record, with sources.",
  shareTitle: "Ricketts on Iran: Keep the pressure on. Here’s his record.",
  shareImage: "/ricketts-iran/opengraph-image",
  downloadName: "watchdog-ricketts-iran.png",
};

export const OG = {
  alt: "Since February, Sen. Ricketts has voted no on every Iran war powers resolution he voted on, 13 times. Read the record, with sources.",
  lines: [
    "No on every Iran war powers",
    "vote he cast: 13 times.",
    "Since February 2026.",
  ],
  cardChip: "Roll 244",
  cardMeta: "Sept. 24, 2026 · Nay",
  cardTitle: "H.Con.Res.89 · rejected 49–50",
  cardNote: "Read the record, with sources.",
};

export const HOME_CARD = {
  href: "/ricketts-iran",
  kicker: "Record vs rhetoric",
  title: "Ricketts on Iran",
  blurb: "No on every war powers vote he cast, 13 times since February. Statements and roll calls, with sources.",
};

export const BANNER = {
  kicker: "U.S. Senate · since February 2026",
  headline: "He has voted no on every Iran war powers resolution he voted on. That is 13 votes.",
  body: "On July 8, 2026, he told KETV: “If Iran wants to pursue aggression instead of peace, then it's time to turn the pressure back up.”",
  sourceLabel: "KETV, July 8, 2026",
  sourceUrl: "https://www.ketv.com/article/nebraska-delegation-back-trump-as-renewed-iran-conflict-raises-pressure/71874668",
};

export const INTRO = [
  "This page sets Sen. Pete Ricketts’s published statements on the Iran conflict next to the Senate roll calls.",
  "The quotations are from his March 4, 2026 floor speech, a May 20 press call reported by 1011 Now, and a July 8 statement to KETV. The votes are from senate.gov.",
];

export const STATEMENTS = [
  {
    id: "floor-march-4",
    kicker: "Senate floor",
    date: "March 4, 2026",
    context:
      "Floor speech. The wording is from his office’s press release of the remarks. C-SPAN has the video.",
    quotes: [
      "A country that chants 'Death to America' and has a nuclear weapon and a missile that can reach us is a danger to our people. This can never be allowed to happen, and that is why we have to destroy their ability to threaten us and their neighbors right now before it gets out of control. If we wait too long, we may not be able to stop it.",
      "And ultimately, we will continue to go after their nuclear facilities that they stubbornly refuse to give up.",
    ],
    sources: [
      {
        label: "Sen. Ricketts press release",
        url: "https://www.ricketts.senate.gov/news/press-releases/ricketts-on-the-senate-floor-honor-noah-tietjens-american-service-members-end-irans-reign-of-terror/",
      },
      {
        label: "C-SPAN",
        url: "https://www.c-span.org/program/us-senate/sen-pete-ricketts-on-iran-conflict/674762",
      },
    ],
  },
  {
    id: "press-may-20",
    kicker: "Press call",
    date: "May 20, 2026",
    context:
      "Comments the day after the Senate’s May 19 war powers vote, reported by 1011 Now (KOLN). A ceasefire was in place in May.",
    quotes: [
      "So the resolution itself is moot in my opinion. And I also believe the president has the ability to defend us, and we cannot allow a country that chants 'death to America' to have a nuclear weapon or a missile to reach the United States.",
    ],
    sources: [
      {
        label: "1011 Now, May 20, 2026",
        url: "https://www.1011now.com/2026/05/20/theres-ceasefire-ricketts-says-vote-against-limiting-trumps-war-powers-iran/",
      },
    ],
  },
  {
    id: "ketv-july-8",
    kicker: "Statement to KETV",
    date: "July 8, 2026",
    context:
      "Statement KETV published July 8, 2026, after the ceasefire collapsed in early July.",
    quotes: [
      "A country that chants 'death to America' can never be allowed to have a nuclear weapon. Iran had plenty of opportunities to agree on a diplomatic solution. It was Iran's illegal and belligerent behavior that ended the ceasefire. If Iran wants to pursue aggression instead of peace, then it's time to turn the pressure back up.",
    ],
    sources: [
      {
        label: "KETV, July 8, 2026",
        url: "https://www.ketv.com/article/nebraska-delegation-back-trump-as-renewed-iran-conflict-raises-pressure/71874668",
      },
    ],
  },
];

export const VOTE_LEAD =
  "Ricketts voted no on all 13 Iran war powers votes he cast since February, including Sept. 24’s 49–50 vote. He did not vote on May 13. He has not voted yes. The two measures that passed, on May 19 and June 23, passed with him voting no.";

export const VOTES = [
  { roll: 46, date: "March 4, 2026", measure: "S.J.Res.104, motion to discharge", result: "Rejected 47–53", ricketts: "Nay", fischer: "Nay" },
  { roll: 58, date: "March 18, 2026", measure: "S.J.Res.118, motion to discharge", result: "Rejected 47–53", ricketts: "Nay", fischer: "Nay" },
  { roll: 69, date: "March 24, 2026", measure: "S.J.Res.116, motion to discharge", result: "Rejected 47–53", ricketts: "Nay", fischer: "Nay" },
  { roll: 79, date: "April 15, 2026", measure: "S.J.Res.123, motion to discharge", result: "Rejected 47–52", ricketts: "Nay", fischer: "Nay" },
  { roll: 88, date: "April 22, 2026", measure: "S.J.Res.114, motion to discharge", result: "Rejected 46–51", ricketts: "Nay", fischer: "Nay" },
  { roll: 113, date: "April 30, 2026", measure: "S.J.Res.184, motion to discharge", result: "Rejected 47–50", ricketts: "Nay", fischer: "Nay" },
  { roll: 118, date: "May 13, 2026", measure: "S.J.Res.163, motion to discharge", result: "Rejected 49–50", ricketts: "Not voting", fischer: "Nay" },
  { roll: 129, date: "May 19, 2026", measure: "S.J.Res.185, motion to discharge", result: "Agreed 50–47", ricketts: "Nay", fischer: "Nay", passed: true },
  { roll: 174, date: "June 16, 2026", measure: "S.J.Res.172, motion to discharge", result: "Rejected 47–48", ricketts: "Nay", fischer: "Nay" },
  { roll: 184, date: "June 23, 2026", measure: "H.Con.Res.86, concurrent resolution (sec. 5(c) WPR)", result: "Agreed 50–48", ricketts: "Nay", fischer: "Nay", passed: true },
  { roll: 192, date: "June 24, 2026", measure: "S.J.Res.185, motion to proceed", result: "Rejected 47–50", ricketts: "Nay", fischer: "Nay" },
  { roll: 207, date: "July 23, 2026", measure: "S.J.Res.180, motion to discharge", result: "Rejected 47–49", ricketts: "Nay", fischer: "Nay" },
  { roll: 216, date: "July 30, 2026", measure: "S.J.Res.181, motion to discharge", result: "Rejected 49–50", ricketts: "Nay", fischer: "Nay" },
  { roll: 244, date: "Sept. 24, 2026", measure: "H.Con.Res.89, concurrent resolution (sec. 5(c) WPR)", result: "Rejected 49–50", ricketts: "Nay", fischer: "Nay" },
].map((vote) => ({ ...vote, url: ROLL(vote.roll) }));

export const VOTE_MENU = {
  label: "Senate vote menu, 119th Congress, 2nd session",
  url: "https://www.senate.gov/legislative/LIS/roll_call_lists/vote_menu_119_2.xml",
};

export const RECORD_NOTES = [
  {
    id: "start",
    text: "The U.S. and Israel began bombing Iran on Feb. 28, 2026. The Congressional Budget Office letter on the cost of the war uses the Pentagon’s name for it, Operation Epic Fury. A press release from Rep. Tom Barrett says the president reported the action to Congress on March 2, that the 60-day war-powers clock ran out May 1, and that the administration told Congress that day the use of force had “concluded,” while operations continued.",
    sources: [
      { label: "Reuters via Al-Monitor, Sept. 24, 2026", url: "https://www.al-monitor.com/originals/2026/09/us-senate-rejects-democratic-led-resolution-curb-trumps-iran-war-powers" },
      { label: "AP via PBS", url: "https://www.pbs.org/newshour/politics/senate-to-vote-on-war-powers-resolution-to-halt-military-action-in-iran-as-gas-prices-upend-midterms" },
      { label: "CBO letter to Rep. Boyle, Sept. 15, 2026", url: "https://www.warren.senate.gov/wp-content/uploads/2026/09/Final-for-posting_Iran-Letter_9-15-26-V2.pdf" },
      { label: "Rep. Tom Barrett press release", url: "http://barrett.house.gov/media/press-releases/barrett-introduces-aumf-limit-wind-down-conflict-iran-and-restore" },
    ],
  },
  {
    id: "law",
    text: "These roll calls are not a declaration of war. Article I, Section 8 gives Congress the power to declare war. The War Powers Resolution requires a report to Congress within 48 hours of introducing forces into hostilities, and withdrawal within 60 days unless Congress declares war or passes a specific authorization. Congress can direct removal by concurrent resolution. The Associated Press has described those concurrent resolutions as measures that do not go to the president and are largely political statements.",
    sources: [
      { label: "U.S. Constitution, Article I, Section 8", url: "https://constitution.congress.gov/browse/article-1/section-8/" },
      { label: "War Powers Resolution, 50 U.S.C. ch. 33", url: "https://www.law.cornell.edu/uscode/text/50/chapter-33" },
      { label: "AP via PBS", url: "https://www.pbs.org/newshour/politics/senate-to-vote-on-war-powers-resolution-to-halt-military-action-in-iran-as-gas-prices-upend-midterms" },
    ],
  },
  {
    id: "aumf",
    text: "H.J.Res.176, the “2026 Authorization for Use of Military Force Against Iran,” was introduced May 7, 2026, by Rep. Tom Barrett and referred to the House Foreign Affairs Committee. As of its GovInfo listing it had no further action. The bill’s own text states: “Congress has not declared war with respect to, or provided any specific statutory authorization for, hostilities involving United States Armed Forces against the Islamic Republic of Iran.”",
    sources: [
      { label: "Congress.gov, H.J.Res.176", url: "https://www.congress.gov/bill/119th-congress/hjres/176" },
      { label: "GovInfo, bill text", url: "https://www.govinfo.gov/content/pkg/BILLS-119hjres176ih/html/BILLS-119hjres176ih.htm" },
    ],
  },
  {
    id: "both-chambers",
    text: "Reuters reported on Sept. 24, 2026, that only one has passed both the House and Senate, and that the White House ignored the result. On June 23 the Senate agreed to H.Con.Res.86, 50–48. Ricketts voted no.",
    sources: [
      { label: "Reuters via Al-Monitor, Sept. 24, 2026", url: "https://www.al-monitor.com/originals/2026/09/us-senate-rejects-democratic-led-resolution-curb-trumps-iran-war-powers" },
      { label: "Senate roll call 184", url: ROLL(184) },
    ],
  },
];

export const CONGRESS = {
  lead: "On May 19, 2026, the Senate agreed to discharge S.J.Res.185, 50–47. Ricketts voted no. The next day he told 1011 Now: “So the resolution itself is moot in my opinion.” He also said he believes “the president has the ability to defend us.”",
  leadSources: [
    { label: "Senate roll call 129", url: ROLL(129) },
    { label: "1011 Now, May 20, 2026", url: "https://www.1011now.com/2026/05/20/theres-ceasefire-ricketts-says-vote-against-limiting-trumps-war-powers-iran/" },
  ],
  after: "KETV reported on July 8 that the ceasefire had collapsed. After that date he voted no on July 23 (S.J.Res.180, rejected 47–49), July 30 (S.J.Res.181, rejected 49–50), and Sept. 24 (H.Con.Res.89, rejected 49–50).",
  afterSources: [
    { label: "KETV, July 8, 2026", url: "https://www.ketv.com/article/nebraska-delegation-back-trump-as-renewed-iran-conflict-raises-pressure/71874668" },
    { label: "Roll call 207, July 23", url: ROLL(207) },
    { label: "Roll call 216, July 30", url: ROLL(216) },
    { label: "Roll call 244, Sept. 24", url: ROLL(244) },
  ],
};

export const COSTS = [
  {
    id: "cbo-total",
    label: "Through Aug. 1, 2026",
    figure: "$38.1 billion",
    detail:
      "Defense Department cost from Feb. 28 to Aug. 1, 2026: munitions, lost equipment, extra flying hours, and fuel. Excludes base repair and costs to other agencies.",
    sourceLabel: "CBO letter to Rep. Boyle, Sept. 15, 2026",
    sourceUrl: "https://www.warren.senate.gov/wp-content/uploads/2026/09/Final-for-posting_Iran-Letter_9-15-26-V2.pdf",
  },
  {
    id: "cbo-month",
    label: "Each month after that",
    figure: "$2–3 billion",
    detail:
      "CBO’s estimate of additional Defense Department cost: about $2 billion a month at the lower pace of May and June, and about $3 billion a month at July’s pace.",
    sourceLabel: "CBO letter to Rep. Boyle, Sept. 15, 2026",
    sourceUrl: "https://www.warren.senate.gov/wp-content/uploads/2026/09/Final-for-posting_Iran-Letter_9-15-26-V2.pdf",
  },
  {
    id: "brown",
    label: "Household fuel",
    figure: "$750+",
    detail:
      "Brown University’s Climate Solutions Lab reported that extra U.S. consumer spending on gasoline and diesel passed $100 billion on Sept. 7, 2026, more than $750 per household. That is a consumer cost, not federal spending.",
    sourceLabel: "Brown University, Sept. 8, 2026",
    sourceUrl: "https://climate.watson.brown.edu/news/2026-09-08/us-energy-costs-iran-war",
  },
];

export const CBO_BREAKDOWN = {
  text: "CBO’s breakdown of the $38.1 billion includes $21.7 billion for munitions ($7.3 billion cruise missiles, $13.1 billion interceptors, $1.2 billion other), $10.4 billion for extra flying hours, $2.7 billion for fuel, and $1.9 billion for lost equipment. CBO says the equipment figure could reach $3.3 billion if the losses are replaced with newer models.",
  sourceLabel: "CBO letter to Rep. Boyle, Sept. 15, 2026",
  sourceUrl: "https://www.warren.senate.gov/wp-content/uploads/2026/09/Final-for-posting_Iran-Letter_9-15-26-V2.pdf",
};

export const SCALE = {
  text: "Stars and Stripes reported on Sept. 15, 2026, that 18 U.S. service members had been killed, more than 800 wounded, and more than 50,000 U.S. troops deployed to the Middle East. Those are national figures.",
  sourceLabel: "Stars and Stripes, Sept. 15, 2026",
  sourceUrl: "https://www.stripes.com/theaters/us/2026-09-15/iran-war-cost-budget-office-22864856.html",
};

export const TIETJENS = {
  text: "Sgt. 1st Class Noah Tietjens, 42, of Bellevue, an Army Reservist with the 103rd Sustainment Command (Des Moines), was killed when an Iranian drone or missile struck an operations center at Port Shuaiba, Kuwait, around March 1, 2026.",
  sources: [
    { label: "WOWT, March 4, 2026", url: "https://www.wowt.com/2026/03/04/ricketts-iran-up-president-decide/" },
    { label: "Nebraska.tv", url: "https://nebraska.tv/news/local/nebraska-army-reservist-among-4-killed-in-iranian-drone-attack-in-kuwait-pentagon-says" },
  ],
};

export const NEBRASKA_NOTE = {
  text: "The Daily Nebraskan reported that some National Guard students at the University of Nebraska–Lincoln withdrew from classes after being deployed.",
  sourceLabel: "Daily Nebraskan",
  sourceUrl: "https://www.dailynebraskan.com/news/u-s-conflict-with-iran-causes-rippling-effects/article_864886a6-7e5a-40cf-ace3-a746a3a0f4f4.html",
};

export const DELEGATION = [
  {
    id: "fischer",
    name: "Sen. Deb Fischer",
    text: "Voted no on all 14 Senate roll calls in the table, including May 13, when Ricketts did not vote. KETV reported on July 8 that she did not respond to a request for comment.",
    quotes: [],
    sources: [
      { label: "Senate vote menu", url: VOTE_MENU.url },
      { label: "KETV, July 8, 2026", url: "https://www.ketv.com/article/nebraska-delegation-back-trump-as-renewed-iran-conflict-raises-pressure/71874668" },
    ],
  },
  {
    id: "bacon",
    name: "Rep. Don Bacon",
    text: "His May 6 and July 8 statements to KETV are below. On Sept. 15, 2026, he voted no on H.Con.Res.93, which the House passed 220–204.",
    quotes: [
      "And there may be some Republicans, to include myself, that would, maybe, that are considering voting for that because I think it's the law. And that would compel the president to have to do an authorization to use force... In the end, I want to follow the law.",
      "We're at the spot where we're going to have to return fire, which means you do need the authorization to use force.",
      "It's time to play hardball... And so we're going to have to do more military operations.",
    ],
    quoteNotes: ["KETV, May 6, 2026", "KETV, May 6, 2026", "KETV, July 8, 2026"],
    sources: [
      { label: "KETV, May 6, 2026", url: "https://www.ketv.com/article/its-the-law-nebraska-congressman-mulls-reigning-in-trump-administration-on-iran-war/71234581" },
      { label: "KETV, July 8, 2026", url: "https://www.ketv.com/article/nebraska-delegation-back-trump-as-renewed-iran-conflict-raises-pressure/71874668" },
      { label: "House roll call 307", url: "https://clerk.house.gov/Votes/2026307" },
    ],
  },
  {
    id: "flood",
    name: "Rep. Mike Flood",
    text: "Statement to KETV, published July 8, 2026. On Sept. 15 he voted no on H.Con.Res.93 (House roll call 307).",
    quotes: [
      "Iran's continued ceasefire violations show they are choosing conflict over peace, and America must respond.",
    ],
    sources: [
      { label: "KETV, July 8, 2026", url: "https://www.ketv.com/article/nebraska-delegation-back-trump-as-renewed-iran-conflict-raises-pressure/71874668" },
      { label: "House roll call 307", url: "https://clerk.house.gov/Votes/2026307" },
    ],
  },
  {
    id: "smith",
    name: "Rep. Adrian Smith",
    text: "Statement to KETV, published July 8, 2026. The station’s excerpt begins mid-sentence. On Sept. 15 he voted no on H.Con.Res.93 (House roll call 307).",
    quotes: [
      "...I will continue to encourage them to keep diplomatic channels open in order to bring an end to this conflict and ensure that Iran can never attain a nuclear weapon.",
    ],
    sources: [
      { label: "KETV, July 8, 2026", url: "https://www.ketv.com/article/nebraska-delegation-back-trump-as-renewed-iran-conflict-raises-pressure/71874668" },
      { label: "House roll call 307", url: "https://clerk.house.gov/Votes/2026307" },
    ],
  },
  {
    id: "osborn",
    name: "Dan Osborn",
    text: "Ricketts’s independent challenger, at the Nebraska State Fair debate on Sept. 1, 2026.",
    quotes: [
      "We have to give Congress back the power to act as a co-equal branch of government, because only Congress can declare war.",
    ],
    sources: [
      { label: "KLIN, Sept. 2, 2026", url: "https://klin.com/2026/09/02/ricketts-osborn-clash-over-tariffs-iran-and-party-loyalty-in-state-fair-debate/" },
    ],
  },
];

export const SOURCES = [
  { label: "KETV: Nebraska delegation statement, July 8, 2026", url: "https://www.ketv.com/article/nebraska-delegation-back-trump-as-renewed-iran-conflict-raises-pressure/71874668" },
  { label: "KETV: Bacon on war powers, May 6, 2026", url: "https://www.ketv.com/article/its-the-law-nebraska-congressman-mulls-reigning-in-trump-administration-on-iran-war/71234581" },
  { label: "Sen. Ricketts: March 4, 2026 floor speech", url: "https://www.ricketts.senate.gov/news/press-releases/ricketts-on-the-senate-floor-honor-noah-tietjens-american-service-members-end-irans-reign-of-terror/" },
  { label: "C-SPAN: March 4, 2026 floor speech", url: "https://www.c-span.org/program/us-senate/sen-pete-ricketts-on-iran-conflict/674762" },
  { label: "1011 Now: May 20, 2026 press call", url: "https://www.1011now.com/2026/05/20/theres-ceasefire-ricketts-says-vote-against-limiting-trumps-war-powers-iran/" },
  { label: "Senate.gov: 119th Congress, 2nd session vote menu", url: VOTE_MENU.url },
  { label: "Senate roll call 129, May 19, 2026 (S.J.Res.185)", url: ROLL(129) },
  { label: "Senate roll call 184, June 23, 2026 (H.Con.Res.86)", url: ROLL(184) },
  { label: "Senate roll call 244, Sept. 24, 2026 (H.Con.Res.89)", url: ROLL(244) },
  { label: "House roll call 307, Sept. 15, 2026 (H.Con.Res.93)", url: "https://clerk.house.gov/Votes/2026307" },
  { label: "Reuters via Al-Monitor, Sept. 24, 2026", url: "https://www.al-monitor.com/originals/2026/09/us-senate-rejects-democratic-led-resolution-curb-trumps-iran-war-powers" },
  { label: "AP via PBS, Sept. 24, 2026", url: "https://www.pbs.org/newshour/politics/senate-to-vote-on-war-powers-resolution-to-halt-military-action-in-iran-as-gas-prices-upend-midterms" },
  { label: "U.S. Constitution, Article I, Section 8", url: "https://constitution.congress.gov/browse/article-1/section-8/" },
  { label: "War Powers Resolution, 50 U.S.C. ch. 33", url: "https://www.law.cornell.edu/uscode/text/50/chapter-33" },
  { label: "H.J.Res.176, Congress.gov", url: "https://www.congress.gov/bill/119th-congress/hjres/176" },
  { label: "H.J.Res.176 text, GovInfo", url: "https://www.govinfo.gov/content/pkg/BILLS-119hjres176ih/html/BILLS-119hjres176ih.htm" },
  { label: "Rep. Tom Barrett: AUMF introduction", url: "http://barrett.house.gov/media/press-releases/barrett-introduces-aumf-limit-wind-down-conflict-iran-and-restore" },
  { label: "CBO letter to Rep. Boyle, Sept. 15, 2026", url: "https://www.warren.senate.gov/wp-content/uploads/2026/09/Final-for-posting_Iran-Letter_9-15-26-V2.pdf" },
  { label: "Brown University Climate Solutions Lab, Sept. 8, 2026", url: "https://climate.watson.brown.edu/news/2026-09-08/us-energy-costs-iran-war" },
  { label: "Stars and Stripes, Sept. 15, 2026", url: "https://www.stripes.com/theaters/us/2026-09-15/iran-war-cost-budget-office-22864856.html" },
  { label: "WOWT: death of Sgt. 1st Class Noah Tietjens, March 4, 2026", url: "https://www.wowt.com/2026/03/04/ricketts-iran-up-president-decide/" },
  { label: "Nebraska.tv: Tietjens", url: "https://nebraska.tv/news/local/nebraska-army-reservist-among-4-killed-in-iranian-drone-attack-in-kuwait-pentagon-says" },
  { label: "Daily Nebraskan: National Guard students", url: "https://www.dailynebraskan.com/news/u-s-conflict-with-iran-causes-rippling-effects/article_864886a6-7e5a-40cf-ace3-a746a3a0f4f4.html" },
  { label: "KLIN: State Fair debate, Sept. 1, 2026", url: "https://klin.com/2026/09/02/ricketts-osborn-clash-over-tariffs-iran-and-party-loyalty-in-state-fair-debate/" },
];
