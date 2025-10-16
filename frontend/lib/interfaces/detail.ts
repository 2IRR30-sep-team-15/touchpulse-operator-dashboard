export interface Detail {
    email: string;
    phone: string;
    languages: string[];
    sight: 'Fully sighted' | 'Partially sighted' | 'Blind';
    cane: boolean;
    guideDog: boolean;
}