// Link to Codewars Kata: https://www.codewars.com/kata/52685f7382004e774f0001f7/
// Kata Level: 5kyu

function humanReadable(seconds) {
    let time = [3600, 60, 1]
    let r = []
    for(i = 0; i < time.length; i++){
        if(seconds >= time[i]){
            let t = Math.floor(seconds / time[i])
            r.push(("0" + t).slice(-2))
            seconds -= (time[i] * t)
        }
        else{
            r.push('00')
        }
    }
    return r.join(':')
}