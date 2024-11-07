import { useState, useEffect } from 'react'

function Cronometro() {
    const [segundos, setSegundos] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [horas, setHoras] = useState(0);
    const [iniciado, setIniciado] = useState(false);

    useEffect(() => {
        let intervalo;
        if (iniciado) {
            intervalo = setInterval(() => {
                setSegundos((segundos) => segundos + 1);
            }, 1000);
        } else {
            clearInterval(intervalo);
        }
        return () => clearInterval(intervalo);
    }, [iniciado]);

    const iniciarCronometro = () => {
        setIniciado(true);
    }

    const pausarCronometro = () => {
        setIniciado(false);
    }

    const zerarCronometro = () => {
        setSegundos(0);
        setMinutos(0);
        setHoras(0);
        setIniciado(false);
    };

    useEffect(() => {
        if (segundos === 60) {
            setSegundos(0);
            setMinutos(minutos + 1);
        }
        if (minutos === 60) {
            setMinutos(0);
            setHoras(horas + 1);
        }
    }, [segundos, minutos, horas]);

    return (
        <>
            <h2>Cronômetro</h2>
            <div>
                <span>{horas < 10 ? `0${horas}` : horas}</span> :
                <span>{minutos < 10 ? `0${minutos}` : minutos}</span> :
                <span>{segundos < 10 ? `0${segundos}` : segundos}</span>
            </div>
            <div>
                {!iniciado ? (
                    <button onClick={iniciarCronometro}>Iniciar</button>
                ) : (
                    <button onClick={pausarCronometro}>Pausar</button>
                )}
                <button onClick={zerarCronometro}>Zerar</button>
            </div>
        </>
    );
}

export default Cronometro;