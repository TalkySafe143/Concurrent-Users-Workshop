declare var self : Worker;
const { Worker: NodeWorker, isMainThread, parentPort, threadId } = require("worker_threads");

if (isMainThread) {
    module.exports = async function handleThread(raw) {
        return new Promise((resolve, reject) => {
            const worker = new NodeWorker(__filename, { workerData: raw })
            worker.on('message', (msg) => {
                resolve(msg)
            })
            worker.on('error', reject)
            worker.on('exit', (code) => {
                if (code != 0) reject(new Error(`Worker ${worker.threadId} exited whit code ${code}`))
            })
        })
    }
} else {
    parentPort?.postMessage(`Response from ${threadId}`)
}