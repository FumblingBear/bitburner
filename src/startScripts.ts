/** @param {NS} ns */
export async function main(ns) {
	// servers that have no RAM
	var serversNoRAM = ["johnson-ortho", // 2 ports
						"crush-fitness", // 2 ports
						"computek",		 // 3 ports
						"syscore"];		 // 4 ports
						

	// servers with 0 ports to hack and 4 GB of RAM
	var servers0Port4GB = ["n00dles"];

	// servers with 0 ports to hack and 16 GB of RAM
	var servers0Port16GB = ["foodnstuff",
							"sigma-cosmetics",
							"joesguns",
							"hong-fang-tea",
							"harakiri-sushi",
							"nectar-net"];

	var servers0Port = ["foodnstuff",
						"sigma-cosmetics",
						"joesguns",
						"hong-fang-tea",
						"harakiri-sushi",
						"nectar-net",
						"n00dles"];

	var servers0PortLength = servers0Port4GB.length + servers0Port16GB.length;

	// servers with 1 port to hack and 8 GB of RAM
	var servers1Port8GB = ["CSEC"];

	// servers with 1 port to hack and 32 GB of RAM
	var servers1Port32GB = ["zer0",
							"neo-net",
							"max-hardware",
							"iron-gym"];

	var servers1PortLength = servers1Port8GB.length + servers1Port32GB.length;

	// servers with 2 ports to hack and 16 GB of RAM
	var servers2Port16GB = ["avmnite-02h"];

	// servers with 2 ports to hack and 32 GB of RAM
	var servers2Port32GB = ["phantasy",
							"omega-net"];

	// servers with 2 ports to hack and 64 GB of RAM
	var servers2Port64GB = ["the-hub",
							"silver-helix"];

	var servers2PortLength = servers2Port16GB.length + servers2Port32GB.length + servers2Port64GB.length;

	// servers with 3 ports to hack and 16 GB of RAM
	var servers3Port16GB = ["catalyst",
							"netlink"];


	// servers with 3 ports to hack and 32 GB of RAM
	var servers3Port32GB = ["summit-uni"];

	// servers with 3 ports to hack and 64 GB of RAM
	var servers3Port64GB = ["I.I.I.I"];

	// servers with 3 ports to hack and 128 GB of RAM
	var servers3Port128GB = ["rothman-uni"];

	var servers3PortLength = servers3Port16GB.length + servers3Port32GB.length + servers3Port64GB.length + servers3Port128GB.length;

	// servers with 5 ports to hack and 1 GB of RAM
	var servers5Port1GB = ["darkweb"];

	// servers with 5 ports to hack and 32 GB of RAM
	var servers5Port32GB = ["zb-institute"];

	var servers5PortLength = servers5Port1GB.length + servers5Port32GB.length;

	for (var i = 0; i < servers0PortLength; ++i) {
		var serv = servers
	}
}