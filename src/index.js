let ctx = document.querySelector("#myChart");


new Chart(ctx , {
    type: 'bubble',
    data: {
      labels: "Africa",
      datasets: [
        {
          label: ["Temperatura en T = 0 s"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            x: 0,
            y: 20,
            r: 5
          }]
        }, {
          label: ["Temperatura en T = 1 s"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 1,
            y: 20.13,
            r: 5
          }]
        }]
    },
    options: {
      title: {
        display: true,
        text: 'Temperatura del agua en circuito con resistencia de 0.25 ohms'
      }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Temperatura"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Tiempo"
          }
        }]
      }
    }
});

let ctp = document.querySelector("#myChartOne");


new Chart(ctp , {
    type: 'bubble',
    data: {
      labels: "Africa",
      datasets: [
        {
          label: ["Temperatura en T = 0 s"],
          backgroundColor: "rgba(255,221,50,0.2)",
          borderColor: "rgba(255,221,50,1)",
          data: [{
            x: 0,
            y: 20,
            r: 5
          }]
        }, {
          label: ["Temperatura en T = 1 s"],
          backgroundColor: "rgba(60,186,159,0.2)",
          borderColor: "rgba(60,186,159,1)",
          data: [{
            x: 1,
            y: 20.1022773531,
            r: 5
          }]
        }, {
          label: ["Temperatura en T = 2 s"],
          backgroundColor: "rgba(609,186,159,0.2)",
          borderColor: "rgba(609,186,159,1)",
          data: [{
            x: 2,
            y: 20.2029,
            r: 5
          }]
        }]
    },
    options: {
      title: {
        display: true,
        text: 'Temperatura del agua en circuito con resistencia de 0.25 ohms'
      }, scales: {
        yAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Temperatura"
          }
        }],
        xAxes: [{ 
          scaleLabel: {
            display: true,
            labelString: "Tiempo"
          }
        }]
      }
    }
});