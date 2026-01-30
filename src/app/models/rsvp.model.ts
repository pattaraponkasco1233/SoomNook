export type AttendanceOption = 'yes' | 'maybe' | 'no';

export interface RsvpEntry {
    name: string;
    phone: string;
    guests: number;
    attendance: AttendanceOption;
    message: string;
    submittedAt: Date;
}
