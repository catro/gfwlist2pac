GFWList2PAC
===========

[![Build Status](https://travis-ci.org/catro/gfwlist2pac.svg?branch=master)](https://travis-ci.org/catro/gfwlist2pac)

Generate O(1) PAC file from gfwlist.

    usage: main.py [-h] [-i GFWLIST] -f PAC -p PROXY [--user-rule USER_RULE]
    
    optional arguments:
      -h, --help            show this help message and exit
      -i GFWLIST, --input GFWLIST
                            path to gfwlist
                            If it is not set, the latest gfwlist if downloaded.
      -f PAC, --file PAC    path to output pac
      -p PROXY, --proxy PROXY
                            the proxy parameter in the pac file, for example,
                            "SOCKS5 127.0.0.1:1080;"
      --user-rule           path to user rule
