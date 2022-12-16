import { AppRouter } from "./router/AppRouter";

const App = () => {
    return (
        <>
            <header className="bg-dark text-light text-center py-3">
                <div className="container">
                    <p className="display-4">Práctica Calendario Eventos</p>
                </div>
            </header>
            <AppRouter />
            <footer className="bg-dark text-light text-center py-3">
                <div className="container">
                    <p className="py-1">Práctica Calendario Eventos</p>
                </div>
            </footer>
        </>
    );
};

export default App;
