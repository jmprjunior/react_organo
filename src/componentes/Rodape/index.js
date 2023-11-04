import "./Rodape.css";

const Rodape = () => {
    return (
        <footer className="pg_rodape">
            <div className="social">
                <a href="facebook.com" target="_blank">
                    <img src="/imagens/fb.png" alt="" />
                </a>
                <a href="twitter.com" target="_blank">
                    <img src="/imagens/tw.png" alt="" />
                </a>
                <a href="instagram.com" target="_blank">
                    <img src="/imagens/ig.png" alt="" />
                </a>
            </div>
            <img src="/imagens/logo.png" alt="Banner principal da página do Organo" />
            <h3>Desenvolvido por Alura.</h3>
        </footer>
    )
}

export default Rodape;