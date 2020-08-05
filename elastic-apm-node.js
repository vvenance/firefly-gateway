module.exports = {
    serviceName: process.env.STORE_APP_NAME,
    serviceNodeName : process.env.INSTANCE_ID,
    serviceVersion : process.env.COMMIT_ID,
    secretToken: process.env.ES_ADDON_APM_AUTH_TOKEN || "",
    serverUrl: process.env.ES_ADDON_APM_HOST || "http://localhost:8200",
    active: process.env.NODE_ENV === 'production',
    logLevel : 'debug',
    logUncaughtExceptions : true, 
  }
