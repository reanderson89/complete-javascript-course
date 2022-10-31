const now = new Date();
const options = {
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
    day: 'numeric',
    year: 'numeric',
    weekday: 'long'
}

const dateUS = new Intl.DateTimeFormat("en-US", options).format(now)
// german
const dateDE = new Intl.DateTimeFormat("de-DE", options).format(now)
// icelandic
const dateIS = new Intl.DateTimeFormat("is", options).format(now)



console.log(dateUS);
console.log(dateDE);
console.log(dateIS);
