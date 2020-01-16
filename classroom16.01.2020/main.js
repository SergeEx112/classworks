let timerFunc = () => {
    let time;
    return () => {
        if (!time) {
            time = new Date().getTime();
            return 'Enabled';
        } else {
            let olderTime = time;
            let temp =new Date().getTime();
            time = temp
            return temp - olderTime;
        }
    }
}

let getTime = timerFunc();