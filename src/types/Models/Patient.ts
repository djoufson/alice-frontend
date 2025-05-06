export interface Patient {
  id: string;
  email: string;
  firstName: string;
  lastName: string | null;
  imageUrl: string | null;
}
