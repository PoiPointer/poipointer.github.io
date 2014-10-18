(function(window, undefined) {
  var dictionary = {
    "62264e49-9655-41f7-accf-da8a74e9e745": "Map",
    "91f50e31-c9f4-47cc-82db-636d2acf5697": "Map_parc",
    "acbf0b56-40c0-4e29-b33d-6cac68e01c90": "config",
    "b851f1aa-1e31-4a0e-afad-4a731fd9b055": "Loading",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Atomium",
    "ed19848d-5726-4366-9ccc-f51cbae68548": "splashscreen",
    "9c9a4866-f383-49be-ae89-92685994a86a": "theatreparc",
    "e5553b0e-79ce-4d60-8860-938c27ba12b9": "infos_parc",
    "bc340421-47c5-43bf-8e23-df28e77faf82": "Infos",
    "240a5054-cf5f-41fe-bdd9-4174ef5ccfc4": "App launcher",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "0b777d1b-c27d-4b6f-b9cd-1fd98424522a": "Blank"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);