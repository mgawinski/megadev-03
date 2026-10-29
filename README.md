# kb — the support knowledge base

**kb** = knowledge base. What the support desk knows about how our products break, written
down where the code can keep it honest.

One desk takes reports for every product we run: `sched-prod` (calendar invites for about
300k people) and the rest. When something
goes wrong, the reports reach the desk first. This kb is how the desk triages them, what each
incident turned out to be, and why we decided what we decided.

## What's here

```
src/routes/kb/      the pages (.svx: Markdown with components)
  triage/           how the desk handles incoming reports
  incidents/        one page per big ticket
  decisions/        numbered decision records
src/lib/kb/         components and the logic they run
src/lib/layouts/    the frame every page shares
src/lib/data/       exports from the ticket system
```

## Conventions

- Words in the page, logic in `src/lib` (imported as `#lib/…`). A number that can be computed belongs in a component.
- Every page starts with frontmatter: `title`, `owner`, `status`, `reviewed`.
- A decision is never edited after it is accepted. A new record replaces it.
- A page you add is signed: its frontmatter carries your `signature` and it ends with `<RenderStamp {signature} />`, so the desk knows who wrote it.

## Owners

Support desk. Decision records: whoever signed them.

---

Exported 2026-10-04 from the `support` repo, `apps/kb/` → `src/`.

## S01E03 review and rendered page

- Review source: [`src/routes/kb/incidents/4471-review/+page.svx`](src/routes/kb/incidents/4471-review/+page.svx).
- Compiled page: [`rendered/kb/incidents/4471-review.html`](rendered/kb/incidents/4471-review.html).
- Separate reports: [parser issue #1](https://github.com/mgawinski/megadev-03/issues/1) and [form-hint issue #2](https://github.com/mgawinski/megadev-03/issues/2).

The `rendered/` directory is the static SvelteKit build, including its CSS and
JavaScript assets. It replaces the earlier manually written HTML preview. The
original incident page is preserved; the new review records the separate
causes and the engineering update supplied by the course.

### View the delivered page

GitHub's file view displays HTML source, not the rendered page. To see the
delivered page without rebuilding, clone or download this repository, serve the
whole `rendered/` directory with a static HTTP server, and open
`/kb/incidents/4471-review.html`. Keep the `_app/` directory alongside `kb/`,
because the page loads its styles and scripts from there.

The two issues link to both the review source and its compiled HTML.

### Rebuild

Use Node.js 24 and npm:

```sh
npm ci --ignore-scripts
npm run build
npm run preview -- --host 127.0.0.1
```

Open the local preview's `/kb/incidents/4471-review` route. No public hosting or
GitHub Pages configuration is required. Rebuilding refreshes the rendered output,
including the review-age display. The report counts remain a snapshot of the
export, not a live support queue.
