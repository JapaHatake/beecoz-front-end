export interface IUser {
    id: number;
    name: string;
    lastName: string;
    sex: 'masc' | 'fem';
    birthDate: string;
    CPF: string;
    profileImage: string;
    ranking: number;
    type: 'normal' | 'queen'
}