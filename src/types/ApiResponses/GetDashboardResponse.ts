export enum Gender {
  Male = "Male",
  Female = "Female",
}

export interface AgeDistribution {
  age: number;
  numberOfConsultations: number;
  percentage: number;
}

export interface GenderDistribution {
  gender: Gender;
  numberOfConsultations: number;
  percentage: number;
}

export interface GetDashboardResponse {
  totalConsultations: number;
  totalStars: number;
  ageDistribution: AgeDistribution[];
  genderDistribution: GenderDistribution[];
}
