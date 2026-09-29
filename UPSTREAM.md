# Upstream and maintenance review

Independent maintenance of `rehype-parse@8.0.5` as `@stackline/rehype-parse`.

- Source history: https://github.com/rehypejs/rehype/tree/476d219cdd69f051bd5f64532e1cea237588c5f5
- Original npm integrity: `sha512-Ds3RglaY/+clEX2U2mHflt7NlMA72KspZ0JLUJgBBLpRddBcEw3H8uYZQliQriku22NZpYMfjDdSgHcjxue24A==`.
- Issues checked: 2026-09-29T00:22:03.231053+00:00.
- Original authors, notices and license are retained. Published runtime and declaration file hashes are recorded in `.stackline/upstream.json`; reviewed differences are explicitly listed there.
- Original functional suites run against both source and the extracted final tarball. Type checks and the complete development/runtime audit must pass.

This maintenance branch selects the npm package from the upstream monorepo into the repository root and retains the upstream Git history. Shared tests are narrowed to this package and wired to its local implementation. Other monorepo products are not published by this repository.

## Issue triage

- https://github.com/rehypejs/rehype/issues/196: The issue concerns the monorepo plugin-directory link to Shiki, not the HTML parser API or runtime. This package has no plugin directory. Its parser and parse-error fixtures are retained.

An additional reproduced TypeScript defect was fixed: the two public conversion options are declared with the same property types without loading incompatible parse5 v7 declarations. The required parse5 v6 runtime and functional behavior are unchanged. Valid and invalid options are compile-checked.

The evidence query fetched the latest 100 open and 30 closed issue/PR entries and removed PRs. This is a bounded review, not a claim of exhaustive issue history or resolution of every issue.

## Release verification

GitHub Actions publishes the reviewed passing-CI tarball. Release completion requires exact source identity, zero open CodeQL alerts, npm provenance and tarball identity, normal and aliased installs, and matching immutable GitHub release assets. Existing versions are never replaced.
