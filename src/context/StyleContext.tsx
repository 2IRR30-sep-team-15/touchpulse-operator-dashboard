import { createContext, FC, ReactNode, useState } from "react";
import { StyleKey, StyleContextType } from '@/lib/types/map'
import { styles } from '@/lib/data/styles';

export const StyleContext = createContext<StyleContextType | null>(null);

const StyleProvider: FC<{children: ReactNode}> = ({ children }) => {
    const [selectedStyle, setSelectedStyle] = useState<StyleKey>('dark');
    return <StyleContext value = {{ styles, selectedStyle, setSelectedStyle }}>{children}</StyleContext>
}

export default StyleProvider;