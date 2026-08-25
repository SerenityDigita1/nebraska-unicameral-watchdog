import Link from "next/link";

export const metadata = {
  title: "The Shock Gloves Were Never Meant for Emergencies — Nebraska Watchdog",
  description:
    "Omaha bought 40 pairs of electric shock gloves for school resource officers on a consent agenda, with no debate. They were not bought for active shooters. Policy permits their use on students who passively resist. They are still in three area districts.",
};

const SOURCES = [
  { label: "WOWT: Shock gloves purchase passed with no debate, Omaha councilman says (Aug. 20, 2026)", url: "https://www.wowt.com/2026/08/20/shock-gloves-purchase-passed-with-no-debate-omaha-councilman-says/" },
  { label: "3 News Now: OPD says shock gloves deployed at 29 Omaha schools, used twice on students", url: "https://www.3newsnow.com/central-omaha/opd-says-its-school-resource-officers-have-shock-gloves-at-29-schools-and-theyve-been-used-twice-on-students" },
  { label: "3 News Now: OPS removed shock gloves. Three area districts are keeping them.", url: "https://www.3newsnow.com/central-omaha/ops-removed-shock-gloves-from-its-schools-3-area-districts-are-keeping-them-these-parents-want-them-removed" },
  { label: "3 News Now: Bellevue Police SROs will keep shock gloves in Omaha Public Schools", url: "https://www.3newsnow.com/central-omaha/school-resource-officers-from-the-bellevue-police-department-will-keep-shock-gloves-in-omaha-public-schools" },
  { label: "Nebraska Public Media: Omaha police, mayor detail two uses of electric shock gloves", url: "https://nebraskapublicmedia.org/en/news/news-articles/omaha-police-mayor-detail-two-uses-of-electric-shock-gloves-by-school-resource-officers/" },
  { label: "Nebraska Public Media: Omaha parents, students denounce electric shock gloves at school board meeting", url: "https://nebraskapublicmedia.org/en/news/news-articles/omaha-parents-students-denounce-electric-shock-gloves-at-school-board-meeting/" },
  { label: "Nebraska Public Media: Electric shock gloves already in use by police in Bellevue, Omaha", url: "https://nebraskapublicmedia.org/en/news/news-articles/electric-shock-gloves-already-in-use-by-police-departments-in-bellevue-omaha/" },
  { label: "WOWT: Omaha Police address shock glove technology in schools (Aug. 14, 2026)", url: "https://www.wowt.com/2026/08/14/omaha-police-address-shock-glove-technology-schools/" },
  { label: "Police1: Neb. PD demonstrates how shock gloves are used by SROs", url: "https://www.police1.com/school-resource-officer/neb-pd-demonstrates-how-shock-gloves-are-used-by-sros" },
  { label: "National School Safety and Security Services: Electric shock gloves for SROs — why schools should think twice", url: "https://schoolsecurity.org/electric-shock-gloves-for-school-resource-officers-why-schools-should-think-twice/" },
  { label: "LegiScan: Nebraska LB1039, 109th Legislature", url: "https://legiscan.com/NE/bill/LB1039/2025" },
  { label: "Nebraska Legislature: find your senator", url: "https://nebraskalegislature.gov/senators/find.php" },
  { label: "Omaha City Council: agendas and meeting records", url: "https://cityofomaha.org/council" },
];

const TIMELINE = [
  { date: "May 2025", what: "Omaha Police request 40 pairs of shock gloves — just under $66,000. The submission runs 18 pages, framed around school safety." },
  { date: "June 3, 2025", what: "The Omaha City Council approves the purchase unanimously, as a consent agenda item. Nobody speaks about it." },
  { date: "Jan. 14, 2026", what: "Sen. Dungan introduces LB1039, which would require school resource officer agreements to prohibit corporal punishment by officers and security guards. Referred to the Education Committee." },
  { date: "Feb. 9, 2026", what: "A hearing on LB1039 is noticed. The bill is later indefinitely postponed and does not become law." },
  { date: "2025–26 school year", what: "The gloves are used twice, both times on Omaha Public Schools students. Both uses are reviewed and found within policy." },
  { date: "Aug. 13, 2026", what: "Local media report the gloves' use. At least one OPS board member says this is how she learned of it." },
  { date: "Aug. 18, 2026", what: "OPS asks that officers not carry the gloves in its schools. Omaha Police agree." },
  { date: "Now", what: "Officers still carry them in Westside, Millard and Elkhorn. Bellevue Police, which serves two OPS schools, is keeping them there." },
];

