export interface Profile {
    id: string;
    name: string;
    username: string;
    image?: string;
    email: string;
    phone: string;
    languages: string[];
    accessibility: {
        sight: 'Fully sighted' | 'Partially sighted' | 'Blind';
        cane: boolean;
        guideDog: boolean;
    };
}