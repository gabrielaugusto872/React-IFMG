import React from "react";

class Timer extends React.Component {
    state = {seconds: 0};

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState((prev) => ({seconds: prev.seconds +1}));
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        return (
            <>
                {this.props.render(this.state.seconds)}
            </>
        );
    }

}

export default Timer;