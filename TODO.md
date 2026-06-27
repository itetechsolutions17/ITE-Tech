# TODO

- [ ] Update `app/contact/page.tsx`
  - [ ] Remove duplicate `setLoading(false)` calls (keep single one in `finally`).
  - [ ] Improve Google Apps Script submission `fetch`:
    - [ ] Remove `mode: "no-cors"`.
    - [ ] Handle response status (`response.ok`) when possible.
  - [ ] Layout fix: place **Form** and **Info card** in the same row (same horizontal grid row on desktop).
- [ ] Run `npm run lint` (or `npm run build`) to confirm no TS/ESLint issues.
- [ ] Manual test: submit form and confirm toast + form reset.

