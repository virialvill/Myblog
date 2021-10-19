module.exports = function (config) {
    config.addPassthroughCopy("./src/css/");
    config.addPassthroughCopy("./src/img/");
    config.addPassthroughCopy("./src/js/");
  
    return {
      dir: {
        input: "src",
        output: "dist",
        
      },
    };
  };
  