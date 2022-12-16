
export const LoginPages = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-6 border">
                    <h2 className="mb-4">Login</h2>
                    <form className="w-100 my-5">
                        <div className="w-100 mb-2">
                            <input  
                                type="text" 
                                id="email" 
                                name="email" 
                                placeholder="Email" 
                                className="form-control mb-2" 
                            />
                            <input  
                                type="text" 
                                id="password" 
                                name="password" 
                                placeholder="Password" 
                                className="form-control mb-2" 
                            />
                        </div>
                        <div className="d-grid mt-5">
                            <button type="submit" className="btn btn-dark btn-sm form-control">Registrar</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-6 border">
                    <h2 className="mb-4">Registro</h2>
                    <form className="w-100 my-5">
                        <div className="w-100 mb-2">
                            <input  
                                type="text" 
                                id="nombre" 
                                name="nombre" 
                                placeholder="Nombre" 
                                className="form-control mb-2" 
                            />
                            <input  
                                type="text" 
                                id="email" 
                                name="email" 
                                placeholder="Email" 
                                className="form-control mb-2" 
                            />
                            <input  
                                type="text" 
                                id="password" 
                                name="password" 
                                placeholder="Password" 
                                className="form-control mb-2" 
                            />
                            <input  
                                type="text" 
                                id="password2" 
                                name="password2" 
                                placeholder="Repite contraseña" 
                                className="form-control mb-2" 
                            />
                        </div>
                        <div className="d-grid mt-5">
                            <button type="submit" className="btn btn-dark btn-sm form-control">Registrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
