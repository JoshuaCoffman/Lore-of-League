import { useEffect, useState } from "react";

export function useService(callback: any, parameters?: any) {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        if (callback) {
            let loading = true;
            callback(parameters || "").then((values: any) => {
                if (loading) {
                    setData(values)
                }
            })
            return () => {
                loading = false;
            }
        }
    }, [callback,parameters])

    return { data };
}