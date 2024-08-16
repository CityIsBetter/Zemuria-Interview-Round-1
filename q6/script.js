function rateLimitedFunction(func) {
    let lastCall = 0;

    return function(){
        const now = Date.now();

        if (now - lastCall >= 2000){
            lastCall = now;
            func()
        }
    }
}

function Func() {
    console.log("Function executed at:", Date.now());
}

const rateFunc = rateLimitedFunction(Func);

rateFunc();
rateFunc();
setTimeout(rateFunc, 1500);
setTimeout(rateFunc, 2500);