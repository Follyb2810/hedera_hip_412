import type { Metadata, FileMetadata, Attribute } from "./types";
import { isValidUri, isLikelyMimeType, sha256Hex } from "./utils";

export class MetadataBuilder {
  private meta: Partial<Metadata> = {};

  constructor(name?: string, image?: string, type?: string) {
    if (name) this.meta.name = name;
    if (image) this.meta.image = image;
    if (type) this.meta.type = type;
  }

  setName(name: string) {
    this.meta.name = name;
    return this;
  }
  setDescription(d: string) {
    this.meta.description = d;
    return this;
  }
  setCreator(c: string) {
    this.meta.creator = c;
    return this;
  }
  setCreatorDID(did: string) {
    this.meta.creatorDID = did;
    return this;
  }
  setImage(uri: string) {
    this.meta.image = uri;
    return this;
  }
  setType(mime: string) {
    this.meta.type = mime;
    return this;
  }
  setFormat(fmt: string) {
    this.meta.format = fmt;
    return this;
  }
  setProperties(props: Record<string, unknown>) {
    this.meta.properties = props;
    return this;
  }

  addFile(file: FileMetadata) {
    if (!this.meta.files) this.meta.files = [];
    this.meta.files.push(file);
    return this;
  }

  addAttribute(attr: Attribute) {
    if (!this.meta.attributes) this.meta.attributes = [];
    this.meta.attributes.push(attr);
    return this;
  }

  setLocalization(loc: Metadata["localization"]) {
    this.meta.localization = loc;
    return this;
  }

  computeAndSetChecksumForImage(data: Buffer | string) {
    this.meta.checksum = sha256Hex(data);
    return this;
  }

  build(): Metadata {
    // minimal runtime validation
    if (!this.meta.name) throw new Error("name is required");
    if (!this.meta.image) throw new Error("image is required");
    if (!this.meta.type) throw new Error("type is required");
    if (!isValidUri(this.meta.image))
      throw new Error("image must be a valid URI");
    if (!isLikelyMimeType(this.meta.type))
      throw new Error("type must be a mime type");

    return this.meta as Metadata;
  }
}

export default MetadataBuilder;
