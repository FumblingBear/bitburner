/* eslint-disable no-empty */
import { NS } from '@ns'

export async function main(ns : NS) : Promise<void> {
    mapNetwork(ns, breakIn)
}

function breakIn(ns, server) {
    // Attempt to open as many ports as possible on a server passed to function
    ns.tprint(server)

    try {ns.brutessh(server)} catch{}
    try {ns.ftpcrack(server)} catch{}
    try {ns.relaysmtp(server)} catch{}
    try {ns.sqlinject(server)} catch{}
    try {ns.httpworm(server)} catch{}
    try {ns.nuke(server)} catch{}
}

function mapNetwork(ns, func) {
    const network = new Map(JSON.parse(ns.read("/data/nmap.txt")))

    function map(func, currentServer = "home") {
        const connectedServers = network.get(currentServer)
        for (const server of connectedServers) {
            func(ns, server)
            map(func, server)
        }
    }
    map(func)
}