import Link from "next/link";

export const metadata = {
  title: "Who's Really Paying? The Money Behind the \"Who's Funding\" Attacks",
  description:
    "Republicans ask who is paying for Dan Osborn and James Talarico. October quarterly FEC filings show small donors on one side, and self-funding, megadonors, and SLF PAC on the other.",
};

const SOURCES = [
  { label: "FEC Form 3: Pete Ricketts for Senate, October quarterly, filed Oct 15, 2026 (C00832436)", url: "https://docquery.fec.gov/cgi-bin/forms/C00832436/2027137/" },
  { label: "FEC Form 3: Osborn for Senate, October quarterly, filed Oct 15, 2026 (C00901355)", url: "https://docquery.fec.gov/cgi-bin/forms/C00901355/2027992/" },
  { label: "FEC Form 3: Talarico for Texas, October quarterly, filed Oct 15, 2026 (C00919084)", url: "https://docquery.fec.gov/cgi-bin/forms/C00919084/2027782/" },
  { label: "FEC Form 3: Ken Paxton for Senate, October quarterly, filed Oct 15, 2026 (C00901918)", url: "https://docquery.fec.gov/cgi-bin/forms/C00901918/2026455/" },
  { label: "FEC Form 3X: Texas PAC, October quarterly, filed Oct 15, 2026 (C00960211)", url: "https://docquery.fec.gov/cgi-bin/forms/C00960211/2025952/" },
  { label: "FEC 24-hour notice: Texas PAC, filed Oct 17, 2026", url: "https://docquery.fec.gov/cgi-bin/forms/C00960211/2029514/" },
  { label: "FEC Form 3X: Cornhusker Majority, October quarterly, filed Oct 15, 2026 (C00961227)", url: "https://docquery.fec.gov/cgi-bin/forms/C00961227/2024820/" },
  { label: "FEC 48-hour notice: Cornhusker Majority, filed Oct 11, 2026", url: "https://docquery.fec.gov/cgi-bin/forms/C00961227/2019621/" },
  { label: "FEC Form 3X: Nebraska Values PAC, October quarterly, filed Oct 14, 2026 (C00956292)", url: "https://docquery.fec.gov/cgi-bin/forms/C00956292/2021771/" },
  { label: "FEC 24-hour notice: Nebraska Values PAC, filed Oct 16, 2026", url: "https://docquery.fec.gov/cgi-bin/forms/C00956292/2028766/" },
  { label: "FEC Form 3X: Working Class Majority PAC, October quarterly, filed Oct 15, 2026 (C00954503)", url: "https://docquery.fec.gov/cgi-bin/forms/C00954503/2024193/" },
  { label: "FEC 24-hour notice: Working Class Majority PAC, filed Oct 17, 2026", url: "https://docquery.fec.gov/cgi-bin/forms/C00954503/2029741/" },
  { label: "FEC Form 3X: Win It Back PAC, October monthly (September), filed Oct 13, 2026 (C00844613)", url: "https://docquery.fec.gov/cgi-bin/forms/C00844613/2020535/" },
  { label: "FEC receipts: Jeff Yass to Win It Back PAC, 2025-2026", url: "https://www.fec.gov/data/receipts/?committee_id=C00844613&contributor_name=Yass&two_year_transaction_period=2026" },
  { label: "FEC Form 3X: Lone Star Liberty PAC, October quarterly, filed Oct 15, 2026 (C00901223)", url: "https://docquery.fec.gov/cgi-bin/forms/C00901223/2027860/" },
  { label: "FEC 24-hour notice: Lone Star Liberty PAC, filed Oct 18, 2026", url: "https://docquery.fec.gov/cgi-bin/forms/C00901223/2030040/" },
  { label: "FEC Form 3X: Lone Star Rising PAC, October quarterly, filed Oct 15, 2026 (C00918268)", url: "https://docquery.fec.gov/cgi-bin/forms/C00918268/2027513/" },
  { label: "FEC committee: SLF PAC (C00571703), website senateleadershipfund.org", url: "https://www.fec.gov/data/committee/C00571703/" },
  { label: "FEC 48-hour notice: America PAC, filed Oct 1, 2026 (C00879510)", url: "https://docquery.fec.gov/cgi-bin/forms/C00879510/2016111/" },
  { label: "FEC: independent expenditures opposing James Talarico", url: "https://www.fec.gov/data/independent-expenditures/?candidate_id=S6TX00479&support_oppose_indicator=O" },
  { label: "Texas Tribune: GOP outside spending in the Texas Senate race (Oct 1, 2026)", url: "https://www.texastribune.org/2026/10/01/texas-senate-gop-outside-spending-ken-paxton-thune-trump-talarico/" },
  { label: "NBC News: Texas voters get \"Are you white?\" political texts targeting James Talarico", url: "https://www.nbcnews.com/politics/2026-election/texas-voters-get-are-white-political-texts-targeting-james-talarico-rcna601955" },
  { label: "NRSC press release (May 6, 2026)", url: "https://www.nrsc.org/press-releases/fox-news-fake-independent-dan-osborn-continues-to-be-bankrolled-by-left-wing-donors-2026-05-06/" },
  { label: "Fox News: Talarico touts Texas roots as out-of-state cash powers Senate campaign", url: "https://www.foxnews.com/politics/talarico-touts-texas-roots-out-of-state-cash-powers-senate-campaign.amp" },
  { label: "Denver Gazette: Democrats flooded PAC boosting Dan Osborn (Dec 12, 2024)", url: "https://www.denvergazette.com/2024/12/12/democrats-flooded-pac-boosting-nebraska-independent-dan-osborn-with-millions-in-final-blitz-27f9bd32-c82b-5fd0-9ed3-583f2ee2d223/" },
];

