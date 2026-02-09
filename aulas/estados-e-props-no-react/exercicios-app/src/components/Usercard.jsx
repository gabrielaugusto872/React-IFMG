import '../styles/UserCard.css';

function Usercard (){
    const nome = "Enzo Gorlami";
    const cargo = "Professor";
    const foto = "https://yt3.googleusercontent.com/ytc/AIdro_lG2M1Xe9a4GDviTfMTAC2EkWGcSYdb4aeO_t1wDDz84A=s900-c-k-c0x00ffffff-no-r";
    const isOnline = false;
    565656565656556
    let stat = "a";
    let bord = "b";

    if(isOnline == true){
        stat = "rgb(0, 255, 76)"
        bord = "2px solid rgb(102, 207, 4)"
    } else {
        stat = "gray"
        bord = "2px solid gray"
    }

    return (
        <div className="container" style={{border: bord }}>
            <img src={foto} alt="Enzo Gorlami" className="imagem"/>
            <div className="text">
                <p className="name">{nome}</p>
                <p className="cargo"><b>Cargo:</b>{cargo}</p>
            </div>
            <div className="status" style={{backgroundColor: stat}} ></div>
        </div>
        

    )
}

export default Usercard;