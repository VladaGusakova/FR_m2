function getCurrentDate() {
    console.log(Date.now());
}
window.addEventListener("load", () => {
    setTimeout(() => {
        getCurrentDate();
    }, 10000);
});

function createLogger(message) {
    const logMessage = `Сообщение: ${message}`;
    return () => {
        console.log(logMessage);
    };
}
const logger = createLogger("Привет, это замыкание!");
logger();
