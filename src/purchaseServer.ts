/** @param {NS} ns */
export async function main(ns) {
	var ram = ns.args[0]; // accept argument for amount of ram
	var i = 0;

	while (i < ns.getPurchasedServerLimit()) {
		if (ns.getServerMoneyAvailable("home") > ns.getPurchasedServerCost(ram)) {
			var hostname = ns.purchaseServer("pserv-" + 1, ram);
			await ns.scp("basicTemplate.js", hostname);
			ns.exec("basicTemplate.js", hostname, 3, "neo-net");
			++i;
		}
	}
}