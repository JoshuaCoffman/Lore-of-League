import { useEffect, useState } from "react";

export function useService(callback: any) {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        if (callback) {
            let loading = true;
            callback().then((stuff: any) =>{ 
                if(loading){
                    setData(stuff)
            }} )
            return () => {
                loading = false;
            }
        }
    }, [callback])

    return {data};
}