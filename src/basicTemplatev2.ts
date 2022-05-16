/** @param {NS} ns */
export async function main(ns) {
	var target = ns.args[0]; // Accept argument for target server name
	var moneyThresh = ns.getServerMaxMoney(target) * 0.75;
	var securityThresh = ns.getServerMinSecurityLevel(target) + 5;

	if (ns.fileExists("BruteSSH.exe", "home")) {
		ns.brutessh(target);
	} else if (ns.fileExists("FTPCrack.exe", "home")) {
		ns.ftpcrack(target);
	}
	ns.nuke(target);
	while(true) {
		if (ns.getServerSecurityLevel(target) > securityThresh) {
			await ns.weaken(target);
		} else if (ns.getServerMoneyAvailable(target) < moneyThresh) {
			await ns.grow(target);
		} else {
			await ns.hack(target);
		}
		await ns.sleep(1000); // Add a 1s sleep to prevent freezing
	}
}