export default function ShockGloves() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Header */}
        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">Policing &amp; Schools</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">
            The Shock Gloves Were Never Meant for Emergencies
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xl">
            Omaha bought 40 pairs of electric shock gloves for school resource officers and put them in 29
            schools. They were not bought for active shooters. They were bought as a routine use-of-force
            option — and reporting on the policy indicates officers may use them on students who
            <span className="font-semibold text-gray-700"> passively resist</span>, meaning students who
            refuse to follow an order. The purchase cleared the City Council on a consent agenda with no
            discussion at all.
          </p>
        </div>

        {/* The core finding */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">The thing worth understanding first</p>
          <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mb-4">
            A reasonable person hears &ldquo;shock gloves in schools&rdquo; and pictures an emergency — an armed
            intruder, a fight nobody can break up. That is not what these were purchased for, and the two times
            they were used were not deviations from the plan.
          </p>
          <p className="text-white text-base leading-relaxed max-w-2xl font-semibold">
            Omaha Police described them to the City Council as another use-of-force option intended to
            de-escalate and prevent higher-force situations — a rung below a TASER or pepper spray. Everyday
            use on students is not a misuse of the device. It is the stated purpose.
          </p>
        </div>

        {/* What it is */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">What the device is</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            The product is called <span className="font-semibold">The GLOVE</span> — Generated Low Output
            Voltage Emitter — made by Compliant Technologies, a Kentucky company selling less-lethal equipment
            to law enforcement. It has to touch skin directly. The officer presses a button, and the device can
            deliver a shock for up to 15 seconds.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            It does not incapacitate. It causes pain, and the pain is the mechanism — the person complies to
            make it stop. That is what &ldquo;pain compliance&rdquo; means, and it is the category this device
            belongs to.
          </p>
        </div>

        {/* Pending policy text */}
        <div className="bg-white rounded-2xl border-2 border-dashed border-gray-300 p-5 mb-8">
          <p className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-2">Pending — public records</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            The passive-resistance authorization is the load-bearing fact in this story, and it deserves to be
            quoted from the document rather than from press summaries of it. We are seeking the Omaha Police
            policy governing the device, and the 18-page submission provided to the City Council in May 2025.
            This section will be updated with the actual language. If you have a copy, we would like to see it.
          </p>
        </div>

        {/* The two uses */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">The two times they were used</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <div className="space-y-4 mb-4">
            <div className="border-l-4 border-[#c8102e] pl-4">
              <p className="text-sm font-semibold text-gray-900">Omaha South High School</p>
              <p className="text-sm text-gray-700 leading-relaxed mt-1">
                A student who was trespassing was shocked for roughly two seconds while attempting to get away.
              </p>
            </div>
            <div className="border-l-4 border-[#c8102e] pl-4">
              <p className="text-sm font-semibold text-gray-900">OPS Integrated Learning Program</p>
              <p className="text-sm text-gray-700 leading-relaxed mt-1">
                A student at a program serving children with behavioral and learning needs was shocked twice
                during an altercation with a security guard.
              </p>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Both were reviewed. Both were found to be within policy.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            <span className="font-semibold">That finding is the story, not the exoneration it sounds like.</span>{" "}
            The uses were within policy because the policy permits them. Neither incident involved a weapon.
            One involved a student running away. The number of uses is close to the least important fact here —
            had it been zero, the authorization would be identical: 29 schools, 29 trained officers, and a
            written rule allowing a pain device against a child who will not do as he is told.
          </p>
        </div>

        {/* Timeline */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">How it happened</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <ol className="space-y-4">
            {TIMELINE.map((t, i) => (
              <li key={i} className="flex gap-4">
                <span className="shrink-0 w-24 text-xs font-bold text-[#c8102e] pt-0.5">{t.date}</span>
                <span className="text-sm text-gray-700 leading-relaxed">{t.what}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Consent agenda */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">It was not hidden. It was filed as routine.</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            There was no cover-up here, and it is worth being precise about that, because the accurate version
            is harder to dismiss. Omaha Police submitted 18 pages. The item appeared on a public agenda. There
            was a public comment period. Any resident could have asked for it to be pulled for full debate.
            Nobody broke a rule.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            A consent agenda exists to move genuinely routine business — board appointments, contract renewals —
            without debating each item separately.
            <span className="font-semibold"> Placing something on it removes discussion as the default.</span>{" "}
            After that, debate happens only if someone notices and asks. For a $66,000 line among dozens,
            nobody did: not a council member, not the public, and for fourteen months not an OPS board member.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Councilman Danny Begley, who voted for it, described what that looked like:
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 py-1 mb-4">
            <p className="text-sm text-gray-800 leading-relaxed italic">
              &ldquo;At the time when that was voted on — and approved by the council and signed by the mayor and
              supported by the current mayor and the chief — there wasn&apos;t a lot of pushback.&rdquo;
            </p>
          </blockquote>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Begley defends the process, noting that consent items can be pulled on request and that a public
            comment period exists. He says he is comfortable with it but is not closing the door on changes. His
            remedy for next time:
          </p>
          <blockquote className="border-l-4 border-gray-300 pl-4 py-1 mb-4">
            <p className="text-sm text-gray-800 leading-relaxed italic">
              &ldquo;I think the public&apos;s more aware now with this story that if they got anything on the
              consent agenda, they want to reach out to council members.&rdquo;
            </p>
          </blockquote>
          <p className="text-sm text-gray-700 leading-relaxed">
            That is a sincere answer, and it is also the whole problem stated out loud. It puts the burden of
            catching a new pain-compliance weapon for use on children onto residents reading municipal agendas
            and recognising a product name they have never heard of.
          </p>
        </div>

        {/* Still there */}
        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">They have not left the schools</p>
          <p className="text-gray-300 text-sm leading-relaxed max-w-2xl mb-4">
            The story is being reported as resolved because Omaha Public Schools asked for the gloves to be
            removed and Omaha Police agreed. That is not the full picture.
          </p>
          <ul className="space-y-2 text-sm text-gray-300 mb-4">
            <li className="flex gap-2"><span className="text-[#c8102e] font-bold">·</span> Officers still carry them in <span className="text-white font-semibold">Westside, Millard and Elkhorn</span>. District spokespeople say they have not been used in those schools.</li>
            <li className="flex gap-2"><span className="text-[#c8102e] font-bold">·</span> <span className="text-white font-semibold">Bellevue Police</span>, which provides officers to two OPS schools, is keeping the gloves in them.</li>
          </ul>
          <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
            Westside says it is still learning about the device. Millard says it plans to hear more from Omaha
            Police. Those are holding positions, not decisions — and they are being taken by elected school
            boards that can be asked about them.
          </p>
        </div>

        {/* The state angle */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">Lincoln already had this in front of it</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            Corporal punishment is already prohibited in Nebraska public schools. What has not been settled is
            whether that prohibition reaches police officers and security guards working inside those schools.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mb-4">
            In January 2026, <span className="font-semibold">Sen. Dungan introduced LB1039</span>, which would
            have expressly required school resource officer agreements to prohibit corporal punishment by
            officers and security guards. It was referred to the Education Committee and a hearing was noticed
            for February 9. The bill was indefinitely postponed and did not become law.
          </p>
          <p className="text-sm text-gray-500 leading-relaxed">
            In Nebraska, indefinite postponement is frequently the ordinary end-of-session fate of a bill that
            never advanced out of committee, rather than a recorded vote against it. We are checking the
            committee record for what actually happened to LB1039 and will update this. Either way the sequence
            stands: the gap was identified in Lincoln in January, the bill did not pass, and students were
            shocked under a policy that the bill was written to address.
          </p>
        </div>

        {/* What to ask */}
        <h2 className="text-xl font-bold text-gray-900 mb-3">Questions with actual addresses</h2>
        <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-bold tracking-widest text-[#c8102e] uppercase mb-1">To your city council member</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Who decides what goes on the consent agenda, and against what standard? Should a new use-of-force
                device qualify as routine when a contract renewal does?
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-[#c8102e] uppercase mb-1">To your school board — Westside, Millard, Elkhorn</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Officers are carrying these in your buildings today. What is the district&apos;s position, and
                when will it decide?
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-[#c8102e] uppercase mb-1">To Omaha Police</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Release the policy governing the device and the 18 pages given to the council. If use on passive
                resistance is authorized, say so plainly in public.
              </p>
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-[#c8102e] uppercase mb-1">To your state senator</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                LB1039 did not pass. The 2027 session opens in January. Will you introduce or support a bill
                that closes this?{" "}
                <a href="https://nebraskalegislature.gov/senators/find.php" target="_blank" rel="noreferrer" className="text-[#c8102e] hover:underline font-semibold">Find your senator ↗</a>
              </p>
            </div>
          </div>
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
            This page draws on reporting by 3 News Now, WOWT, Nebraska Public Media and The Reader. Two items
            are marked as pending verification against primary documents: the Omaha Police policy language on
            passive resistance, and the Education Committee record for LB1039.
          </p>
        </div>

        <Link href="/" className="text-sm text-[#c8102e] hover:underline font-semibold">
          ← Back to Nebraska Watchdog
        </Link>

      </div>
    </div>
  );
}
