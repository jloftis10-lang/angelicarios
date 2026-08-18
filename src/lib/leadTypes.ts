export type LeadIntent = "buyer" | "seller" | "relocation" | "investor" | "contact" | "guide";

export type FieldType = "text" | "email" | "tel" | "select" | "textarea";

export type FormFieldConfig = {
  name: string;
  label: string;
  type: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: string[];
};

export type LeadPayload = {
  intent: LeadIntent;
  values: Record<string, string>;
  website?: string; // honeypot
};
