const MyHeader = styled.h1`
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
`;

const H2 = styled.h2`
    padding: 10px 20px;
    background-color: red;
    color: white;
`;

function App() {
    return (
        <>
            <MyHeader>Welcome!</MyHeader>
            <H2>Bom Dia!</H2>
        </>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));