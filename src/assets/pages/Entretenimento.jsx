import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import styles from '../../assets/pages/css/Entretenimento.module.css';

function Entretenimento() {  
    const navigate = useNavigate();
const voltar = () => {
    navigate('/');
}
    const location = useLocation();
    useEffect(() => {
        // Recarrega a página apenas se a URL não contiver um parâmetro de consulta específico
        const shouldReload = !window.location.search.includes('reload=false');

        if (shouldReload) {
            window.location.replace(window.location.href + '?reload=false');
        }
    }, []);
    
    useEffect(() => {   
        
        // Configuração do EmulatorJS
        window.EJS_player = '#game';
        window.EJS_core = 'snes';  // Tipo do emulador
        window.EJS_mouse = false;   // Controle de mouse para SNES
        window.EJS_multitap = false; // Multitap para SNES
        window.EJS_biosUrl = 'https://raw.githubusercontent.com/LucasManoel1008/Roms-Test-Games/main/Bios/st018.rom'; // URL para BIOS
        window.EJS_gameUrl = 'https://raw.githubusercontent.com/LucasManoel1008/Roms-Test-Games/main/roms/Donkey.smc'; // URL da ROM
        window.EJS_pathtodata = 'data/';

        // Carregar o script do loader do EmulatorJS
        const script = document.createElement('script');
        script.src = 'data/loader.js'; // Certifique-se de que o caminho está correto
        script.async = true;
        document.body.appendChild(script);

        // Limpeza do efeito
        return () => {
            document.body.removeChild(script);
        };
    }, [location]);

    return (
        <div className={`container d-flex justify-content-center ${styles.entretenimento}`}>
            <div className={styles.content}>
                <h4>País do Macaco</h4>
                <div style={{ width: '640px', height: '480px', maxWidth: '100%' }}>
                    <div id="game"></div>
                </div>
                <button className='btn btn-primary' onClick={voltar}>Voltar</button>
            </div>
        </div>
    );
};

export default Entretenimento;