const FEC = {
  ricketts: SOURCES[0].url,
  osborn: SOURCES[1].url,
  talarico: SOURCES[2].url,
  paxton: SOURCES[3].url,
  texasPac: SOURCES[4].url,
  texasPac24: SOURCES[5].url,
  cornhusker: SOURCES[6].url,
  cornhusker24: SOURCES[7].url,
  nevalues: SOURCES[8].url,
  nevalues24: SOURCES[9].url,
  wcm: SOURCES[10].url,
  wcm24: SOURCES[11].url,
  winItBack: SOURCES[12].url,
  yass: SOURCES[13].url,
  lsl: SOURCES[14].url,
  lsl24: SOURCES[15].url,
  lsr: SOURCES[16].url,
  slf: SOURCES[17].url,
  americaPac: SOURCES[18].url,
  ieTalarico: SOURCES[19].url,
  tribune: SOURCES[20].url,
  nbc: SOURCES[21].url,
  nrsc: SOURCES[22].url,
  fox: SOURCES[23].url,
  gazette: SOURCES[24].url,
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
            The October quarterly reports, filed Oct 15, 2026, show the other side of that question: self-funding, a handful of megadonors, and super PACs whose money traces to SLF PAC.
          </p>
          <p className="text-[11px] text-gray-400 mt-3">Compiled Oct 20, 2026. Each number lists its filing and the dates that filing covers. Small-donor shares use total receipts, the same base as the Oct 12 version of this page.</p>
        </div>

        <div className="bg-[#0a0e1a] rounded-2xl p-6 mb-8 text-white">
          <p className="text-xs font-bold tracking-widest text-[#c8102e] uppercase mb-3">The short version</p>
          <p className="text-white font-semibold text-lg leading-snug mb-3">
            Pete Ricketts has given his own campaign $6.30 million. Dan Osborn's campaign has raised $9.75 million.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            Ricketts' $6.30 million is what he gave his own campaign (line 11(d)). Osborn's $9.75 million is total receipts (line 16). Both run through Sep 30, 2026, on the October quarterly reports filed Oct 15
            (<a className="underline" href={FEC.ricketts} target="_blank" rel="noreferrer">Ricketts</a>,{" "}
            <a className="underline" href={FEC.osborn} target="_blank" rel="noreferrer">Osborn</a>).
            Ricketts closed September with $1.07 million on hand. Osborn closed with $2.21 million.
            Texas PAC, the largest super PAC in the Texas race, has now named its donor: SLF PAC, the Senate Leadership Fund committee, gave it $158 million.
          </p>
        </div>

        <Section title="The attacks" sub="What voters are being asked">
          <p>
            In Texas, voters received "Are you white?" texts linking to an attack site on Talarico paid for by the American Political Action Committee (AMERIPAC), a Bellevue, Washington group. <Cite href={FEC.nbc}>NBC News</Cite> AMERIPAC's reported spending against Talarico was $533,069 in the Oct 12 compilation of FEC notices. October 24- and 48-hour notices filed through Oct 7, 2026 do not name Talarico. The committee's October quarterly is 2,909 pages and was not re-summed line by line, so this figure is carried forward, not refreshed. <Cite href={FEC.ieTalarico}>FEC</Cite>
          </p>
          <p>
            America PAC's Oct 1, 2026 notice shows a year-to-date total of $7,627,562.20 on the line opposing Talarico. The expenditure on that line is $130,747.90 for a texting service, not a single $7.6 million payment. <Cite href={FEC.americaPac}>FEC filing</Cite> Adding later Form 24 lines that oppose Talarico, through the notice filed Oct 16, brings this site's sum to about $20.7 million ($20,687,246.46). That sum is approximate. It starts from the Oct 1 year-to-date box and adds only lines marked oppose Talarico. Later year-to-date boxes also rise when the committee reports spending for Paxton, so those boxes are not used as the total.
          </p>
          <p>
            In Nebraska, the NRSC has called Osborn a "fake independent" who is "bankrolled by left-wing donors" (May 6, 2026). <Cite href={FEC.nrsc}>NRSC</Cite> Ken Paxton's camp has hit Talarico for out-of-state money. Fox News reported that about half of Talarico's money comes from out of state. <Cite href={FEC.fox}>Fox News</Cite> On the October quarterly Schedule A, 58.1% of itemized individual contributions in the third quarter came from outside Texas (about $16.0 million of $27.6 million). Gifts of $200 or less, $29.2 million in the quarter, do not list a state. <Cite href={FEC.talarico}>FEC</Cite>
          </p>
          <p>So who is paying for the other side? Here is what the filings show.</p>
        </Section>

        <Section title="1. Small donors vs. big checks" sub="Unitemized gifts ($200 or less) divided by total receipts (Form 3, line 16), cycle to date">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Stat value="51.2%" label="of Talarico's $128.8 million in receipts came from small donors ($65,898,722.22)" asOf="Through Sep 30, 2026" source="FEC" href={FEC.talarico} />
            <Stat value="27.2%" label="of Paxton's $19.49 million in receipts came from small donors ($5,300,183.82)" asOf="Through Sep 30, 2026" source="FEC" href={FEC.paxton} />
            <Stat value="36.1%" label="of Osborn's $9.75 million in receipts came from small donors ($3,522,405.87)" asOf="Through Sep 30, 2026" source="FEC" href={FEC.osborn} />
            <Stat value="2.3%" label="of Ricketts' $13.58 million in receipts came from small donors ($316,732.59)" asOf="Through Sep 30, 2026" source="FEC" href={FEC.ricketts} />
          </div>
          <p className="text-xs text-gray-400">All four October quarterlies were filed Oct 15, 2026 and cover July 1 through Sep 30. Cash on hand at the close of Sep 30: Talarico $14.59 million, Paxton $4.93 million, Osborn $2.21 million, Ricketts $1.07 million.</p>
        </Section>

        <Section title="2. Self-funding and PAC money" sub="Nebraska, October quarterly, through Sep 30, 2026">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Stat value="$6.30M" label="Ricketts' contributions to his own campaign ($6,296,347.74), 46.4% of receipts" asOf="Through Sep 30, 2026" source="FEC" href={FEC.ricketts} />
            <Stat value="$5.25" label="Osborn's self-funding. The October quarterly lists $5.25, not zero." asOf="Through Sep 30, 2026" source="FEC" href={FEC.osborn} />
            <Stat value="$1.94M" label="PAC and other committee money to Ricketts (line 11(c), $1,944,030.93)" asOf="Through Sep 30, 2026" source="FEC" href={FEC.ricketts} />
            <Stat value="$202K" label="PAC and other committee money to Osborn (line 11(c), $202,137.88)" asOf="Through Sep 30, 2026" source="FEC" href={FEC.osborn} />
          </div>
        </Section>

        <Section title="3. Outside money dwarfs the candidate" sub="Texas">
          <p>
            The Texas Tribune reported on Oct 1, 2026 that outside groups had spent over <strong className="text-gray-900">$205 million</strong> on the Texas general election, with over 98% backing Paxton or opposing Talarico. That all-groups total is the Tribune's Oct 1 figure. It was not recomputed here from later FEC filings. <Cite href={FEC.tribune}>Texas Tribune, Oct 1, 2026</Cite>
          </p>
          <p>
            Texas PAC's own October quarterly reports <strong className="text-gray-900">$131.5 million</strong> in independent expenditures through Sep 30, 2026 ($131,529,652.10): $68.8 million supporting Paxton and $62.7 million opposing Talarico. Its Oct 17, 2026 24-hour notice lists a year-to-date total of <strong className="text-gray-900">$148.6 million</strong> ($148,574,806.31), the same figure on both the Paxton and Talarico lines. <Cite href={FEC.texasPac}>October quarterly</Cite> <Cite href={FEC.texasPac24}>Oct 17 notice</Cite>
          </p>
          <p>
            Paxton's own campaign has raised $19.49 million in total receipts through Sep 30, 2026 ($19,489,694.89). <Cite href={FEC.paxton}>FEC</Cite>
          </p>
        </Section>

        <Section title="4. Who paid the super PACs" sub="October quarterlies now name the donors">
          <p>
            <strong className="text-gray-900">Texas PAC</strong> (registered Aug 28, 2026) reported $158 million in receipts. Both checks are from <strong className="text-gray-900">SLF PAC</strong>, the Senate Leadership Fund committee (C00571703, senateleadershipfund.org): $75 million on Sep 10 and $83 million on Sep 24. <Cite href={FEC.texasPac}>Texas PAC</Cite> <Cite href={FEC.slf}>SLF PAC</Cite>
          </p>
          <p>
            <strong className="text-gray-900">Cornhusker Majority</strong> (registered Sep 10, 2026) reported one receipt: $7.5 million from SLF PAC on Sep 15. Its independent expenditures opposing Dan Osborn were $4.75 million through Sep 30 ($4,745,568.28). The Oct 11, 2026 48-hour notice lists a year-to-date total of <strong className="text-gray-900">$7.08 million</strong> ($7,079,252.57). <Cite href={FEC.cornhusker}>October quarterly</Cite> <Cite href={FEC.cornhusker24}>Oct 11 notice</Cite>
          </p>
          <p>
            SLF PAC files its own donor reports. The money behind Texas PAC and Cornhusker Majority is not an unnamed account. It is another super PAC.
          </p>
        </Section>

        <Section title="5. The named megadonors" sub="Groups that had already been disclosing">
          <p>
            <strong className="text-gray-900">Win It Back PAC</strong> lists $2,059,627.56 opposing Osborn, the year-to-date total on every Osborn line in its October monthly report (September activity, filed Oct 13, 2026). Notices filed from Oct 1 through Oct 16 do not name Osborn. Jeff Yass gave $4.5 million ($2 million on Sep 2, 2025 and $2.5 million on Mar 11, 2026). No Yass gift appears in the September report. Club for Growth Action's year-to-date aggregate on that report is <strong className="text-gray-900">$10,835,000</strong> as of a contribution dated Sep 3, 2026, including $6.3 million in September. <Cite href={FEC.winItBack}>October monthly</Cite> <Cite href={FEC.yass}>Yass receipts</Cite>
          </p>
          <p>
            <strong className="text-gray-900">Lone Star Liberty PAC</strong> lists a calendar-year-to-date total of <strong className="text-gray-900">$11.87 million</strong> opposing Talarico ($11,874,375) on its Oct 18, 2026 24-hour notice. <Cite href={FEC.lsl24}>Oct 18 notice</Cite> Its October quarterly donors include $10 million from the Elon Musk Revocable Trust, $5 million from SLF PAC, and $1 million from MAHA Action PAC, along with other checks of $250,000 and up. <Cite href={FEC.lsl}>October quarterly</Cite>
          </p>
        </Section>

        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 mb-5">
          <h2 className="text-base font-bold text-gray-900 mb-1">Fair play: the other side has big donors too</h2>
          <p className="text-xs text-gray-400 mb-4">We hold everyone to the same standard</p>
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              <strong className="text-gray-900">Nebraska Values PAC</strong> reported $3.42 million in independent expenditures through Sep 30, all opposing Ricketts. Its Oct 16, 2026 24-hour notice carries the year-to-date total to <strong className="text-gray-900">$9.32 million</strong> ($9,322,047.55): $9.01 million opposing Ricketts and $315,355 supporting Osborn. <Cite href={FEC.nevalues}>October quarterly</Cite> <Cite href={FEC.nevalues24}>Oct 16 notice</Cite> Donors through Sep 30 include Government That Works PAC at $4.4 million (C00915595), Green Advocacy Project at $1 million, Western Futures Fund at $750,000, and Scott Shenker at $100,000.
            </p>
            <p>
              <strong className="text-gray-900">Working Class Majority PAC</strong> reported $1.91 million supporting Osborn and $1.50 million opposing Ricketts through Sep 30 ($1,908,079.37 and $1,504,587.74). Its Oct 17, 2026 24-hour notice lists a combined year-to-date total of <strong className="text-gray-900">$7.84 million</strong> ($7,843,615.57). <Cite href={FEC.wcm}>October quarterly</Cite> <Cite href={FEC.wcm24}>Oct 17 notice</Cite> Donors include United Futures Inc. at $2 million, Working Class Heroes Action Fund at $1.62 million, Way Back PAC at $1.2 million, Nebraska Values PAC at $815,000, Government That Works PAC at $600,000, Western Futures Fund Inc. at $400,000, and UAW V-CAP at $200,000. The $815,000 from Nebraska Values is a transfer between these two committees, so their spending totals should not be read as unrelated piles of money.
            </p>
            <p>
              In 2024, Osborn's main super PAC took $3.8 million from the Schumer-aligned Senate Majority PAC and money from Sixteen Thirty Fund, a nonprofit that does not disclose its donors. That figure is from 2024 reporting, not a 2026 quarterly. <Cite href={FEC.gazette}>Denver Gazette, Dec 12, 2024</Cite>
            </p>
            <p>
              Talarico has his own super PAC. <strong className="text-gray-900">Lone Star Rising PAC</strong> reported $22.3 million in independent expenditures through Sep 30, 2026 ($22,336,106.16). In the third quarter alone, $12.6 million opposed Paxton ($12,550,929.12) and $1.23 million supported Talarico ($1,234,564.75). <Cite href={FEC.lsr}>October quarterly</Cite> An earlier approximate total of about $3.98 million in support, summed from 24- and 48-hour reports as of Oct 12, was not re-derived from this quarterly and is not updated here.
            </p>
            <p>
              And about half of Talarico's itemized individual money in the third quarter came from out of state: 58.1% on Schedule A. <Cite href={FEC.talarico}>FEC</Cite> <Cite href={FEC.fox}>Fox News</Cite>
            </p>
          </div>
        </div>

        <Section title="What is still ahead" sub="The quarterly deadline has passed">
          <p>
            October quarterly reports, covering July 1 through Sep 30, were due Oct 15, 2026. The committees in this story have filed them. Pre-general reports, covering Oct 1 through Oct 14, are due Oct 22, 2026. Those will be the next full receipt and cash totals for the candidate campaigns. Independent expenditure notices are on the 24-hour clock through Election Day. Candidate committees have also filed 48-hour notices of contributions of $1,000 or more since mid-October. Those notices are not folded into the receipt totals above, because they leave out smaller donations.
          </p>
          <p>
            Green Advocacy Project, Western Futures Fund, and United Futures Inc. appear as organizations on the Nebraska reports. Their own funders are not listed on these FEC filings.
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
