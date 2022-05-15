import { createContext, useContext } from "react";

const storesCtx = createContext(null);

export function useStores(){
    return useContext(storesCtx);
}

export function StoresProvider({  chilldren  }){
    return(
        <storesCtx.Provider value={{}}>
            {chilldren}
        </storesCtx.Provider >
    )
}