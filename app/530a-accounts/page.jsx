import Link from "next/link";

export const metadata = {
  title: "That $1,000 Email About Your Kid Is Real. Read the Footnotes. — Nebraska Watchdog",
  description:
    "Nebraska parents are getting emails about a $1,000 federal deposit for their children under the new 530A accounts. One we reviewed is genuinely from ID.me, the government's identity vendor. It is also advertising, and three things it leaves out change the picture.",
};

const SOURCES = [
  { label: "IRS: official program page for the new child accounts", url: "https://www.irs.gov/trumpaccounts" },
  { label: "IRS: 4 million children signed up, 1 million claiming the $1,000 pilot contribution", url: "https://www.irs.gov/newsroom/4-million-children-have-been-signed-up-for-trump-accounts-with-1-million-claiming-the-1000-pilot-program-contribution" },
  { label: "Federal Register: Contribution Pilot Program rules (March 9, 2026)", url: "https://www.federalregister.gov/documents/2026/03/09/2026-04534/trump-accounts-contribution-pilot-program" },
  { label: "Nebraska State Treasurer: NEST 529 compared with the new 530A accounts", url: "https://treasurer.nebraska.gov/csp/trump-account-vs-nest-529.aspx" },
  { label: "NPR: Michael and Susan Dell pledge $6.25 billion to fund the accounts", url: "https://www.npr.org/2025/12/03/nx-s1-5628402/michael-and-susan-dell-pledge-6-25-billion-to-fund-trump-accounts" },
  { label: "CNBC: Dell pledge covers 25 million children aged 10 and under", url: "https://www.cnbc.com/2025/12/02/michael-susan-dell-trump-accounts.html" },
  { label: "National Women's Law Center: 530A accounts FAQ", url: "https://nwlc.org/resource/530a-accounts-also-known-as-trump-accounts-faq/" },
  { label: "Nebraska Attorney General: Consumer Protection", url: "https://ago.nebraska.gov/consumer-protection" },
  { label: "Nebraska Attorney General: Protect The Good Life — report a scam", url: "https://protectthegoodlife.nebraska.gov/contact-us" },
  { label: "NEST 529 — Nebraska's college savings plan", url: "https://www.nest529.com" },
  { label: "CDC / NCHS: Nebraska vital statistics — 24,785 births in 2024", url: "https://www.cdc.gov/nchs/state-stats/states/ne.html" },
  { label: "Nebraska State Treasurer: Union Bank & Trust named NEST program manager, fees cut 68%", url: "https://treasurer.nebraska.gov/news/default.aspx?story=532" },
];

const FOOTNOTES = [
  {
    says: "A “New Government Savings Program”, with a $250 deposit listed underneath it",
    truth:
      "The $1,000 is federal. The $250 is not. It comes from a $6.25 billion private pledge by Michael and Susan Dell, announced in December 2025, covering the first 25 million children aged 10 and under. The email's footnote does not say where the money comes from.",
  },
  {
    says: "“Limited-time”",
    truth:
      "True, but not because of a government deadline. The private money is capped at 25 million accounts. The federal $1,000 has no such rush — the election can be made until December 31 of the year your child turns 17.",
  },
  {
    says: "“Children 10 and under may qualify for a $250 deposit”",
    truth:
      "There is an income test the email does not mention. Per Invest America, the private funds cover children in ZIP codes with a median income of $150,000 or less. Plenty of Nebraska families qualify. Some do not, and would not learn that from this email.",
  },
  {
    says: "“Your child can access funds at age 18”",
    truth:
      "Accurate, with a caveat worth knowing. Withdrawals are locked until January 1 of the year the child turns 18. After that, IRA rules apply — a general withdrawal is taxed as income plus a 10% penalty. Education costs and a first home up to $10,000 are penalty-free exceptions, which is what “education, home, and more” is pointing at.",
  },
];

