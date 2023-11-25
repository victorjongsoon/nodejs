const os = require('os');
/**
 * Represents a server object with information about the operating system.
 * @typedef {Object} Server
 * @property {string} type - The type of operating system.
 * @property {string} architecture - The architecture of the operating system.
 * @property {number} uptime - The uptime of the operating system in seconds.
 */

/**
 * Creates a server object with information about the operating system.
 * @type {Server}
 */
const server = {
    'type': os.type(),
    'architecture': os.arch(),
    'uptime': os.uptime()
};

console.log(server);
