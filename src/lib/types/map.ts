import { styles } from '../data/styles';

export type StyleKey = keyof typeof styles;

export type StyleContextType = {
    styles: Record<StyleKey, string> ;
    selectedStyle: StyleKey;
    setSelectedStyle: (selectedStyle: StyleKey) => void;
}