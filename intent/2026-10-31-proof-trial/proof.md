# Proof: proof-gate trial (no site change)

Status: proven

## Commands
```sh
npm run build
test -f dist/index.html
grep -q '<h1' dist/index.html
```

## Must keep working
- The home page builds and has its one h1.

## Ways it can fail
- Build error — the hook blocks and shows the output.

## Design
N/A: nothing is built.
