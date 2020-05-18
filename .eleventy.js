module.exports = function(config) {

    config.addPassthroughCopy("src/img");
    config.addPassthroughCopy("src/style-min.css");
    config.addPassthroughCopy("src/style.css");

    return  {
      dir: {
        input: "src",
        output: "dist",
        data: "_data"
      }
    };
  
};