function getCurrentDate(): void {
    console.log(Date.now());
}

window.addEventListener("load", () => {
    setTimeout(() => {
        getCurrentDate();
    }, 10000);
});

function createLogger(message: string): () => void {
    const logMessage = `Сообщение: ${message}`;
    return () => {
        console.log(logMessage);
    };
}

const logger = createLogger("Привет, это замыкание!");
logger();