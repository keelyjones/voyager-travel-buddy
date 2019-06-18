{"filter":false,"title":"maps.js","tooltip":"/assets/scripts/maps.js","undoManager":{"mark":31,"position":31,"stack":[[{"start":{"row":0,"column":0},"end":{"row":24,"column":1},"action":"insert","lines":["function initMap() {","    var map = new google.maps.Map(document.getElementById(\"map\"), {","        zoom: 3,","        center: {","            lat: 46.619261,","            lng: -33.134766","        }","    });","","    var labels = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\"","    var locations = [","        { lat: 40.785091, lng: -73.968285 },","        { lat: 41.084045, lng: -73.874245 },","        { lat: 40.754932, lng: -73.984016 }","    ];","","    var markers = locations.map(function(location, i) {","        return new google.maps.Marker({","            position: location,","            label: labels[i % labels.length]","        });","    });","","    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });","}"],"id":1}],[{"start":{"row":24,"column":1},"end":{"row":25,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":25,"column":0},"end":{"row":26,"column":0},"action":"insert","lines":["",""]},{"start":{"row":26,"column":0},"end":{"row":27,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":27,"column":0},"end":{"row":38,"column":13},"action":"insert","lines":["<script>","// Initialize and add the map","function initMap() {","  // The location of Uluru","  var uluru = {lat: -25.344, lng: 131.036};","  // The map, centered at Uluru","  var map = new google.maps.Map(","      document.getElementById('map'), {zoom: 4, center: uluru});","  // The marker, positioned at Uluru","  var marker = new google.maps.Marker({position: uluru, map: map});","}","    </script>"],"id":3}],[{"start":{"row":27,"column":0},"end":{"row":29,"column":0},"action":"remove","lines":["<script>","// Initialize and add the map",""],"id":4}],[{"start":{"row":28,"column":0},"end":{"row":28,"column":26},"action":"remove","lines":["  // The location of Uluru"],"id":5},{"start":{"row":28,"column":0},"end":{"row":29,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":29,"column":0},"end":{"row":30,"column":0},"action":"remove","lines":["  // The map, centered at Uluru",""],"id":6}],[{"start":{"row":31,"column":0},"end":{"row":31,"column":36},"action":"remove","lines":["  // The marker, positioned at Uluru"],"id":7}],[{"start":{"row":30,"column":64},"end":{"row":31,"column":0},"action":"remove","lines":["",""],"id":8}],[{"start":{"row":33,"column":0},"end":{"row":33,"column":13},"action":"remove","lines":["    </script>"],"id":9},{"start":{"row":32,"column":1},"end":{"row":33,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["/"],"id":10},{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":0,"column":2},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":11}],[{"start":{"row":0,"column":2},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":12}],[{"start":{"row":0,"column":2},"end":{"row":0,"column":3},"action":"insert","lines":[" "],"id":13}],[{"start":{"row":30,"column":39},"end":{"row":31,"column":0},"action":"insert","lines":["",""],"id":36},{"start":{"row":31,"column":0},"end":{"row":31,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"remove","lines":["4"],"id":37}],[{"start":{"row":31,"column":14},"end":{"row":31,"column":15},"action":"insert","lines":["6"],"id":38}],[{"start":{"row":31,"column":16},"end":{"row":31,"column":17},"action":"remove","lines":[" "],"id":39}],[{"start":{"row":31,"column":16},"end":{"row":32,"column":0},"action":"insert","lines":["",""],"id":40},{"start":{"row":32,"column":0},"end":{"row":32,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":32,"column":21},"end":{"row":34,"column":6},"action":"insert","lines":["","        ","      "],"id":41}],[{"start":{"row":33,"column":8},"end":{"row":33,"column":9},"action":"insert","lines":["}"],"id":42},{"start":{"row":33,"column":0},"end":{"row":33,"column":8},"action":"remove","lines":["        "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":27,"column":20},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":43},{"start":{"row":28,"column":0},"end":{"row":28,"column":2},"action":"insert","lines":["  "]},{"start":{"row":28,"column":2},"end":{"row":29,"column":0},"action":"insert","lines":["",""]},{"start":{"row":29,"column":0},"end":{"row":29,"column":2},"action":"insert","lines":["  "]},{"start":{"row":29,"column":2},"end":{"row":30,"column":0},"action":"insert","lines":["",""]},{"start":{"row":30,"column":0},"end":{"row":30,"column":2},"action":"insert","lines":["  "]},{"start":{"row":30,"column":2},"end":{"row":31,"column":0},"action":"insert","lines":["",""]},{"start":{"row":31,"column":0},"end":{"row":31,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":31,"column":2},"end":{"row":37,"column":7},"action":"insert","lines":[" var map = new google.maps.Map(document.getElementById(\"map\"), {","        zoom: 3,","        center: {","            lat: 46.619261,","            lng: -33.134766","        }","    });"],"id":44}],[{"start":{"row":37,"column":7},"end":{"row":38,"column":0},"action":"insert","lines":["",""],"id":45},{"start":{"row":38,"column":0},"end":{"row":38,"column":4},"action":"insert","lines":["    "]},{"start":{"row":38,"column":4},"end":{"row":39,"column":0},"action":"insert","lines":["",""]},{"start":{"row":39,"column":0},"end":{"row":39,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":29,"column":0},"end":{"row":29,"column":2},"action":"remove","lines":["  "],"id":46},{"start":{"row":28,"column":2},"end":{"row":29,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":28,"column":2},"end":{"row":29,"column":2},"action":"remove","lines":["","  "],"id":47}],[{"start":{"row":28,"column":0},"end":{"row":28,"column":2},"action":"remove","lines":["  "],"id":48},{"start":{"row":27,"column":20},"end":{"row":28,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":37,"column":0},"end":{"row":45,"column":1},"action":"remove","lines":["  var uluru = {lat: -25.344, lng: 131.036};","  var map = new google.maps.Map(","      document.getElementById('map'), {","        zoom: 6,","        center: uluru","      }","      });","  var marker = new google.maps.Marker({position: uluru, map: map});","}"],"id":49},{"start":{"row":36,"column":4},"end":{"row":37,"column":0},"action":"remove","lines":["",""]},{"start":{"row":36,"column":2},"end":{"row":36,"column":4},"action":"remove","lines":["  "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":0,"column":0},"end":{"row":25,"column":0},"action":"remove","lines":["// function initMap() {","    var map = new google.maps.Map(document.getElementById(\"map\"), {","        zoom: 3,","        center: {","            lat: 46.619261,","            lng: -33.134766","        }","    });","","    var labels = \"ABCDEFGHIJKLMNOPQRSTUVWXYZ\"","    var locations = [","        { lat: 40.785091, lng: -73.968285 },","        { lat: 41.084045, lng: -73.874245 },","        { lat: 40.754932, lng: -73.984016 }","    ];","","    var markers = locations.map(function(location, i) {","        return new google.maps.Marker({","            position: location,","            label: labels[i % labels.length]","        });","    });","","    var markerCluster = new MarkerClusterer(map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });","}",""],"id":50},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":8,"column":4},"end":{"row":9,"column":0},"action":"remove","lines":["",""],"id":51},{"start":{"row":8,"column":2},"end":{"row":8,"column":4},"action":"remove","lines":["  "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":2},"action":"remove","lines":["  "]},{"start":{"row":7,"column":7},"end":{"row":8,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":0,"column":0},"end":{"row":7,"column":7},"action":"remove","lines":["function initMap() {","   var map = new google.maps.Map(document.getElementById(\"map\"), {","        zoom: 3,","        center: {","            lat: 46.619261,","            lng: -33.134766","        }","    });"],"id":52},{"start":{"row":0,"column":0},"end":{"row":5,"column":7},"action":"insert","lines":["      function initMap() {","        map = new google.maps.Map(document.getElementById('map'), {","          center: {lat: -34.397, lng: 150.644},","          zoom: 8","        });","      }"]}],[{"start":{"row":5,"column":7},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":54},{"start":{"row":6,"column":0},"end":{"row":6,"column":6},"action":"insert","lines":["      "]},{"start":{"row":6,"column":6},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":7,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":0,"column":0},"end":{"row":7,"column":6},"action":"remove","lines":["      function initMap() {","        map = new google.maps.Map(document.getElementById('map'), {","          center: {lat: -34.397, lng: 150.644},","          zoom: 8","        });","      }","      ","      "],"id":56},{"start":{"row":0,"column":0},"end":{"row":6,"column":1},"action":"insert","lines":["var map;","function initMap() {","  map = new google.maps.Map(document.getElementById('map'), {","    center: {lat: -34.397, lng: 150.644},","    zoom: 8","  });","}"]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":6,"column":1},"end":{"row":6,"column":1},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1560886746651,"hash":"b3c400aa1bec4918869d99ef665a11e7695ed214"}