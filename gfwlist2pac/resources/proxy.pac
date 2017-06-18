// Generated by gfwlist2pac
// https://github.com/clowwindy/gfwlist2pac

var domains = __DOMAINS__;

var proxy = __PROXY__; // 'PROXY' or 'SOCKS5' or 'HTTPS'

var direct = 'DIRECT;';

function FindProxyForURL(url, host) {
    var suffix;
    var sub_domain;
    var pos = host.lastIndexOf('.');
    if (pos == -1) {
        return direct;
    }
    suffix = host.substring(pos + 1);
    sub_domain = domains[suffix];
    if (!sub_domain) {
        return direct;
    }
    sub_domain = sub_domain.split("|");
    host = host.substring(0, pos)
    pos = host.lastIndexOf('.');
    while(1) {
        if (pos == -1) {
            if (sub_domain.indexOf(host) == -1) {
                return direct;
            } else {
                return proxy;
            }
        }
        suffix = host.substring(pos + 1);
        if (sub_domain.indexOf(suffix) >= 0) {
            return proxy;
        }
        pos = host.lastIndexOf('.', pos - 1);
    }
}
