# Citation data

The number shown on the portfolio is **Crossref Cited-by**, identified by each paper's DOI and checked against its title. It is not a Google Scholar count. The adjacent Google Scholar link opens an independent DOI/title search.

- `citations-data.js` is the local, offline-readable snapshot.
- `site.js` checks stale data when the publications section comes into view, then schedules checks six hours after successful verification while that section remains visible. A manual **Refresh citations** button bypasses the freshness interval. Requests are sequential, with at least 300 ms between them, respecting the public singleton pool's one-request concurrency limit observed on 2026-10-29.
- Failed requests are retried after five minutes while the section is visible, or manually; returning online also permits recovery. They never erase verified values or change the date of a previous verification. Zero counts and unavailable counts produce no badge. Checking, partial success, failure and offline states are visible, without labelling a failed refresh as a successful update.
- Badge colour strength is scaled to the largest verified count across the full publication list, so filtering does not change the scale. Source and verification date appear in its accessible description and hover tooltip; clicking or tapping the badge opens the same explanation without leaving the page.
- Run `node scripts/update-citations.mjs` from the website directory to refresh the source snapshot. This script changes a local file only; it never publishes or pushes.
- `.github/workflows/citations.yml` is a prepared GitHub Pages workflow. Once the repository is published with Pages using GitHub Actions, it refreshes and deploys daily at 07:23 UTC (15:23 Beijing time), on a `main` push, or when manually run. It creates no bot commits. The updater can read the last deployed snapshot to preserve newer successful values when Crossref is temporarily unavailable. 
- No API key, browser login, personal e-mail address, scraping or Google Scholar automation is used.

Sources: [Crossref REST API](https://www.crossref.org/documentation/retrieve-metadata/rest-api/), [Crossref Cited-by](https://www.crossref.org/services/cited-by/), [Google Scholar help](https://scholar.google.com/intl/en/scholar/help.html).

Gene formatting follows the [HGNC FAQ](https://www.genenames.org/help/faq/): gene symbols are italic; protein and pathway names are roman. The local allowlist covers FCGR2A, Slc20a2 and ATXN3 in their gene-related papers. The mouse symbol's case is retained. GLP-1R agonist/receptor and Notch signalling remain roman. Plain-text citation copying is unchanged.
