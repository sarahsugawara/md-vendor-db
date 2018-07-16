import React from 'react';
import ResultItem from './ResultItem';

class Results extends React.Component {
    
    // displayText = () => {
    //     if (this.props.searchText === []) {
    //         return '';
    //     }
    //     else {
    //         const results = JSON.stringify(this.props.searchText);
    //         return `Search results for "${results}"`;
    //     }
    // }
    render() {
        return (
            <div className="results">
                <h2>Results</h2>
                {/* //!Try to get the results text to display */}
                {/* <h3>{this.displayText}</h3> */}
                    <div className="list">
                        {Object.keys(this.props.searchResults).map(key => (
                            <ResultItem key={key}
                                item={this.props.searchResults[key]} />
                        ))}
                    </div>
                
            </div>
        );
    }
}

export default Results;