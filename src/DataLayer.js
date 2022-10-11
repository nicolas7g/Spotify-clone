import React,{createContext, useContext, useReducer} from "react";

// todo este bardo para generar un contexto donde los datos puedan ser accedidos desde cualquier componente, 
//y no tener que pasar variable por variable como props (es decir parametros) entre cada componente (seria caotico!!) 
export const DataLayerContext = createContext();

export const DataLayer = ({initialState, reducer, children})=>(//children is what is wrap inside DataLayer, in this case <App>
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children} 
    </DataLayerContext.Provider>
);


export const useDataLayerValue = () => useContext(DataLayerContext);     