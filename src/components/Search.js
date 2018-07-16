import React from 'react';

class Search extends React.Component {
    specialtyRef = React.createRef();

    requestSpecialty = (e) => {
        const text = this.props.searchText.name;
        const searchValue = text.toLowerCase();
        const allVendors = this.props.vendors;
        const filteredArray = [];
        
        
        allVendors.map(vendor => {
            if (vendor.name.toLowerCase().includes(searchValue)) {
                filteredArray.push(vendor);
            }
            else {
                return;
            }
            
        });
        this.props.clearResults();
        this.props.addToResults(...filteredArray);
    }

    requestName = (e) => {
        e.preventDefault();
        const text = this.props.searchText.name;
        const searchValue = text.toLowerCase();
        const allVendors = this.props.vendors;
        const filteredArray = [];
        
        
        allVendors.map(vendor => {
            if (vendor.name.toLowerCase().includes(searchValue)) {
                filteredArray.push(vendor);
            }
            else {
                return;
            }
            
        });
        this.props.clearResults();
        this.props.addToResults(...filteredArray);
    }

    handleChange = (e) => {
        console.log(e.currentTarget.value, e.currentTarget.name);

        const updatedSearchText = {
            [e.currentTarget.name]: e.currentTarget.value
        };

        this.props.updateSearch(updatedSearchText);

    }

    render() {
        return (
            <div className="search">
                <heading>
                    <h2>Search</h2>
                </heading>
                <form>
                    <h3>Vendors</h3>
                        <p><label for="specialty">Search by Specialty</label><br />
                        <select name="specialty" ref={this.specialtyRef}>
                            <option value="print">Print</option>
                            <option value="photography">Photography</option>
                            <option value="video">Video</option>
                            <option value="signage">Signage</option>
                            <option value="illustration">Illustration</option>
                            <option value="exhibit">Exhibit</option>
                        </select>
                        <button onClick ={this.requestSpecialty}>Search</button>
                        </p>
                        {/* <input type="text" name="specialty" value={this.props.searchText.specialty} onChange={this.handleChange}/><button onClick ={this.requestSpecialty}>Search</button></p> */}
                        <p>OR</p>
                        <p><label>Search by Name</label><br />
                        <input type="text" name="name" value={this.props.searchText.name} onChange={this.handleChange}/><button onClick = {this.requestName}>Search</button></p>
                    <br />
                    <hr />
                    <h3>Freelancers</h3>
                    <p><label for="specialty">Search by Specialty</label><br />
                        <select name="specialty">
                            <option value="print">Print</option>
                            <option value="photography">Photography</option>
                            <option value="video">Video</option>
                            <option value="signage">Signage</option>
                            <option value="illustration">Illustration</option>
                            <option value="exhibit">Exhibit</option>
                        </select>
                    </p>
                    <p>OR</p>
                    <p><label>Search by Name</label><br />
                        <input type="text" name="name"/><button>Search</button></p>
                </form>
            </div>
        );
    }
}

export default Search;