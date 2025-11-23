import Ajv, { ValidateFunction } from "ajv";
import schema from "./schema.json";
import type { Metadata } from "./types";

const ajv = new Ajv({ allErrors: true, allowUnionTypes: true });

export class Hip412Validator {
  private validateFn: ValidateFunction<unknown>;

  constructor() {
    this.validateFn = ajv.compile(schema as object);
  }

  validate(obj: unknown): { valid: boolean; errors?: string[] } {
    const valid = this.validateFn(obj);
    if (valid) return { valid: true };
    const errors = (this.validateFn.errors || []).map(
      (e) => `${e.instancePath} ${e.message}`
    );
    return { valid: false, errors };
  }

  validateMetadata(meta: Metadata) {
    return this.validate(meta);
  }
}

export default new Hip412Validator();
