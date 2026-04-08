import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/DetailsStyle.css";

function Detalhes(){

    const { id } = useParams();
    const navigate = useNavigate();
    const [musica, setMusica] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3001/musicas/${id}`)
        .then(res => res.json())
        .then(data => setMusica(data))
    }, [id]);

    if(!musica) return <p className="loading">Carregando...</p>;

    return (
        <div className="details-container">
            <h2>{musica.musica}</h2>

            <div className="detail-item">
                <strong>Artista:</strong> {musica.artista}
            </div>

            <div className="detail-item">
                <strong>Álbum:</strong> {musica.album}
            </div>

            <div className="detail-item">
                <strong>Ano:</strong> {musica.ano}
            </div>

            <div className="detail-item">
                <strong>Gênero:</strong> {musica.genero}
            </div>

            <div className="details-header">
                <button 
                    className="btn-details"
                    onClick={() => navigate(-1)}
                >
                    ← Voltar
                </button>
            </div>
        </div>
    )
}

export default Detalhes;