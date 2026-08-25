import Link from "next/link";

export const metadata = {
  title: "The Trump Account Emails Are Lying About the Deadline — Nebraska Watchdog",
  description:
    "Nebraska families are getting emails pushing them to act fast on the $1,000 Trump Account. The real deadline is the year your child turns 17. Here's what the program is, what the state treasurer says, how to enroll free, and where to report the scam.",
};

const SOURCES = [
  { label: "IRS: Trump Accounts — official program page", url: "https://www.irs.gov/trumpaccounts" },
  { label: "IRS: 4 million children signed up, 1 million claiming the $1,000 pilot contribution", url: "https://www.irs.gov/newsroom/4-million-children-have-been-signed-up-for-trump-accounts-with-1-million-claiming-the-1000-pilot-program-contribution" },
  { label: "IRS: Proposed regulations for the Trump Accounts contribution pilot program", url: "https://www.irs.gov/newsroom/treasury-irs-issue-proposed-regulations-for-trump-accounts-contribution-pilot-program-treasury-department-to-deposit-1000-into-the-account-of-each-eligible-child" },
  { label: "Federal Register: Trump Accounts Contribution Pilot Program (March 9, 2026)", url: "https://www.federalregister.gov/documents/2026/03/09/2026-04534/trump-accounts-contribution-pilot-program" },
  { label: "Nebraska State Treasurer: NEST 529 Plan vs. Trump Account (530A)", url: "https://treasurer.nebraska.gov/csp/trump-account-vs-nest-529.aspx" },
  { label: "Nebraska Attorney General: Consumer Protection", url: "https://ago.nebraska.gov/consumer-protection" },
  { label: "Nebraska Attorney General: Protect The Good Life — report a scam", url: "https://protectthegoodlife.nebraska.gov/contact-us" },
  { label: "TrumpAccounts.gov — the official federal enrollment site", url: "https://trumpaccounts.gov" },
  { label: "NEST 529 — Nebraska's college savings plan", url: "https://www.nest529.com" },
  { label: "CDC / NCHS: Nebraska vital statistics — 24,785 births in 2024", url: "https://www.cdc.gov/nchs/state-stats/states/ne.html" },
  { label: "Nebraska DHHS: Provisional Birth Dashboard", url: "https://dhhs.ne.gov/ProvisionalBirth" },
];

const RED_FLAGS = [
  {
    claim: "You must convert or link your 529 to a Trump Account.",
    truth: "There is no conversion. They are different accounts and can be held at the same time. The state treasurer says so explicitly.",
  },
  {
    claim: "Act now or the $1,000 expires.",
    truth: "The election can be made until December 31 of the year your child turns 17. For a baby born today that is the late 2040s.",
  },
  {
    claim: "Confirm your child's Social Security number to complete enrollment.",
    truth: "Nobody needs to re-collect it. If a third party asks, they are collecting it for themselves.",
  },
  {
    claim: "We can file the paperwork for you, for a fee.",
    truth: "Unsolicited third parties cannot facilitate these transactions at all. Enrollment is free through the IRS or TrumpAccounts.gov.",
  },
];

