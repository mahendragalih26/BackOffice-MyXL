import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Chart from "react-apexcharts";
import "../../CSS/chart.css";

// import { connect } from "react-redux";

// import { getTransaction } from "../../Publics/Actions/transaction";

class myChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transactionData: "",
      type: "",
      optionsMixedChart: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false
          }
        },
        plotOptions: {
          bar: {
            columnWidth: "100%",
            endingShape: "arrow"
          }
        },
        stroke: {
          width: [4, 0, 0]
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Des"
          ]
        },
        markers: {
          size: 6,
          strokeWidth: 3,
          fillOpacity: 0,
          strokeOpacity: 0,
          hover: {
            size: 8
          }
        },
        yaxis: {
          tickAmount: 5,
          min: 0,
          max: 30
        }
      },
      seriesMixedChart: [
        {
          name: "History Pembelian",
          type: "line",
          data: [0, 0, 3, 0, 12, 5, 1, 5, 12, 9, 0, 12]
        }
        // ,
        // {
        //   name: "Penjualan Paket",
        //   type: "column",
        //   data: [23, 12, 54, 61, 32, 56, 81, 19, 49, 21, 70, 51]
        // },
        // {
        //   name: "ehh entah",
        //   type: "column",
        //   data: [62, 12, 45, 55, 76, 41, 23, 43, 49, 21, 70, 51]
        // }
      ],
      optionsRadial: {
        plotOptions: {
          radialBar: {
            startAngle: -135,
            endAngle: 225,
            hollow: {
              margin: 0,
              size: "70%",
              background: "#fff",
              image: undefined,
              imageOffsetX: 0,
              imageOffsetY: 0,
              position: "front",
              dropShadow: {
                enabled: true,
                top: 3,
                left: 0,
                blur: 4,
                opacity: 0.24
              }
            },
            track: {
              background: "#fff",
              strokeWidth: "67%",
              margin: 0, // margin is in pixels
              dropShadow: {
                enabled: true,
                top: -3,
                left: 0,
                blur: 4,
                opacity: 0.35
              }
            },

            dataLabels: {
              showOn: "always",
              name: {
                offsetY: -20,
                show: true,
                color: "#888",
                fontSize: "13px"
              },
              value: {
                formatter: function(val) {
                  return val;
                },
                color: "#111",
                fontSize: "30px",
                show: true
              }
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            type: "horizontal",
            shadeIntensity: 0.5,
            gradientToColors: ["#ABE5A1"],
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          lineCap: "round"
        },
        labels: ["Total Pengguna"]
      },
      seriesRadial: [79]
    };
  }

  componentDidMount = () => {
    this.setState({});
  };

  render() {
    console.log("data transaction", this.props.dataTransaction);
    // const { type, transactionData } = this.state;
    // const filteredPackages = transactionData.filter(item =>
    //   item.number.toLowerCase().includes(type.toLowerCase())
    // );
    return (
      <Container style={{ backgroundColor: "#f5f5f5" }}>
        <div className="row-chart">
          <div className="col-chart mixed-chart">
            <Chart
              options={this.state.optionsMixedChart}
              series={this.state.seriesMixedChart}
              type="line"
              width="700"
              height="400"
            />
          </div>
          <div className="col-chart radial-chart">
            <Chart
              options={this.state.optionsRadial}
              series={this.state.seriesRadial}
              type="radialBar"
              width="280"
            />
          </div>
        </div>
      </Container>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     transaction: state.myTransaction
//   };
// };

// export default connect(mapStateToProps)(myChart);

export default myChart;
