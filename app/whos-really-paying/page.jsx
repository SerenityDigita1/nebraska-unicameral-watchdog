import Link from "next/link";

export const metadata = {
  title: "Who's Really Paying? The Money Behind the \"Who's Funding\" Attacks",
  description:
    "Republicans ask who is paying for Dan Osborn and James Talarico. FEC filings show small donors on one side, and self-funding, megadonors and not-yet-disclosed super PACs on the other.",
};

const AS_OF = "as of Oct 12, 2026";

const SOURCES = [
  { label: "FEC: James Talarico (S6TX00479) 2026 totals", url: "https://www.fec.gov/data/candidate/S6TX00479/?cycle=2026" },
  { label: "FEC: Ken Paxton (S6TX00388) 2026 totals", url: "https://www.fec.gov/data/candidate/S6TX00388/?cycle=2026" },
  { label: "FEC: Dan Osborn (S4NE00207) 2026 totals", url: "https://www.fec.gov/data/candidate/S4NE00207/?cycle=2026" },
  { label: "FEC: Pete Ricketts (S6NE00129) 2026 totals", url: "https://www.fec.gov/data/candidate/S6NE00129/?cycle=2026" },
  { label: "FEC: independent expenditures in the Texas Senate race (Talarico)", url: "https://www.fec.gov/data/independent-expenditures/?candidate_id=S6TX00479" },
  { label: "FEC: independent expenditures in the Texas Senate race (Paxton)", url: "https://www.fec.gov/data/independent-expenditures/?candidate_id=S6TX00388" },
  { label: "FEC: Texas PAC (C00960211)", url: "https://www.fec.gov/data/committee/C00960211/" },
  { label: "FEC: Cornhusker Majority (C00961227)", url: "https://www.fec.gov/data/committee/C00961227/" },
  { label: "FEC: Nebraska Values PAC (C00956292)", url: "https://www.fec.gov/data/committee/C00956292/" },
  { label: "FEC: Working Class Majority PAC (C00954503)", url: "https://www.fec.gov/data/committee/C00954503/" },
  { label: "FEC: Win It Back PAC receipts (C00844613)", url: "https://www.fec.gov/data/receipts/?committee_id=C00844613&two_year_transaction_period=2026" },
  { label: "FEC: Lone Star Liberty PAC receipts (C00901223)", url: "https://www.fec.gov/data/receipts/?committee_id=C00901223&two_year_transaction_period=2026" },
  { label: "FEC: America PAC texting expenditure filing, Oct 1, 2026", url: "https://docquery.fec.gov/pdf/253/202610019908503253/202610019908503253.pdf" },
  { label: "Texas Tribune: GOP outside spending in the Texas Senate race (Oct 1, 2026)", url: "https://www.texastribune.org/2026/10/01/texas-senate-gop-outside-spending-ken-paxton-thune-trump-talarico/" },
  { label: "NBC News: Texas voters get \"Are you white?\" political texts targeting James Talarico", url: "https://www.nbcnews.com/politics/2026-election/texas-voters-get-are-white-political-texts-targeting-james-talarico-rcna601955" },
  { label: "NRSC press release (May 6, 2026)", url: "https://www.nrsc.org/press-releases/fox-news-fake-independent-dan-osborn-continues-to-be-bankrolled-by-left-wing-donors-2026-05-06/" },
  { label: "Fox News: Talarico touts Texas roots as out-of-state cash powers Senate campaign", url: "https://www.foxnews.com/politics/talarico-touts-texas-roots-out-of-state-cash-powers-senate-campaign.amp" },
  { label: "Denver Gazette: Democrats flooded PAC boosting Dan Osborn (Dec 12, 2024)", url: "https://www.denvergazette.com/2024/12/12/democrats-flooded-pac-boosting-nebraska-independent-dan-osborn-with-millions-in-final-blitz-27f9bd32-c82b-5fd0-9ed3-583f2ee2d223/" },
];

const FEC = {
  talarico: SOURCES[0].url,
  paxton: SOURCES[1].url,
  osborn: SOURCES[2].url,
  ricketts: SOURCES[3].url,
  ieTalarico: SOURCES[4].url,
  texasPac: SOURCES[6].url,
  cornhusker: SOURCES[7].url,
  nevalues: SOURCES[8].url,
  wcm: SOURCES[9].url,
  winItBack: SOURCES[10].url,
  lsl: SOURCES[11].url,
  americaPac: SOURCES[12].url,
  tribune: SOURCES[13].url,
  nbc: SOURCES[14].url,
  nrsc: SOURCES[15].url,
  fox: SOURCES[16].url,
  gazette: SOURCES[17].url,
};

function Cite({ href, children }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="text-[11px] text-[#c8102e] hover:underline whitespace-nowrap">
      ↗ {children}
    </a>
  );
}

