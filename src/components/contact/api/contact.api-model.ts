export interface ContactFormField {
  id: string;
  language: 'en';
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  label: string;
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
}

export interface ContactSection {
  id: string;
  language: 'en';
  lastUpdate: string; // Stores the date in ISO 8601 format. For example: 2021-09-10T19:30:00.000Z
  title: string;
  description?: string;
  form: ContactFormField[];
  submitButtonText: string;
}
