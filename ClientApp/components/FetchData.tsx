import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

interface FetchDataExampleState {
    forecasts: WeatherForecast[];
    girls: EGirl[];
    loading: boolean;
}

export class FetchData extends React.Component<RouteComponentProps<{}>, FetchDataExampleState> {
    constructor() {
        super();
        this.state = { forecasts: [], girls: [], loading: true };

        fetch('api/SampleData/WeatherForecasts')
            .then(response => response.json() as Promise<WeatherForecast[]>)
            .then(data => {
                this.setState({ forecasts: data, loading: false });
                console.log(data)
            });
        fetch('api/SampleData/eGirlOfTheWeek')
            .then(response => response.json() as Promise<EGirl[]>)
            .then(data => {
                console.log(data)
                this.setState({ girls: data, loading: false });
            });
    }

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.forecasts) 

        let eGirl = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderEGirl(this.state.girls) 
        return <div>
            <h1>Weather forecast</h1>
            <p>This component demonstrates fetching data from the server.</p>
            {contents}
            {eGirl}
        </div>;
    }

    private static renderForecastsTable(forecasts: WeatherForecast[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                {forecasts.map(forecast =>
                    <tr key={forecast.dateFormatted}>
                        <td>{forecast.dateFormatted}</td>
                        <td>{forecast.temperatureC}</td>
                        <td>{forecast.temperatureF}</td>
                        <td>{forecast.summary}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
    private static renderEGirl(girls: EGirl[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Hotness</th>
                </tr>
            </thead>
            <tbody>
                {girls.map(girls =>
                    <tr>
                        <td>{girls.name}</td>
                        <td>{girls.hotnessRating}</td>
                    </tr>
                )}
            </tbody>
        </table>;
    }
}

interface WeatherForecast {
    dateFormatted: string;
    temperatureC: number;
    temperatureF: number;
    summary: string;
}

interface EGirl {
name: string;
hotnessRating: number;
}