function Stat({ value, label, source, href, asOf }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4">
      <p className="text-2xl font-bold text-gray-900">{value}</p>
      <p className="text-xs text-gray-600 mt-1 leading-snug">{label}</p>
      <p className="text-[11px] text-gray-400 mt-2">{asOf} · <Cite href={href}>{source}</Cite></p>
    </div>
  );
}

function Section({ title, sub, children }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-5">
      <h2 className="text-base font-bold text-gray-900 mb-1">{title}</h2>
      {sub && <p className="text-xs text-gray-400 mb-4">{sub}</p>}
      <div className="space-y-4 text-sm text-gray-600 leading-relaxed">{children}</div>
    </div>
  );
}

export default function WhosReallyPaying() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      <div className="max-w-4xl mx-auto px-6 py-10">

        <div className="mb-8">
          <span className="text-[10px] font-bold tracking-[0.2em] text-[#c8102e] uppercase">2026 Senate Races · Follow the money</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1 mb-2">Who's Really Paying? The GOP's Donor Attacks Meet Its Own Money</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
            Voters in Texas and Nebraska are getting texts and ads asking who is really funding James Talarico and Dan Osborn.
            Federal Election Commission filings show the answer on the other side is bigger, and often later to disclose.
          </p>
          <p className="text-[11px] text-gray-400 mt-3">Figures compiled Oct 12, 2026. Each number lists its source and the date it covers.</p>
        </div>

        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">The short version</p>
          <p className="text-white font-semibold text-lg leading-snug mb-3">
            Pete Ricketts gave his own campaign $5.30 million. Dan Osborn's whole campaign has raised $5.75 million.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            Ricketts: through Jun 30, 2026 (<a className="underline" href={FEC.ricketts} target="_blank" rel="noreferrer">FEC</a>). Osborn: through Sep 30, 2026 (<a className="underline" href={FEC.osborn} target="_blank" rel="noreferrer">FEC</a>).
            Meanwhile, the biggest Republican-aligned super PAC in each race had not filed a single donor report as of Oct 12, 2026.
          </p>
        </div>

        <Section title="The attacks" sub="What voters are being asked">
          <p>
            In Texas, voters received "Are you white?" texts linking to an attack site on Talarico paid for by the American Political Action Committee (AMERIPAC), a Bellevue, Washington group. <Cite href={FEC.nbc}>NBC News</Cite> AMERIPAC reported $533,069 in spending against Talarico in FEC 48-hour reports (approximate, {AS_OF}). <Cite href={FEC.ieTalarico}>FEC</Cite>
          </p>
          <p>
            America PAC filed a single $7,627,562 expenditure for a "texting service" opposing Talarico, dated Oct 1, 2026. <Cite href={FEC.americaPac}>FEC filing</Cite>
          </p>
          <p>
            In Nebraska, the NRSC has called Osborn a "fake independent" who is "bankrolled by left-wing donors" (May 6, 2026). <Cite href={FEC.nrsc}>NRSC</Cite> Ken Paxton's camp has hit Talarico for out-of-state money; Fox News reported about half of Talarico's money comes from out of state. <Cite href={FEC.fox}>Fox News</Cite>
          </p>
          <p>So who is paying for the other side? Here is what the filings show.</p>
        </Section>

        <Section title="1. Small donors vs. big checks" sub="Unitemized gifts ($200 or less) are the FEC's standard proxy for small donors">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Stat value="53.6%" label="of Talarico's $68.6M came from small (unitemized) donors" asOf="Through Jun 30, 2026" source="FEC" href={FEC.talarico} />
            <Stat value="19.1%" label="of Paxton's $9.25M came from small (unitemized) donors" asOf="Through Sep 30, 2026" source="FEC" href={FEC.paxton} />
            <Stat value="38.2%" label="of Osborn's $5.75M came from small (unitemized) donors" asOf="Through Sep 30, 2026" source="FEC" href={FEC.osborn} />
            <Stat value="2.1%" label="of Ricketts' $11.23M came from small (unitemized) donors" asOf="Through Jun 30, 2026" source="FEC" href={FEC.ricketts} />
          </div>
          <p className="text-xs text-gray-400">Coverage dates differ because Q3 filings for Talarico and Ricketts were not yet processed in FEC data as of Oct 12, 2026.</p>
        </Section>

        <Section title="2. Self-funding and PAC money" sub="Nebraska">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Stat value="$5.30M" label="Ricketts' contributions to his own campaign, 47.1% of his receipts" asOf="Through Jun 30, 2026" source="FEC" href={FEC.ricketts} />
            <Stat value="$0" label="Osborn's self-funding" asOf="Through Sep 30, 2026" source="FEC" href={FEC.osborn} />
            <Stat value="$1.64M" label="PAC and other committee money to Ricketts" asOf="Through Jun 30, 2026" source="FEC" href={FEC.ricketts} />
            <Stat value="$140K" label="PAC and other committee money to Osborn" asOf="Through Sep 30, 2026" source="FEC" href={FEC.osborn} />
          </div>
        </Section>

        <Section title="3. Outside money dwarfs the candidate" sub="Texas">
          <p>
            The Texas Tribune reported outside groups had spent over <strong className="text-gray-900">$205 million</strong> on the Texas general election, with over 98% backing Paxton or opposing Talarico. Texas PAC, which the Tribune describes as connected to Senate Majority Leader John Thune, had spent $131 million on its own. <Cite href={FEC.tribune}>Texas Tribune, Oct 1, 2026</Cite>
          </p>
          <p>
            Paxton's own campaign has raised $9.25 million in total (through Sep 30, 2026). <Cite href={FEC.paxton}>FEC</Cite>
          </p>
        </Section>

        <Section title="4. Spending now, disclosing later" sub="Super PACs that have not yet filed a donor report">
          <p>
            <strong className="text-gray-900">Texas PAC</strong> (registered Aug 28, 2026) has reported roughly $140 million against Talarico and for Paxton in FEC 48-hour reports. <Cite href={FEC.texasPac}>FEC</Cite>
            {" "}<strong className="text-gray-900">Cornhusker Majority</strong> (registered Sep 10, 2026) has reported roughly $7 million against Osborn and for Ricketts. <Cite href={FEC.cornhusker}>FEC</Cite>
          </p>
          <p>
            As of Oct 12, 2026, neither had filed a regular report listing donors. That is legal timing, not proof of dark money: these are super PACs that must disclose. But voters will not see who paid until at least Oct 15.
          </p>
          <p className="text-xs text-gray-400">
            Approximate: 48-hour report totals are this site's own sums of raw FEC independent expenditure filings dated Jan 1, 2025 to Oct 11, 2026. Raw filings can include amended lines.
          </p>
        </Section>

        <Section title="5. The named megadonors" sub="Groups that have disclosed">
          <p>
            <strong className="text-gray-900">Win It Back PAC</strong> spent about $2.06 million against Osborn (FEC 48-hour reports, approximate, {AS_OF}). Its filings show $4.5 million from billionaire Jeff Yass plus more than $4 million from Club for Growth Action (receipts through Aug 31, 2026). <Cite href={FEC.winItBack}>FEC</Cite>
          </p>
          <p>
            <strong className="text-gray-900">Lone Star Liberty PAC</strong> spent about $14.1 million against Talarico (FEC 48-hour reports, approximate, {AS_OF}). <Cite href={FEC.ieTalarico}>FEC</Cite> Its donors through Jun 30, 2026 include checks of $250,000 to $1 million. <Cite href={FEC.lsl}>FEC</Cite>
          </p>
        </Section>

        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-1">Fair play: the other side has undisclosed money too</h2>
          <p className="text-xs text-gray-400 mb-4">We hold everyone to the same standard</p>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              Pro-Osborn groups also have not yet disclosed donors. <strong className="text-gray-900">Nebraska Values PAC</strong> (about $6.44 million against Ricketts) and <strong className="text-gray-900">Working Class Majority PAC</strong> (about $5.7 million for Osborn and against Ricketts combined) had no donor report on file as of Oct 12, 2026 (FEC 48-hour reports, approximate). <Cite href={FEC.nevalues}>FEC</Cite> <Cite href={FEC.wcm}>FEC</Cite> Outside money for and against is roughly balanced in Nebraska.
            </p>
            <p>
              In 2024, Osborn's main super PAC took $3.8 million from the Schumer-aligned Senate Majority PAC and money from Sixteen Thirty Fund, a nonprofit that does not disclose its donors. <Cite href={FEC.gazette}>Denver Gazette, Dec 12, 2024</Cite>
            </p>
            <p>
              Talarico has his own super PAC: <strong className="text-gray-900">Lone Star Rising PAC</strong> has spent about $3.98 million backing him ({AS_OF}). <Cite href={FEC.ieTalarico}>FEC</Cite> And about half his money comes from out of state. <Cite href={FEC.fox}>Fox News</Cite>
            </p>
          </div>
        </div>

        <Section title="What to watch" sub="Disclosure deadlines">
          <p>
            Quarterly (Q3) reports are due <strong className="text-gray-900">Oct 15, 2026</strong>, and pre-general reports are due Oct 22, 2026. They should finally show who is funding Texas PAC, Cornhusker Majority and Nebraska Values PAC. If the top donors turn out to be nonprofits or LLCs that do not name their own funders, that is the dark money story. We will update this page when they file.
          </p>
          <p>
            More: <Link href="/outside-money" className="text-[#c8102e] font-semibold hover:underline">Outside money and the Ricketts story →</Link>
          </p>
        </Section>

        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6">
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">Sources</h2>
          <ul className="space-y-2">
            {SOURCES.map((s) => (
              <li key={s.url}>
                <a href={s.url} target="_blank" rel="noreferrer" className="text-sm text-gray-600 hover:text-[#c8102e]">↗ {s.label}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
}
