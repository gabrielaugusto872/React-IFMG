const Header = () => {
    const myStyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Sans-Serif"
    };

    const meuEstilo = {
        backgroundColor: "red",
        margin: "10px",
        marginColor: "black"
    }
    return (
        <>
            <h1 style={myStyle}>Hello Style!</h1>
            <p>Add a little style!</p>

            <h2 style={meuEstilo}>Estilo 2</h2>
        </>
    );
}

ReactDOM.render(<Header />, document.getElementById('root'));