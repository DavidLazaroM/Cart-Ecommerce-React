import { useState, useEffect } from "react";

export default function useFetch(url, options) {
  const [loading, setLoading] = useState(true); // Estado para indicar si la solicitud está en proceso
  const [result, setResult] = useState(null); // Estado para almacenar el resultado de la solicitud
  const [error, setError] = useState(null); // Estado para almacenar cualquier error ocurrido durante la solicitud

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url, options); // Realiza la solicitud HTTP utilizando fetch
        const json = await res.json(); // Convierte la respuesta en formato JSON
        setResult(json); // Actualiza el estado con el resultado de la solicitud
        setLoading(false); // Indica que la solicitud ha finalizado
      } catch (err) {
        setError(err); // Actualiza el estado con el error ocurrido
      } finally {
        setLoading(false); // Indica que la solicitud ha finalizado
      }
    })();
  }, [url, options]);

  return { loading, result, error };
}