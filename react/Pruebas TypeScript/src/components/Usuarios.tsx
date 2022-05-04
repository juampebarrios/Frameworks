import { Usuario } from '../interfaces/reqRes';
import useUsuarios from '../hooks/useUsuarios';

const Usuarios = () => {

    //CUSTOM HOOK
    const {usuarios, paginaAnterior, paginaSiguiente} = useUsuarios(); //DESTRUCTURI USUARIOS Y CARGAR USUARIOS

    //RENDERIZO ROW DE USUARIO
    // const renderItem = (usuario: Usuario) => {
    const renderItem = ({ id, avatar, first_name, last_name, email }: Usuario) => { //DESTRUCTURO usuario
        return (
            <tr key={id.toString()}>
                <td><img src={avatar} alt={first_name} style={{ width: 45, borderRadius: 50 }}></img></td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>
            <button className='btn btn-primary' onClick={paginaAnterior}>Anteriores</button>

            <button className='btn btn-primary' onClick={paginaSiguiente}>Siguiente</button>
        </>
    )
}

export default Usuarios