function updateMap() {
    return new Promise(resolve, reject) => {
    fetch("/data.json")
      .then(response => response.json())
      .then(rsp => {
        console.log(rsp.data);
        rsp.data.forEach(element => {
          const population = element.population;
          const muslims = element.muslims;
  
          new mapboxgl.Marker({
            draggable: true
          })
            .setLngLat([population, musk])
            .addTo(map);
        });
  
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }}
  
  updateMap();
  