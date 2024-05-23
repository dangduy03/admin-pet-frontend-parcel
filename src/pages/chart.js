import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";
import { API_ENDPOINTS } from "../utils/apiRoute";
import { DataContext } from "../utils/dataContext";
import apiService from "../services/apiService";

function ChartAdmin() {
  const [products, setProducts] = useState([]);
  const [cats, setCats] = useState([]);
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    // const getProductsData = async () => {
    //   apiService.get(`${API_ENDPOINTS.PRODUCT.BASE}?populate=categoryId`).then((response) => {
    //     const result = response.data;
    //     setProducts(result);
    //     let dogs = [];
    //     let cats = [];
    //     for (let i = 0; i < result.length; i++) {
    //       if (result[i].categoryId.type) {
    //         if (result[i].categoryId.type == "CAT") { cats.push(result[i]); } else {
    //           dogs.push(result[i]);
    //         }
    //       }
    //     }
    //     setCats(cats);
    //     setDogs(dogs);
    //   })
    // }
    // getProductsData();

    const renderChart = async () => {
      let dogs = [];
      let cats = [];
      await apiService.get(`${API_ENDPOINTS.PRODUCT.BASE}?populate=categoryId`).then((response) => {
        const result = response.data;
        setProducts(result);

        for (let i = 0; i < result.length; i++) {
          if (result[i].categoryId.type) {
            if (result[i].categoryId.type == "CAT") { cats.push(result[i]); } else {
              dogs.push(result[i]);
            }
          }
        }
      })

      // const barChartOptions = {
      //   series: [
      //     {
      //       data: [10, 8, 6, 4, 2],
      //       name: 'Products',
      //     },
      //   ],
      //   chart: {
      //     type: 'bar',
      //     background: 'transparent',
      //     height: 350,
      //     toolbar: {
      //       show: false,
      //     },
      //   },
      //   colors: ['#2962ff', '#d50000', '#2e7d32', '#ff6d00', '#583cb3'],
      //   plotOptions: {
      //     bar: {
      //       distributed: true,
      //       borderRadius: 4,
      //       horizontal: false,
      //       columnWidth: '40%',
      //     },
      //   },
      //   dataLabels: {
      //     enabled: false,
      //   },
      //   fill: {
      //     opacity: 1,
      //   },
      //   grid: {
      //     borderColor: '#55596e',
      //     yaxis: {
      //       lines: {
      //         show: true,
      //       },
      //     },
      //     xaxis: {
      //       lines: {
      //         show: true,
      //       },
      //     },
      //   },
      //   legend: {
      //     labels: {
      //       colors: '#f5f7ff',
      //     },
      //     show: true,
      //     position: 'top',
      //   },
      //   stroke: {
      //     colors: ['transparent'],
      //     show: true,
      //     width: 2,
      //   },
      //   tooltip: {
      //     shared: true,
      //     intersect: false,
      //     theme: 'dark',
      //   },
      //   xaxis: {
      //     categories: ['Laptop', 'Phone', 'Monitor', 'Headphones', 'Camera'],
      //     title: {
      //       style: {
      //         color: '#f5f7ff',
      //       },
      //     },
      //     axisBorder: {
      //       show: true,
      //       color: '#55596e',
      //     },
      //     axisTicks: {
      //       show: true,
      //       color: '#55596e',
      //     },
      //     labels: {
      //       style: {
      //         colors: '#f5f7ff',
      //       },
      //     },
      //   },
      //   yaxis: {
      //     title: {
      //       text: 'Count',
      //       style: {
      //         color: '#f5f7ff',
      //       },
      //     },
      //     axisBorder: {
      //       color: '#55596e',
      //       show: true,
      //     },
      //     axisTicks: {
      //       color: '#55596e',
      //       show: true,
      //     },
      //     labels: {
      //       style: {
      //         colors: '#f5f7ff',
      //       },
      //     },
      //   },
      // };

      // const barChart = new ApexCharts(
      //   document.querySelector('#bar-chart'),
      //   barChartOptions
      // );
      // barChart.render();

      // AREA CHART // này là đồ tròn
      const pieChartOptions = {
        series: [dogs.length, cats.length],
        chart: {
          type: 'pie',
          height: 350,
          background: 'transparent',
        },
        labels: ['Chó', 'Mèo'],
        colors: ['#2962ff', '#d50000'],
        legend: {
          labels: {
            colors: '#f5f7ff',
          },
          show: true,
          position: 'top',
        },
        dataLabels: {
          enabled: false,
        },
        tooltip: {
          theme: 'dark',
        },
      };

      const areaChart = new ApexCharts(
        document.querySelector('#area-chart'),
        pieChartOptions
      );
      areaChart.render();
    }

    renderChart();

    // const unlisten = () => {
    //   renderChart();
    // }

    // return () => {
    //   unlisten();
    // }

  }, [history]); // Empty dependency array means this effect will run once after the first render

  return (
    <div>
      {/* <div id="bar-chart"></div> */}
      <div id="area-chart"></div>
    </div>
  );
}

export default ChartAdmin;
