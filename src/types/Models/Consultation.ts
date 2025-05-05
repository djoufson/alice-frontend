import type { Doctor } from "./Doctor";
import type { Patient } from "./Patient";

export enum ConsultationStatus {
  Requested = "Requested",
  Accepted = "Accepted",
  Finished = "Finished",
}

export interface Consultation {
  id: string;
  doctorId: string;
  startDate: Date;
  patientId: string;
  consultationStatus: ConsultationStatus;
  prescriptionId: (string | null)[];
  doctor: Doctor;
  patient: Patient;
}

export interface ConsultationModel {
  consultation: Consultation;
  isLoading: boolean;
}