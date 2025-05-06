export interface DoctorRate {
  rate: number;
  numberOfVotes: number;
}

export interface WorkExperience {
  id: string;
  hospitalName: string;
  position: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
}

export interface Doctor {
  id: string;
  email: string;
  firstName: string;
  lastName: string | null;
  about: string;
  imageUrl: string | null;
  yearsOfExperience: number;
  specialization: string;
  rate: DoctorRate | null;
  experiences: WorkExperience[];
  consultationFees: number;
}
