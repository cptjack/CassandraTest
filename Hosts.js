/*
 *
 * @author: Akank
 */

var Hosts = {};

/*
 * It's a host list. Add all hosts here.
 */
var hostsAddress = ['127.0.0.1:9160', '127.0.0.2:9160'];

/*
 * Method to return the list of all hosts
 */
Hosts.getHosts = function() {
	return hostsAddress;
};

module.exports = Hosts;
