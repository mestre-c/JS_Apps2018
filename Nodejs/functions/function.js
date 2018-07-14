// 1. () --- use default values
// 2. (number) --- cache size only
// 3. (object) --- we will use those instaed

function init_cache() {
  var init_data = {
    cache_size : 10,
    location: "/temp",
    type : "btre" /* represents the type of algorithm*/
  };

  var a = arguments;
  for (var i = 0; i < a.length; i++) {
    if (typeof a[i] == 'number') {
      init_data.cache_size = a[i];
    } else if (typeof a[i] == 'object') {
      init_data = a[i];
    } else {
      throw new Error("Bad parameters to init_cache");
    }
  }
}

// Now I can call my function in different ways
init_cache();
init_cache(100);
init_cache( {
  cache_size: 50,
  location: "/var",
  type: "avltree"
})
