import {Component} from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from 'recharts'
import Loader from 'react-loader-spinner'
import './index.css'

class ChartsData extends Component {
  state = {
    allData: '',
    forOtherChart: '',
    isLoading: true,
  }

  componentDidMount() {
    this.getChartData()
  }

  getChartData = async () => {
    const {stateCode} = this.props
    const apiUrl = `https://apis.ccbp.in/covid19-timelines-data`
    const options = {
      method: 'GET',
    }

    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const data = await response.json()

      const dataDateWise = Object.keys(data[stateCode].dates)

      const particularState = dataDateWise.map(date => ({
        date,
        confirmed: data[stateCode].dates[date].total.confirmed,
        deceased: data[stateCode].dates[date].total.deceased,
        recovered: data[stateCode].dates[date].total.recovered,
        tested: data[stateCode].dates[date].total.tested,
        active:
          data[stateCode].dates[date].total.confirmed -
          (data[stateCode].dates[date].total.deceased +
            data[stateCode].dates[date].total.recovered),
      }))

      const particularStateForOtherChart = dataDateWise.map(date => ({
        date,
        confirmed: data[stateCode].dates[date].total.confirmed,
        deceased: data[stateCode].dates[date].total.deceased,
        recovered: data[stateCode].dates[date].total.recovered,
        tested: data[stateCode].dates[date].total.tested,
        active:
          data[stateCode].dates[date].total.confirmed -
          (data[stateCode].dates[date].total.deceased +
            data[stateCode].dates[date].total.recovered),
      }))

      this.setState({
        allData: particularState,
        forOtherChart: particularStateForOtherChart,
        isLoading: false,
      })
    }
  }

  renderLoadingView = () => (
    <div
      className="products-details-loader-container"
      testid="timelinesDataLoader"
    >
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  barChart = () => {
    const {allData} = this.state
    const {category} = this.props
    const barChartType = category.toLowerCase()

    const toptendata = allData.slice(Math.max(allData.length - 10, 0))

    let colortype = '#9A0E31'
    if (barChartType === 'confirmed') {
      colortype = '#9A0E31'
    } else if (barChartType === 'active') {
      colortype = '#0A4FA0'
    } else if (barChartType === 'recovered') {
      colortype = '#216837'
    } else if (barChartType === 'deceased') {
      colortype = '#474C57'
    }

    return (
      <div className="chart-wrapper">
        <BarChart width={700} height={450} data={toptendata} barSize={45}>
          <XAxis
            dataKey="date"
            stroke={`${colortype}`}
            style={{
              fontFamily: 'Roboto',
              fontWeight: 500,
              textTransform: 'uppercase',
            }}
            dy={10}
          />
          <Tooltip />
          <Legend />
          <Bar
            dataKey={`${barChartType}`}
            fill={`${colortype}`}
            label={{position: 'top', fill: '#fff'}}
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </div>
    )
  }

  graph = (type, color) => {
    const {forOtherChart} = this.state
    return (
      <div>
        <LineChart
          width={800}
          height={250}
          data={forOtherChart}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}
        >
          <XAxis
            dataKey="date"
            style={{
              fontFamily: 'Roboto',
              fontWeight: 500,
              textTransform: 'uppercase',
            }}
            dy={10}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={type} stroke={color} />
        </LineChart>
      </div>
    )
  }

  allChartsView = () => (
    <>
      <div className="barchart-container">{this.barChart()}</div>

      <h1 className="charts-title">Spread Trends</h1>
      <div testid="lineChartsContainer" className="barcharts-container">
        <div className="charts confirmed-background">
          {this.graph('confirmed', '#FF073A')}
        </div>
        <div className="charts active-background">
          {this.graph('active', '#007BFF')}
        </div>
        <div className="charts recovered-background">
          {this.graph('recovered', '#27A243')}
        </div>
        <div className="charts deceased-background">
          {this.graph('deceased', '#6C757D')}
        </div>
        <div className="charts tested-background">
          {this.graph('tested', '#9673B9')}
        </div>
      </div>
    </>
  )

  render() {
    const {isLoading} = this.state
    const showAllData = isLoading
      ? this.renderLoadingView()
      : this.allChartsView()
    return <div className="charts-container">{showAllData}</div>
  }
}

export default ChartsData
