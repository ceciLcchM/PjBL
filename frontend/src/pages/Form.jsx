import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Form(){



    const { id } = useParams();
    const navigate = useNavigate();
    const [erro, setErro] = useState("");
    const [mensagem, setMensagem] = useState("");

    
    const [musica, setMusica] = useState("");
    const [artista, setArtista] = useState("");
    const [album, setAlbum] = useState("");
    const [ano, setAno] = useState("");
    const [genero, setGenero] = useState("");

    
    const [musicas, setMusicas] = useState([]);


    useEffect(() => {
    if (mensagem) {
        const timer = setTimeout(() => {
            setMensagem("");
        }, 2000);

        return () => clearTimeout(timer);
    }
    }, [mensagem]);

    
   useEffect(() => {
    fetch("http://localhost:3001/musicas")
        .then(res => {
            if (!res.ok) throw new Error();
            return res.json();
        })
        .then(data => setMusicas(data))
        .catch((err) => {
            console.error(err);
            setErro("Erro ao carregar músicas!");
        });
}, []); 
    
    useEffect(() => {
    if(id){
        fetch(`http://localhost:3001/musicas/${id}`)
            .then(res => {
                if (!res.ok) throw new Error();
                return res.json();
            })
            .then(data => {
                setMusica(data.musica);
                setArtista(data.artista);
                setAlbum(data.album);
                setAno(data.ano);
                setGenero(data.genero);
            })
            .catch((err) => {
                console.error(err);
                setErro("Erro ao carregar dados da música!");
            });
    }
}, [id]);;

    
    function validarCampos() {
    if (!musica || !artista || !album || !ano || !genero) {
        setErro("Todos os campos precisam estar preenchidos!");
        return false;
    }

    if (isNaN(ano)) {
        setErro("Ano precisa ser um número!");
        return false;
    }

    setErro("");
    return true;
    }
    
    const salvar = () => {

        if (!validarCampos()) return;

        const dados = {musica, artista, album, ano: Number(ano), genero};

        console.log("DADOS ENVIADOS:", dados); 

        if(id){
            fetch(`http://localhost:3001/musicas/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dados)
            })
            .then(() => {
                setMensagem("Música atualizada com sucesso!");
                setErro("");

                
                fetch("http://localhost:3001/musicas")
                    .then(res => res.json())
                    .then(data => setMusicas(data));

               
                setMusica("");
                setArtista("");
                setAlbum("");
                setAno("");
                setGenero("");

                navigate("/gerenciar"); 
            })
            .catch((err) => {
                console.error(err);
                setErro("Erro ao atualizar música.");
            });

        } else {
            fetch("http://localhost:3001/musicas", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(dados)
            })
            .then(() => {
                setMensagem("Música criada com sucesso!");
                setErro("");

                
                fetch("http://localhost:3001/musicas")
                    .then(res => res.json())
                    .then(data => setMusicas(data));

                
                setMusica("");
                setArtista("");
                setAlbum("");
                setAno("");
                setGenero("");
            })
            .catch((err) => {
                console.error(err);
                setErro("Erro ao criar música.");
            });
        }
    };

    
    const deletar = (id) => {

        const confirmar = window.confirm("Tem certeza que deseja deletar?");
        if (!confirmar) return;

        fetch(`http://localhost:3001/musicas/${id}`, {
            method: "DELETE"
        })
        .then(() => {
            setMensagem("Música deletada!");
            setErro("");
            setMusicas(musicas.filter(m => m.id !== id));
        })
        .catch((err) => {
            console.error(err);
            setErro("Erro ao deletar música!");
        });
    };

    return (
    <div className="container">

        <div className="details-header">
        <button className="btn-secondary" onClick={() => navigate("/")}>
            ← Voltar
        </button></div>

        <h1>{id ? "Editar Música" : "Gerenciamento de músicas"}</h1>
        <h2>Cadastrar música</h2>

        {erro && <p className="error">{erro}</p>}
        {mensagem && <p className="success">{mensagem}</p>}

        <div className="form-box">
            <input placeholder="Música" value={musica} onChange={e => setMusica(e.target.value)} />
            <input placeholder="Artista" value={artista} onChange={e => setArtista(e.target.value)} />
            <input placeholder="Álbum" value={album} onChange={e => setAlbum(e.target.value)} />
            <input placeholder="Ano" value={ano} onChange={e => setAno(e.target.value)} />
            <input placeholder="Gênero" value={genero} onChange={e => setGenero(e.target.value)} />

            <button className="btn-primary" onClick={salvar}>
                {id ? "Atualizar" : "Salvar"}
            </button>
        </div>

        <h2>Músicas cadastradas</h2>

        <div className="list">
            {musicas.map(m => (
                <div key={m.id} className="list-item">

                    <p>
                        <strong>{m.musica}</strong> - {m.artista} <br/>
                        Álbum: {m.album} <br/>
                        Ano: {m.ano} <br/>
                        Gênero: {m.genero}
                    </p>

                    <div className="actions">
                        <button 
                            className="btn-primary"
                            onClick={() => navigate(`/editar/${m.id}`)}
                        >
                            Editar
                        </button>

                        <button 
                            className="btn-danger"
                            onClick={() => deletar(m.id)}
                        >
                            Deletar
                        </button>
                    </div>

                </div>
            ))}
        </div>

    </div>
);

}

export default Form;