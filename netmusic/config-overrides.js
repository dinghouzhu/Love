const {override, fixBabelImports,} = require ("customize-cra");

// noinspection JSUnresolvedVariable
module.exports = override(
    fixBabelImports("import", {
        libraryName: "antd", libraryDirectory: "es", style: true // change importing css to less
    })
);