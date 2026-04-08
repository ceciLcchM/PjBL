import "../styles/CardStyle.css"
import { useNavigate } from "react-router-dom";

function Card({ music }) {

    const navigate = useNavigate();

    return (
        <div className="card">
            <div className="card-content">
                <h3>{music.musica}</h3>
                <p><strong>Artista:</strong> {music.artista}</p>
                <p><strong>Álbum:</strong> {music.album}</p>
                <p><strong>Ano:</strong> {music.ano}</p>
                <p><strong>Gênero:</strong> {music.genero}</p>
            </div>

            <div className="card-actions">
                <button 
                    className="btn-large"
                    onClick={() => navigate(`/musica/${music.id}`)}
                >
                    Ver detalhes
                </button>
            </div>
        </div>
    );
}

export default Card;