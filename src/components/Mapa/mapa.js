import "./mapa.css";
function mapa(props)
{
    return(
        <div className="titulo">
            <h2>Ubícanos</h2>
        
        <iframe class="mapa"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9644120169796!2d-74.07746738467434!3d4.600397243798682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a7147877c9%3A0x378b95e9cbda0740!2sCra.%208%20%2312a-42%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1658839374658!5m2!1ses!2sco"
                >
        </iframe>
        
        <br></br>
        <h1 id="direccion"> {props.direccion}</h1>
        <hr></hr>
        <br></br>
        <h1 id="telefono">+57 601 4567899</h1>
        <br></br>
        </div>
    );
}

export default mapa;