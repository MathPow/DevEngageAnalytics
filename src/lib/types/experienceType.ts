export interface Experience {
  title: string;
  compagnyName: string;
  startDate: Date;
  endDate?: Date;
}

export interface Certificate {
  title: string;
  compagnyName?: string;
  issuedDate: Date;
}
