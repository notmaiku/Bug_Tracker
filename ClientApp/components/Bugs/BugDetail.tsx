import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export interface EGirl {
    name: string;
    hotnessRating: number;
}

export interface BugData {
    girls: EGirl[];
}

export class BugDetail extends React.Component<BugData, {}> {
    constructor(props: any) {
        super(props);
        this.state = { girls: [], loading: true }
        this.renderEGirl = this.renderEGirl.bind(this)

    }


    renderEGirl() {
        return this.props.girls.map(girl => <li>{girl.name} is a {girl.hotnessRating}</li>)
    }

    public render() {   
        return <section id="bug-detail">
            <main id="bug-detail">
                <article id="bug-main">
                    <header>
                        <h2>In Detail</h2>
                    </header>
                    <p>
                        {this.renderEGirl()}
                    </p>
                </article>
                <article id="bug-sub">
                    <div>
                        <header>
                            <h2>Check List</h2>
                        </header>
                        <ul>
                            <li>
                                <label htmlFor="item1">
                                    <input type="checkbox" name="item1" id="bug-checkbox" />
                                    item1</label>
                            </li>
                            <li>
                                <label htmlFor="item2">
                                    <input type="checkbox" name="item2" id="bug-checkbox" />
                                    item2</label>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <header>
                            <h2>Notes</h2>
                        </header>
                        <p></p>
                    </div>
                </article>
            </main>
        </section>
    }
}
