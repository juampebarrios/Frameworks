import { useReducer, useEffect } from "react"

//INTERFACE PARA STATE DE REDUCER
interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string;
}

//TYPE PARA ACTION DE REDUCER
type AuthAction = 
    | {type: 'logout'}
    | {type: 'login', payload: LoginPayload};

//TYPE PARA PAYLOAD DE AuthAction
type LoginPayload = {
    username: string;
    nombre: string;
}

//ESTADO INCIAL PARA USE REUCER
const initialState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

//REDUCER
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''
            }
        
        case 'login':
            return {
                validando: false,
                token: 'abc123',
                nombre: action.payload.nombre,
                username: action.payload.username
            }

        default:
            return state;
    }
}



const Login = () => {
    
    //USEREDUCER
    // const [state, dispatch] = useReducer(authReducer, initialState);
    const [{validando, token, nombre}, dispatch] = useReducer(authReducer, initialState); //USO DIRECTAMENTE LOS ATRIBUTOS DEL STATE
    
    //USEEFFECT PARA DISPARAR ACCION DE LOGOUT
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' }); //DISPARO ACCION DE LOGOUT
        }, 1500)
    }, [])

    //LOGIN
    const login = () => {
        dispatch({type: 'login', payload: {nombre: 'Juan', username: 'juampebar'}})
    };

    //LOGOUT
    const logout = () => {
        dispatch({type:'logout'})
    };
    
    //VALIDO
    if (validando) {
        return (
            <>
                <h3>Login</h3>
                <div className="alert alert-info">Validando...</div>
            </>
        )
    }

    return (
        <>
            <h3>Login</h3>

            {
                ( token )
                    ? <div className="alert alert-success">Autenticado como: {nombre}</div>
                    : <div className="alert alert-danger">No autenticado</div>
            }

            {
                (token)
                ? (<button className="btn btn-danger" onClick={logout}>Logout</button>)
                : (<button className="btn btn-primary" onClick={login}>Login</button>)
            }
        </>
    )
}

export default Login