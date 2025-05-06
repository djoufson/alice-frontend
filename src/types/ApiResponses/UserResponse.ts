import { Patient } from "../Models/Patient";
import { Doctor } from "../Models/Doctor";

export default interface UserResponse {
  isPatient: boolean;
  isDoctor: boolean;
  patient: Patient | null;
  doctor: Doctor | null;
}
