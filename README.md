# HIP412 TypeScript SDK

Provides types, validator and builder for HIP412@2.0.0 metadata. Use `npm install`, then `npm run build` and `npm run test`.

## Quick start

1. npm install
2. npm run build
3. npm run test

## Notes

- Keep `src/schema.json` in sync with the canonical HIP412 JSON schema (the spec refers to an IPFS CID).
- Use the `MetadataBuilder` to produce metadata objects and `Hip412Validator` to validate them before pinning / serving.
# hedera_hip_412
