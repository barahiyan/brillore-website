# Content Source Notes

All website copy is derived from the **Brillore Holdings company profile**
(`Brilore holding.pdf`) and the approved content brief, then rewritten for web
readability. No claims were invented; no fake projects, certificates, clients, or
testimonials were added. The site uses confident but credible language and avoids
superlatives ("number one", "leading") that the profile does not support.

The single source of copy lives in:

- `src/data/content.ts` — company info, vision, mission, highlights, why-choose,
  industries, compliance, navigation.
- `src/data/services.ts` — core business areas, full service catalogue, process,
  service-interest options.

## Section-by-section mapping

| Website section                         | Source in company profile                          | Where it renders |
| --------------------------------------- | -------------------------------------------------- | ---------------- |
| **Welcome / Hero message**              | Tagline + company description                      | `home/Hero.tsx` |
| **Introduction / About**                | Company description & core promise                 | `home/AboutPreview.tsx` |
| **Vision & Mission**                    | Vision, Mission, Mission points                    | `data/content.ts` (vision/mission), referenced in About + Why-Choose |
| **Core business areas**                 | Oil & Gas Measurements, Fire Safety, Marine        | `home/CoreBusinessPreview.tsx`, `services/*` |
| **Services & activities**               | Oil flow measurement, meter verification, pigging, tank thickness, cathodic protection, fire safety, marine support, technical reporting | `data/services.ts` → Services page |
| **Why choose us**                       | Accuracy, reliability, regulatory/safety alignment, clear reporting, asset reliability | `home/WhyChoosePreview.tsx` |
| **Industries served**                   | Oil & gas operators, depots/terminals, industrial, marine, fire safety | `home/IndustriesPreview.tsx` |
| **Supporting documents / compliance**   | Tax Clearance Certificate, Business Licence, ISO 9001:2015 | `home/CompliancePreview.tsx` |
| **Contact information**                 | Phone, email, website, office, WhatsApp            | `contact/*`, footer, `data/content.ts` |

## Compliance handling (important)

The profile references three credentials: **Tax Clearance Certificate**,
**Business Licence**, and **ISO 9001:2015 Certification**. Per the brief, the site
presents these as **elegant credential cards** — it does **not** display
high-resolution document scans or offer downloads. A line notes documents are
"available on request during formal engagement and due diligence." Swap in real,
approved files only if/when the client confirms.

## Rewriting principles applied

- Long profile paragraphs were condensed into scannable web copy.
- Headlines and subheadings follow the approved brief wording where specified.
- Service descriptions were tightened for clarity while preserving meaning.
- Grammar and consistency were normalized for a corporate audience.

## Verified contact details

| Field    | Value                          |
| -------- | ------------------------------ |
| Phone    | +255 773 249 292               |
| Email    | info@brillore.co.tz            |
| Website  | www.brillore.co.tz             |
| Office   | Dar es Salaam, Tanzania        |
| WhatsApp | https://wa.me/255773249292     |

> Update these in one place — `src/data/content.ts` — if anything changes.