export default function ChildAccounts() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">Consumer Protection</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">
            That $1,000 Email About Your Kid Is Real. Read the Footnotes.
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            Nebraska parents are receiving emails about a $1,000 federal deposit for their children. We checked
            one. It is genuinely from <span className="font-semibold text-gray-700">ID.me</span> — the company
            the IRS uses to verify your identity — and it passes every authentication check. It is also
            advertising, and three things it leaves out change what you are actually being offered.
          </p>
        </div>

        {/* Naming note */}
        <div className="bg-white rounded-2xl border border-gray-200 p-4 mb-8 flex items-start gap-3">
          <span className="text-[#c8102e] shrink-0 mt-0.5">§</span>
          <p className="text-xs text-gray-500 leading-relaxed">
            These accounts are named for the section of the Internal Revenue Code that created them —
            <span className="font-semibold text-gray-700"> 530A accounts</span>. They are marketed federally
            and by private companies as &ldquo;Trump Accounts&rdquo;. We use the statutory name here; if you
            arrived searching the other one, you are in the right place.
          </p>
        </div>

        {/* Authenticity */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">We checked the headers</p>
          <div className="font-mono text-sm space-y-1 mb-4">
            <p><span className="text-gray-500">from</span> &nbsp;&nbsp;&nbsp;news@email.id.me</p>
            <p><span className="text-gray-500">spf</span> &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">pass</span></p>
            <p><span className="text-gray-500">dkim</span> &nbsp;&nbsp;&nbsp;<span className="text-green-400">pass</span> <span className="text-gray-500">(signature verified)</span></p>
            <p><span className="text-gray-500">dmarc</span> &nbsp;&nbsp;<span className="text-green-400">pass</span></p>
            <p><span className="text-gray-500">links</span> &nbsp;&nbsp;18 of 18 to clicks.id.me</p>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
            This is not a spoof, and it is not somebody impersonating a government vendor. It is ID.me emailing
            its own users. The message carries ID.me&apos;s own
            <span className="text-white font-semibold"> &ldquo;Advertising Disclosure&rdquo;</span> label, and
            its own line: <span className="text-white font-semibold">&ldquo;ID.me is an independent private
            company.&rdquo;</span>
          </p>
        </div>

        {/* Why that is the story */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">Why that is worth noticing</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Most Nebraskans with an ID.me account did not choose the company. They needed to reach an IRS
            service, and ID.me is what the federal government put in front of the door. Setting one up means
            handing over a government photo ID, a selfie, and a Social Security number.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            That list is now also a marketing list. None of that is illegal, and the email discloses that it is
            advertising. But a company you were effectively required to register with, in order to deal with
            your own government, is now emailing you about your children&apos;s money — and the distance
            between a government notice and an advertisement is doing a lot of work in that inbox.
          </p>
        </div>

        {/* The footnotes */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">What it says, and what the footnotes leave out</h2>
        <div className="space-y-3 mb-8">
          {FOOTNOTES.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
              <div className="px-5 py-3 bg-[#fff5f5] border-b border-red-100">
                <p className="text-[10px] font-bold tracking-widest text-[#c8102e] uppercase mb-1">The email says</p>
                <p className="text-sm text-gray-800 font-medium">{f.says}</p>
              </div>
              <div className="px-5 py-3">
                <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">The full picture</p>
                <p className="text-sm text-gray-700 leading-relaxed">{f.truth}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Deadline */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">On the federal $1,000, the number that matters</p>
          <p className="text-5xl font-bold leading-none mb-3">17 years</p>
          <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
            The election for the $1,000 pilot contribution can be made
            <span className="text-white font-semibold"> until December 31 of the calendar year in which the child turns 17</span>.
            For a baby born today, that is the mid-2040s. Whatever else you are told, there is no reason to
            rush the federal money — and any message pressuring you to act immediately on it is wrong.
          </p>
        </div>

        {/* What it is */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">What the program actually is</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            A 530A is structured as an individual retirement account. The Treasury deposits $1,000 for U.S.
            citizen children with a valid Social Security number, born between January 1, 2025 and December 31,
            2028.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            It is not a college fund and not a substitute for one. A 529 comes out completely tax-free for
            tuition. A 530A locks until the year the child turns 18, and after that taxes a general withdrawal
            as income with a 10% penalty unless it fits an exception — education, a first home up to $10,000,
            birth or adoption, disability, certain medical costs.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            The IRS reports roughly <span className="font-semibold text-gray-700">4 million children enrolled</span>{" "}
            nationally, with about <span className="font-semibold text-gray-700">1 million</span> having claimed
            the $1,000. Nebraska recorded{" "}
            <a href="https://www.cdc.gov/nchs/state-stats/states/ne.html" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">24,785 births in 2024 ↗</a>,
            the most recent finalized year. Hold that rate across the four birth years the program covers and
            roughly <span className="font-semibold text-gray-700">100,000 Nebraska children</span> will be
            eligible — which is also roughly the size of the mailing list.
          </p>
        </div>

        {/* Treasurer */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">What Nebraska&apos;s treasurer says</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
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
            On this the email and the state agree — it does stack with a 529. The treasurer still recommends
            NEST 529 as the better education vehicle, and there is a Nebraska-specific reason: account owners
            can deduct up to <span className="font-semibold">$10,000 a year</span> from state income tax on
            NEST contributions. There is no federal equivalent for a 530A.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            One gap, and the reason this page exists: the state&apos;s comparison carries no deadline, no
            enrollment steps, and nothing about the solicitations families are now receiving. It answers which
            account is better and stops where a parent&apos;s next question starts.
          </p>
        </div>

        {/* Legitimate names */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">Which names are supposed to be there</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            <span className="font-semibold">ID.me</span> is the identity verifier the IRS and Treasury
            genuinely use. <span className="font-semibold">Union Bank &amp; Trust</span>, a Lincoln bank, is
            program manager for Nebraska&apos;s NEST 529 plans, which is why its name sits at the bottom of
            NEST materials. It won that role through a competitive request for proposals, the Nebraska
            Investment Council approved it unanimously, and the change{" "}
            <a href="https://treasurer.nebraska.gov/news/default.aspx?story=532" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">
              cut program management fees by 68% ↗
            </a>. The contract has moved between banks before — Union Bank held it 2001 to 2010, First National
            Bank of Omaha 2010 to 2020.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            NEST also points families to a savings estimator run by a vendor,{" "}
            <a href="https://v3.inviteeducation.com/tools/college_savings_estimator/310/" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline">Invite Education ↗</a>,
            under the treasurer&apos;s and Union Bank&apos;s disclaimers. A normal white-label arrangement, not
            a scam. Worth knowing it exists, because it asks for a child&apos;s name, grade and school, and no
            privacy policy was visible on the calculator page itself.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            None of these are warning signs. That is the point.
            <span className="font-semibold"> A familiar, legitimate name in your inbox tells you nothing about
            whether the message deserves your child&apos;s information.</span> The state and the IRS do not
            email asking for a Social Security number, and Treasury has warned separately about messages
            claiming you must convert or link an existing 529 — there is no such requirement, and no
            unsolicited third party can process any of this for you.
          </p>
        </div>

        {/* Enroll */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">How to do it yourself, for free</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#0a0e1a] text-white text-xs font-bold grid place-items-center">1</span>
              <p className="text-sm text-gray-700 leading-relaxed">
                Go to the official federal site or file <span className="font-semibold">IRS Form 4547</span>{" "}
                with your 2025 return. Type the address yourself rather than following a link out of an email —
                including a real one.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="shrink-0 w-6 h-6 rounded-full bg-[#0a0e1a] text-white text-xs font-bold grid place-items-center">2</span>
              <p className="text-sm text-gray-700 leading-relaxed">
                You will verify through ID.me either way. Reaching it yourself costs nothing and lands in the
                same place the advertisement would.
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
                If education is the goal, look at{" "}
                <a href="https://www.nest529.com" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline font-semibold">NEST 529</a>{" "}
                for the Nebraska deduction. You can do both.
              </p>
            </li>
          </ol>
        </div>

        {/* Report */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">If something looks wrong</p>
          <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-2xl">
            Advertising is not fraud, and the email described here is advertising. But real impersonation
            attempts are circulating alongside it. Report those to the Nebraska Attorney General&apos;s
            Consumer Affairs Response Team — they track patterns statewide, which is how warnings get issued
            before more people are hit. Reporting matters even if you lost nothing.
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

        {/* Short version */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <h2 className="text-lg font-bold text-gray-900 mb-3">The short version</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex gap-2"><span className="text-[#c8102e] font-bold">·</span> The email going around really is from ID.me. It is advertising, and it says so in the small print.</li>
            <li className="flex gap-2"><span className="text-[#c8102e] font-bold">·</span> The $1,000 is federal and real, for citizens born 2025 through 2028.</li>
            <li className="flex gap-2"><span className="text-[#c8102e] font-bold">·</span> The $250 is private money from the Dell family, capped at 25 million children, and income-tested by ZIP code.</li>
            <li className="flex gap-2"><span className="text-[#c8102e] font-bold">·</span> No rush on the federal money — you have until the year your child turns 17.</li>
            <li className="flex gap-2"><span className="text-[#c8102e] font-bold">·</span> Enrolling is free through the IRS. Nobody needs to do it for you, and nobody legitimate needs your child&apos;s Social Security number by email.</li>
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
          <p className="text-[11px] text-gray-400 leading-relaxed mt-4 pt-4 border-t border-gray-100">
            The email described here was received by a Nebraska reader and shared with us. Its headers were
            checked for authentication results and link destinations. Recipient details have been withheld.
          </p>
        </div>

        <Link href="/" className="text-sm text-[#c8102e] hover:underline font-semibold">
          ← Back to Nebraska Watchdog
        </Link>

      </div>
    </div>
  );
}
