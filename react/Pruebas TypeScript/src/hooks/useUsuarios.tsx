import { reqResApi } from '../api/reqRes';
import { useRef, useState, useEffect } from 'react';
import { Usuario, ReqResListado } from '../interfaces/reqRes';

const useUsuarios = () => {

    //USEREF PARA ESTABLECER PAGINA 1 DEL LISTADO
    const paginaRef = useRef(1);

    //USESTATE PARA LISTAR USUARIOS
    const [usuarios, setUsuarios] = useState<Usuario[]>([])
    
    //LLAMADO API CON AXIOS
    useEffect(() => {
        cargarUsuarios();
    }, [])

    //CARGA DE USUARIOS MEDIANTE AXIOS
    const cargarUsuarios = async () => {
        const resp = await reqResApi.get<ReqResListado>('/users', { params: { page: paginaRef.current } }) //ASIGNO INTERFACE
        setUsuarios(resp.data.data); //SETEO USUARIOS PARA USESTATE

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
        } else {
            paginaRef.current--;
            alert('No hay mas registros');
        }
    }
    
    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();
    }

    const paginaAnterior = () => {
        if(paginaRef.current > 1){
            paginaRef.current--;
            cargarUsuarios();
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior,
    }
}

export default useUsuarios