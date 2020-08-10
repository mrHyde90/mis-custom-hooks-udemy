import { useState, useEffect, useRef } from 'react';

export const useFetch = (url) => {
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    //Cuando se desmonte pone la referencia a falso
    //pero no reenderiza
    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, []);

    useEffect(() => {
        setState({ data: null, loading: true, error: null });
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                //Para evitar que se llame si el componente ya no existe
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                } else {
                    console.log("Setstate no se llamo");
                }
            })
            .catch(() => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                });
            });
    }, [url]);
    return state;
}
