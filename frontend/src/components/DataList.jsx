import { useEffect, useState } from "react";
import "../styles/DataListStyle.css"
import Card from "./Card";
import { useNavigate } from "react-router-dom";


function DataList(){

    const navigate = useNavigate();
    const [data,setdata] = useState([]);

    const [loading, setLoading] = useState(true);
    const [erro, setErro] = useState(null);

    const [pagina, setPagina] = useState(1);
    const itensPorPagina = 7;

    useEffect(() => {
        console.log("Componente montado!")
        getData()
    },[])

    useEffect(() => {
        console.log("Data mudou!")
    },[data])

    function getData() {
        setLoading(true);
        setErro(null);

        fetch("http://localhost:3001/musicas")
            .then((res) => {
            if (!res.ok) {
                throw new Error("Erro ao buscar dados");
            }
            return res.json();
            })
            .then((response) => {
            setdata(response);
            })
            .catch((err) => {
            console.error(err);
            setErro("Não foi possível carregar as músicas");
            })
            .finally(() => {
            setLoading(false);
            });
}


    const totalPaginas = Math.ceil((data?.length || 0) / itensPorPagina);

    const inicio = (pagina - 1) * itensPorPagina;
    const fim = inicio + itensPorPagina;

    const dadosPagina = Array.isArray(data)
        ? data.slice(inicio, fim)
        : [];



        if (loading) {
             return <p>Carregando músicas...</p>;
        }

        if (erro) {
            return <p>{erro}</p>;
        }


    return(
    <>
        <button 
            className="btn-large"
            onClick={() => navigate("/gerenciar")}
        >
            Gerenciar músicas
        </button>

        <div className="containerDataList">
            {dadosPagina.map((usr) => (
                <Card 
                    key={usr.id}
                    music={usr}
                />
            ))}
        </div>

        <div className="pagination">
            <button
                className="btn-nav"
                onClick={() => setPagina((p) => Math.max(p - 1, 1))}
                disabled={pagina === 1}
            >
                ⬅ Anterior
            </button>

            <span className="page-info">
                Página {pagina} de {totalPaginas}
            </span>

            <button
                className="btn-nav"
                onClick={() => setPagina((p) => Math.min(p + 1, totalPaginas))}
                disabled={pagina === totalPaginas}
            >
                Próxima ➡
            </button>
        </div>

        <p className="footer">
            Feito por Cecília Lucchesi Mardegan
        </p>
    </>
)
}

export default DataList;