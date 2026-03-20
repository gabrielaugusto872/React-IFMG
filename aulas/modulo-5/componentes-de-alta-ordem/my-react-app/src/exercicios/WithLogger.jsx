function WithLogger(WrappedComponent){
    return function NewComponent(props){
        console.log("Renderizando: ", WrappedComponent.name);
        return(
            <WrappedComponent {...props} />
        );
    };
}

export default WithLogger;