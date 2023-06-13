import axios from "axios";
import { useState, useEffect } from "react";

function useAxios(url) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getData() {
            try {
                const res = await axios.get(url);
                setData(res.data);
                setError(null);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        }
        getData();
    }, [url])


    return { data, error, loading }
}
export default useAxios;