import {Author} from "./author";

export interface Publication {
  ppnNo?: string[];
  doiNo?: string[];
  title?: string;
  authorList?: Author[];
  reProductionNote?: string;
  physicalDescriptionExtent?: string;
  physicalDescriptionOther?: string;
  edition?: string;
  "publication date"?: string;
  place?: string;
  publisher?: string;
  hostItemEntTitle?: string;
  bkNotation?: string[];
  classification?: string[];
}
