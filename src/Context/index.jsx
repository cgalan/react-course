import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {

    // Shopping cart quantity
    const [count, setCount] = useState(0);

    // Product Detail. open/close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail =() => setIsProductDetailOpen(true)
    const closeProductDetail =() => setIsProductDetailOpen(false)

    // Checkout Side menu open/close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu =() => setIsCheckoutSideMenuOpen(true)
    const closeCheckoutSideMenu =() => setIsCheckoutSideMenuOpen(false)

    // Product Detail. show product
    const [productToShow, setProductToShow] 
    = useState({
        title: "",
        price: "",
        description: "",
        images: [],
    })

    // Shopping cart. Add products to cart
    const [cartProducts, setCartProducts] = useState([])

    // Shopping cart. Order
    const [order, setOrder] = useState([])


    console.log('Contador: ', count);
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order,
            setOrder
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
