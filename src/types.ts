/**
 * TypeScript interfaces for HIP412@2.0.0 (concise, faithful to the spec)
 */

export type MimeType = string;

export interface FileMetadata {
  uri: string;
  checksum?: string;
  type: MimeType;
  is_default_file?: boolean;
  metadata?: Metadata;
  metadata_uri?: string;
}

export interface Attribute {
  trait_type: string;
  display_type?:
    | "text"
    | "boolean"
    | "percentage"
    | "boost"
    | "datetime"
    | "date"
    | "color"
    | string;
  value: string | number | boolean;
  max_value?: string | number;
}

export interface Localization {
  uri: string;
  default: string;
  locales: string[];
}

export interface Metadata {
  name: string;
  creator?: string;
  creatorDID?: string;
  description?: string;
  image: string;
  checksum?: string;
  type: MimeType;
  format?: string;
  properties?: Record<string, unknown>;
  files?: FileMetadata[];
  attributes?: Attribute[];
  localization?: Localization;
}
