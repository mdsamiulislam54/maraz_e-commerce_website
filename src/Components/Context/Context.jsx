import { createContext, useEffect,useState } from "react";

export const ProductsContext = createContext();
export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [allproduct, setAllproduct] = useState([]);
    

    useEffect(()=>{
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();
    },[])

    useEffect(()=>{
        const fetchAllproduct = async () => {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            setAllproduct(data.products);
        }
        fetchAllproduct();
    },[])
    console.log(allproduct);
    return(
        <ProductsContext.Provider value={{products, allproduct, setProducts}}>
            {children}
        </ProductsContext.Provider>
    )
}

