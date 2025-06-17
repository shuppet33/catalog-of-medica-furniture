import { createContext } from "react";

// 1. Создаем контекст
const ProductContext = createContext({
    product: [],
    loading: false
});

// 2. Создаем провайдер
export function ProductContextProvider({ children }) {
    return (
        <ProductContext.Provider value={{}}>
            {children}
        </ProductContext.Provider>
    );
}