export default function TrumpAccounts() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">Consumer Protection</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">
            The Trump Account Emails Are Lying About the Deadline
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            Nebraska parents are getting emails and texts urging them to hurry and claim a $1,000 federal
            deposit for their child. The program is real. The urgency is not. You have until the year your
            child turns <span className="font-semibold text-gray-700">seventeen</span> — and the companies
            telling you otherwise are not the government.
          </p>
        </div>

        {/* The headline fact */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">The number that matters</p>
          <p className="text-5xl font-bold leading-none mb-3">17 years</p>
          <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
            Under the federal rules, the election for the $1,000 pilot contribution can be made
            <span className="text-white font-semibold"> until December 31 of the calendar year in which the child turns 17</span>.
            Not this month. Not before the tax deadline. Every message pressuring you to act immediately is
            either badly informed or deliberately lying, and the second one is more common.
          </p>
        </div>

        {/* What it actually is */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">What the program actually is</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            A Trump Account is a <span className="font-semibold">530A</span> — legally structured as an
            individual retirement account. The Treasury deposits $1,000 for children who are U.S. citizens
            with a valid Social Security number, born between January 1, 2025 and December 31, 2028.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            This is the part most of the coverage buries, and it is the part the scams depend on you not knowing:
            <span className="font-semibold"> it is retirement money, not education money.</span> A 529 pays for
            tuition and comes out tax-free for it. A 530A is meant to sit until your child is much older. They
            are different products with different purposes, which is precisely why &ldquo;convert your 529&rdquo;
            works as a pitch on people who have not been told the difference.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            The IRS reports roughly <span className="font-semibold text-gray-700">4 million children enrolled</span>{" "}
            nationally, with about <span className="font-semibold text-gray-700">1 million</span> having claimed
            the $1,000. Nebraska recorded{" "}
            <a href="https://www.cdc.gov/nchs/state-stats/states/ne.html" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">
              24,785 births in 2024 ↗
            </a>, the most recent finalized year. Hold that rate across the four birth years the program
            covers and roughly <span className="font-semibold text-gray-700">100,000 Nebraska children</span>{" "}
            will be eligible — which is also the size of the mailing list somebody is working from.
          </p>
        </div>

        {/* What the state says */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Nebraska&apos;s treasurer says</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            The Nebraska State Treasurer&apos;s office has published its own comparison, and its advice cuts
            directly against the emails going around:
          </p>
          <blockquote className="border-l-4 border-[#c8102e] pl-4 py-1 mb-4">
            <p className="text-sm text-gray-800 leading-relaxed italic">
              &ldquo;You don&apos;t have to choose — you can secure the U.S. Government seed contribution in a
              Trump Account for long-term retirement while actively saving for future education expenses in a
              NEST 529 plan.&rdquo;
            </p>
            <cite className="text-xs text-gray-500 not-italic mt-2 block">
              <a href="https://treasurer.nebraska.gov/csp/trump-account-vs-nest-529.aspx" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">
                Nebraska State Treasurer ↗
              </a>
            </cite>
          </blockquote>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            The office still recommends NEST 529 as the better vehicle for education savings, and there is a
            concrete Nebraska reason for that: account owners can deduct up to
            <span className="font-semibold"> $10,000 a year</span> from state income tax on NEST contributions.
            There is no federal equivalent for a Trump Account.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            One gap worth noting, and the reason this page exists: the state&apos;s comparison carries no scam
            warning, no deadline, and no enrollment instructions. It answers which account is better. It does
            not answer what to do when someone emails you claiming to handle it for you.
          </p>
        </div>

        {/* Who legitimately touches your account */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which names are supposed to be there</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Two names show up in legitimate paperwork and get borrowed by scams, so it is worth knowing
            both on sight.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold">ID.me</span> is the identity verifier the IRS and Treasury
            genuinely use. <span className="font-semibold">Union Bank &amp; Trust</span>, a Lincoln bank, is
            the program manager for Nebraska&apos;s NEST 529 plans — which is why its name appears at the
            bottom of NEST materials. It won that role through a competitive request for proposals; the
            Nebraska Investment Council approved it unanimously, and the change{" "}
            <a href="https://treasurer.nebraska.gov/news/default.aspx?story=532" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">
              cut program management fees by 68% ↗
            </a>. The contract has moved between banks before — Union Bank held it from 2001 to 2010, First
            National Bank of Omaha from 2010 to 2020.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            So seeing either name is not a warning sign by itself. That is exactly why scams use them. The
            question is never whether a familiar name appears — it is
            <span className="font-semibold"> who contacted whom</span>. The state and the IRS do not email
            you asking for your child&apos;s Social Security number, and any company that is neither the
            state, the IRS, nor your own bank has no role in this at all.
          </p>
        </div>

        {/* Red flags */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">What the emails claim, and what is true</h2>
        <div className="space-y-3 mb-8">
          {RED_FLAGS.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="px-5 py-3 bg-[#fff5f5] border-b border-red-100">
                <p className="text-[10px] font-bold tracking-widest text-[#c8102e] uppercase mb-1">They say</p>
                <p className="text-sm text-gray-800 font-medium">{f.claim}</p>
              </div>
              <div className="px-5 py-3">
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Actually</p>
                <p className="text-sm text-gray-700 leading-relaxed">{f.truth}</p>
              </div>
            </div>
          ))}
        </div>

        {/* How to enroll */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to actually do it, for free</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#0a0e1a] text-white text-xs font-bold grid place-items-center">1</span>
              <p className="text-sm text-gray-700 leading-relaxed">
                Go to{" "}
                <a href="https://trumpaccounts.gov" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline font-semibold">TrumpAccounts.gov</a>{" "}
                or file <span className="font-semibold">IRS Form 4547</span> with your 2025 return. Type the
                address yourself rather than clicking a link in an email.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#0a0e1a] text-white text-xs font-bold grid place-items-center">2</span>
              <p className="text-sm text-gray-700 leading-relaxed">
                You will verify your identity through <span className="font-semibold">ID.me</span>. That part is
                legitimate — it is the same service the IRS uses. Seeing ID.me does not mean a message is real,
                though. Scammers name-drop it precisely because it sounds official.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#0a0e1a] text-white text-xs font-bold grid place-items-center">3</span>
              <p className="text-sm text-gray-700 leading-relaxed">
                Social Security is automating enrollment at birth registration, so parents of new babies may
                not need to do anything at all.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#0a0e1a] text-white text-xs font-bold grid place-items-center">4</span>
              <p className="text-sm text-gray-700 leading-relaxed">
                Separately, if education savings is the goal, look at{" "}
                <a href="https://www.nest529.com" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline font-semibold">NEST 529</a>{" "}
                for the Nebraska deduction. You can do both.
              </p>
            </li>
          </ol>
        </div>

        {/* Report it */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">If you got one of these</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-2xl">
            Report it to the Nebraska Attorney General&apos;s Consumer Affairs Response Team. They track
            patterns across the state, which is how warnings get issued before more people are hit — so
            reporting matters even if you did not lose anything.
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1">Phone</p>
              <p className="text-lg font-semibold">402-471-2682</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1">Email</p>
              <p className="text-sm font-semibold break-all">ago.consumer@nebraska.gov</p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-1">Online</p>
              <a href="https://protectthegoodlife.nebraska.gov/contact-us" target="_blank" rel="noreferrer" className="text-sm font-semibold hover:underline">
                ProtectTheGoodLife.<wbr />Nebraska.gov ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom line */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">The short version</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><span className="text-[#c8102e] font-bold">·</span> The $1,000 is real, for citizens born 2025 through 2028 with a Social Security number.</li>
            <li className="flex gap-2"><span className="text-[#c8102e] font-bold">·</span> You have until the year your child turns 17. There is no rush.</li>
            <li className="flex gap-2"><span className="text-[#c8102e] font-bold">·</span> It is a retirement account, not a college fund. A 529 is the college fund.</li>
            <li className="flex gap-2"><span className="text-[#c8102e] font-bold">·</span> Enrolling is free, at TrumpAccounts.gov or on Form 4547. Nobody legitimate charges for it.</li>
            <li className="flex gap-2"><span className="text-[#c8102e] font-bold">·</span> No third party can do it for you, and none of them need your child&apos;s Social Security number.</li>
          </ul>
        </div>

        {/* Sources */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <h2 className="text-sm font-bold text-gray-900 mb-3 tracking-wide uppercase">Sources</h2>
          <ul className="space-y-2">
            {SOURCES.map((s, i) => (
              <li key={i}>
                <a href={s.url} target="_blank" rel="noreferrer" className="text-xs text-gray-600 hover:text-[#c8102e] leading-relaxed">
                  {s.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Link href="/" className="text-sm text-[#c8102e] hover:underline font-semibold">
          ← Back to Nebraska Watchdog
        </Link>

      </div>
    </div>
  );
}
