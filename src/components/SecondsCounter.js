function SecondsCounter(props){
    let seconds = splitToDigit(props.seconds);

    function splitToDigit(n){
        return [...n + ''].map(Number);
    }
    for(let i = seconds.length - 1; i < 5; i++){
        seconds.unshift(0);
    }
    console.log(seconds)

    const secondsToIndex = seconds.map((second, index) =>{
        return <div className="bg">{second}</div>
    })

    return <>{secondsToIndex}</>;
};

export default SecondsCounter;