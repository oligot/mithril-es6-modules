SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "mithril-es6-modules/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.13",
      "express": "npm:express@4.14.0",
      "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
      "events": "github:jspm/nodelibs-events@0.2.0-alpha",
      "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
      "process": "github:jspm/nodelibs-process@0.2.0-alpha",
      "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
      "path": "github:jspm/nodelibs-path@0.2.0-alpha",
      "crypto": "github:jspm/nodelibs-crypto@0.2.0-alpha",
      "assert": "github:jspm/nodelibs-assert@0.2.0-alpha",
      "http": "github:jspm/nodelibs-http@0.2.0-alpha",
      "util": "github:jspm/nodelibs-util@0.2.0-alpha",
      "url": "github:jspm/nodelibs-url@0.2.0-alpha",
      "os": "github:jspm/nodelibs-os@0.2.0-alpha",
      "constants": "github:jspm/nodelibs-constants@0.2.0-alpha",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.2.0-alpha",
      "vm": "github:jspm/nodelibs-vm@0.2.0-alpha",
      "net": "github:jspm/nodelibs-net@0.2.0-alpha",
      "querystring": "github:jspm/nodelibs-querystring@0.2.0-alpha",
      "mithril-node-render": "npm:mithril-node-render@0.5.0",
      "morgan": "npm:morgan@1.7.0",
      "cheerio": "npm:cheerio@0.22.0"
    },
    "packages": {
      "npm:express@4.14.0": {
        "map": {
          "array-flatten": "npm:array-flatten@1.1.1",
          "accepts": "npm:accepts@1.3.3",
          "content-disposition": "npm:content-disposition@0.5.1",
          "depd": "npm:depd@1.1.0",
          "escape-html": "npm:escape-html@1.0.3",
          "cookie-signature": "npm:cookie-signature@1.0.6",
          "encodeurl": "npm:encodeurl@1.0.1",
          "fresh": "npm:fresh@0.3.0",
          "etag": "npm:etag@1.7.0",
          "merge-descriptors": "npm:merge-descriptors@1.0.1",
          "finalhandler": "npm:finalhandler@0.5.0",
          "parseurl": "npm:parseurl@1.3.1",
          "on-finished": "npm:on-finished@2.3.0",
          "methods": "npm:methods@1.1.2",
          "path-to-regexp": "npm:path-to-regexp@0.1.7",
          "range-parser": "npm:range-parser@1.2.0",
          "utils-merge": "npm:utils-merge@1.0.0",
          "send": "npm:send@0.14.1",
          "type-is": "npm:type-is@1.6.13",
          "vary": "npm:vary@1.1.0",
          "qs": "npm:qs@6.2.0",
          "serve-static": "npm:serve-static@1.11.1",
          "proxy-addr": "npm:proxy-addr@1.1.2",
          "debug": "npm:debug@2.2.0",
          "cookie": "npm:cookie@0.3.1",
          "content-type": "npm:content-type@1.0.2"
        }
      },
      "npm:finalhandler@0.5.0": {
        "map": {
          "escape-html": "npm:escape-html@1.0.3",
          "on-finished": "npm:on-finished@2.3.0",
          "debug": "npm:debug@2.2.0",
          "unpipe": "npm:unpipe@1.0.0",
          "statuses": "npm:statuses@1.3.0"
        }
      },
      "npm:send@0.14.1": {
        "map": {
          "depd": "npm:depd@1.1.0",
          "encodeurl": "npm:encodeurl@1.0.1",
          "escape-html": "npm:escape-html@1.0.3",
          "etag": "npm:etag@1.7.0",
          "fresh": "npm:fresh@0.3.0",
          "on-finished": "npm:on-finished@2.3.0",
          "range-parser": "npm:range-parser@1.2.0",
          "debug": "npm:debug@2.2.0",
          "destroy": "npm:destroy@1.0.4",
          "ms": "npm:ms@0.7.1",
          "mime": "npm:mime@1.3.4",
          "statuses": "npm:statuses@1.3.0",
          "http-errors": "npm:http-errors@1.5.0"
        }
      },
      "npm:serve-static@1.11.1": {
        "map": {
          "encodeurl": "npm:encodeurl@1.0.1",
          "escape-html": "npm:escape-html@1.0.3",
          "parseurl": "npm:parseurl@1.3.1",
          "send": "npm:send@0.14.1"
        }
      },
      "npm:accepts@1.3.3": {
        "map": {
          "negotiator": "npm:negotiator@0.6.1",
          "mime-types": "npm:mime-types@2.1.12"
        }
      },
      "npm:type-is@1.6.13": {
        "map": {
          "mime-types": "npm:mime-types@2.1.12",
          "media-typer": "npm:media-typer@0.3.0"
        }
      },
      "npm:proxy-addr@1.1.2": {
        "map": {
          "forwarded": "npm:forwarded@0.1.0",
          "ipaddr.js": "npm:ipaddr.js@1.1.1"
        }
      },
      "npm:debug@2.2.0": {
        "map": {
          "ms": "npm:ms@0.7.1"
        }
      },
      "npm:on-finished@2.3.0": {
        "map": {
          "ee-first": "npm:ee-first@1.1.1"
        }
      },
      "npm:http-errors@1.5.0": {
        "map": {
          "statuses": "npm:statuses@1.3.0",
          "setprototypeof": "npm:setprototypeof@1.0.1",
          "inherits": "npm:inherits@2.0.1"
        }
      },
      "npm:mime-types@2.1.12": {
        "map": {
          "mime-db": "npm:mime-db@1.24.0"
        }
      },
      "github:jspm/nodelibs-buffer@0.2.0-alpha": {
        "map": {
          "buffer-browserify": "npm:buffer@4.9.1"
        }
      },
      "github:jspm/nodelibs-stream@0.2.0-alpha": {
        "map": {
          "stream-browserify": "npm:stream-browserify@2.0.1"
        }
      },
      "npm:stream-browserify@2.0.1": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "readable-stream": "npm:readable-stream@2.1.5"
        }
      },
      "npm:buffer@4.9.1": {
        "map": {
          "isarray": "npm:isarray@1.0.0",
          "ieee754": "npm:ieee754@1.1.6",
          "base64-js": "npm:base64-js@1.2.0"
        }
      },
      "npm:readable-stream@2.1.5": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "isarray": "npm:isarray@1.0.0",
          "core-util-is": "npm:core-util-is@1.0.2",
          "process-nextick-args": "npm:process-nextick-args@1.0.7",
          "buffer-shims": "npm:buffer-shims@1.0.0",
          "string_decoder": "npm:string_decoder@0.10.31",
          "util-deprecate": "npm:util-deprecate@1.0.2"
        }
      },
      "github:jspm/nodelibs-url@0.2.0-alpha": {
        "map": {
          "url-browserify": "npm:url@0.11.0"
        }
      },
      "github:jspm/nodelibs-http@0.2.0-alpha": {
        "map": {
          "http-browserify": "npm:stream-http@2.4.0"
        }
      },
      "npm:stream-http@2.4.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "readable-stream": "npm:readable-stream@2.1.5",
          "to-arraybuffer": "npm:to-arraybuffer@1.0.1",
          "builtin-status-codes": "npm:builtin-status-codes@2.0.0",
          "xtend": "npm:xtend@4.0.1"
        }
      },
      "github:jspm/nodelibs-crypto@0.2.0-alpha": {
        "map": {
          "crypto-browserify": "npm:crypto-browserify@3.11.0"
        }
      },
      "npm:crypto-browserify@3.11.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "browserify-cipher": "npm:browserify-cipher@1.0.0",
          "create-hash": "npm:create-hash@1.1.2",
          "create-hmac": "npm:create-hmac@1.1.4",
          "create-ecdh": "npm:create-ecdh@4.0.0",
          "browserify-sign": "npm:browserify-sign@4.0.0",
          "diffie-hellman": "npm:diffie-hellman@5.0.2",
          "public-encrypt": "npm:public-encrypt@4.0.0",
          "pbkdf2": "npm:pbkdf2@3.0.8",
          "randombytes": "npm:randombytes@2.0.3"
        }
      },
      "npm:url@0.11.0": {
        "map": {
          "punycode": "npm:punycode@1.3.2",
          "querystring": "npm:querystring@0.2.0"
        }
      },
      "npm:create-hash@1.1.2": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "cipher-base": "npm:cipher-base@1.0.3",
          "ripemd160": "npm:ripemd160@1.0.1",
          "sha.js": "npm:sha.js@2.4.5"
        }
      },
      "npm:create-hmac@1.1.4": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:browserify-sign@4.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "create-hash": "npm:create-hash@1.1.2",
          "create-hmac": "npm:create-hmac@1.1.4",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "parse-asn1": "npm:parse-asn1@5.0.0",
          "bn.js": "npm:bn.js@4.11.6",
          "elliptic": "npm:elliptic@6.3.2"
        }
      },
      "npm:diffie-hellman@5.0.2": {
        "map": {
          "randombytes": "npm:randombytes@2.0.3",
          "miller-rabin": "npm:miller-rabin@4.0.0",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:public-encrypt@4.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2",
          "randombytes": "npm:randombytes@2.0.3",
          "browserify-rsa": "npm:browserify-rsa@4.0.1",
          "parse-asn1": "npm:parse-asn1@5.0.0",
          "bn.js": "npm:bn.js@4.11.6"
        }
      },
      "npm:pbkdf2@3.0.8": {
        "map": {
          "create-hmac": "npm:create-hmac@1.1.4"
        }
      },
      "npm:browserify-cipher@1.0.0": {
        "map": {
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "browserify-des": "npm:browserify-des@1.0.0",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
        }
      },
      "npm:browserify-aes@1.0.6": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "create-hash": "npm:create-hash@1.1.2",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "cipher-base": "npm:cipher-base@1.0.3",
          "buffer-xor": "npm:buffer-xor@1.0.3"
        }
      },
      "npm:browserify-des@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "cipher-base": "npm:cipher-base@1.0.3",
          "des.js": "npm:des.js@1.0.0"
        }
      },
      "npm:evp_bytestokey@1.0.0": {
        "map": {
          "create-hash": "npm:create-hash@1.1.2"
        }
      },
      "npm:create-ecdh@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "elliptic": "npm:elliptic@6.3.2"
        }
      },
      "npm:cipher-base@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:browserify-rsa@4.0.1": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "randombytes": "npm:randombytes@2.0.3"
        }
      },
      "npm:parse-asn1@5.0.0": {
        "map": {
          "browserify-aes": "npm:browserify-aes@1.0.6",
          "create-hash": "npm:create-hash@1.1.2",
          "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
          "pbkdf2": "npm:pbkdf2@3.0.8",
          "asn1.js": "npm:asn1.js@4.8.1"
        }
      },
      "npm:miller-rabin@4.0.0": {
        "map": {
          "bn.js": "npm:bn.js@4.11.6",
          "brorand": "npm:brorand@1.0.6"
        }
      },
      "npm:sha.js@2.4.5": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "npm:elliptic@6.3.2": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "brorand": "npm:brorand@1.0.6",
          "hash.js": "npm:hash.js@1.0.3"
        }
      },
      "npm:des.js@1.0.0": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:asn1.js@4.8.1": {
        "map": {
          "inherits": "npm:inherits@2.0.3",
          "bn.js": "npm:bn.js@4.11.6",
          "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
        }
      },
      "npm:hash.js@1.0.3": {
        "map": {
          "inherits": "npm:inherits@2.0.3"
        }
      },
      "github:jspm/nodelibs-os@0.2.0-alpha": {
        "map": {
          "os-browserify": "npm:os-browserify@0.2.1"
        }
      },
      "github:jspm/nodelibs-string_decoder@0.2.0-alpha": {
        "map": {
          "string_decoder-browserify": "npm:string_decoder@0.10.31"
        }
      },
      "npm:morgan@1.7.0": {
        "map": {
          "basic-auth": "npm:basic-auth@1.0.4",
          "on-finished": "npm:on-finished@2.3.0",
          "debug": "npm:debug@2.2.0",
          "depd": "npm:depd@1.1.0",
          "on-headers": "npm:on-headers@1.0.1"
        }
      },
      "npm:cheerio@0.22.0": {
        "map": {
          "entities": "npm:entities@1.1.1",
          "css-select": "npm:css-select@1.2.0",
          "dom-serializer": "npm:dom-serializer@0.1.0",
          "lodash.bind": "npm:lodash.bind@4.2.1",
          "lodash.pick": "npm:lodash.pick@4.4.0",
          "lodash.foreach": "npm:lodash.foreach@4.5.0",
          "lodash.defaults": "npm:lodash.defaults@4.2.0",
          "lodash.flatten": "npm:lodash.flatten@4.4.0",
          "lodash.filter": "npm:lodash.filter@4.6.0",
          "lodash.reject": "npm:lodash.reject@4.6.0",
          "htmlparser2": "npm:htmlparser2@3.9.1",
          "lodash.assignin": "npm:lodash.assignin@4.2.0",
          "lodash.some": "npm:lodash.some@4.6.0",
          "lodash.reduce": "npm:lodash.reduce@4.6.0",
          "lodash.map": "npm:lodash.map@4.6.0",
          "lodash.merge": "npm:lodash.merge@4.6.0"
        }
      },
      "npm:dom-serializer@0.1.0": {
        "map": {
          "entities": "npm:entities@1.1.1",
          "domelementtype": "npm:domelementtype@1.1.3"
        }
      },
      "npm:css-select@1.2.0": {
        "map": {
          "nth-check": "npm:nth-check@1.0.1",
          "boolbase": "npm:boolbase@1.0.0",
          "css-what": "npm:css-what@2.1.0",
          "domutils": "npm:domutils@1.5.1"
        }
      },
      "npm:htmlparser2@3.9.1": {
        "map": {
          "domelementtype": "npm:domelementtype@1.3.0",
          "domutils": "npm:domutils@1.5.1",
          "entities": "npm:entities@1.1.1",
          "inherits": "npm:inherits@2.0.3",
          "readable-stream": "npm:readable-stream@2.1.5",
          "domhandler": "npm:domhandler@2.3.0",
          "node-readable-stream": "npm:readable-stream@2.1.5"
        }
      },
      "npm:nth-check@1.0.1": {
        "map": {
          "boolbase": "npm:boolbase@1.0.0"
        }
      },
      "npm:domutils@1.5.1": {
        "map": {
          "dom-serializer": "npm:dom-serializer@0.1.0",
          "domelementtype": "npm:domelementtype@1.3.0"
        }
      },
      "npm:domhandler@2.3.0": {
        "map": {
          "domelementtype": "npm:domelementtype@1.3.0"
        }
      }
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "mithril-es6-modules": {
      "main": "app.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "mithril": "npm:mithril@0.2.5"
  },
  packages: {}
});
