export type Certificate = {
  id: string;
  name: string;
  issuer: string;
  date: string;
  skills?: string[];
  credentialUrl?: string;
};

/*
  HOW TO ADD A CERTIFICATE:
  1. Copy the example below and remove the comment markers.
  2. Fill in the EXACT name, issuer, and completion date from your
     certificate. Do not guess or abbreviate.
  3. Paste it between the [ and ] of the array at the bottom.
  4. Add credentialUrl only if you have a real verification link.
  5. Add skills only for topics the course actually covered.

  {
    id: "example-certificate",
    name: "Exact certificate name",
    issuer: "Issuing organization",
    date: "Month YYYY",
    skills: ["Topic one", "Topic two"],
    credentialUrl: "https://example.com/verify/your-credential",
  },
*/
export const certificates: Certificate[] = [];