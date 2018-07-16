import React from 'react';

class AddEntry extends React.Component {
    typeRef = React.createRef();
    nameRef = React.createRef();
    contactRef = React.createRef();
    emailRef = React.createRef();
    phoneRef = React.createRef();
    addressRef = React.createRef();
    printRef = React.createRef();
    photographyRef = React.createRef();
    videoRef = React.createRef();
    signageRef = React.createRef();
    illustrationRef = React.createRef();
    exhibitRef = React.createRef();
    workedRef = React.createRef();

    createEntry = (e) => {
        e.preventDefault();
        // specialtyList(this.printRef.current.value, this.photographyRef.current.value, this.videoRef.current.value, this.signageRef.current.value, this.illustrationRef.current.value, this.exhibitRef.current.value);

        if (this.typeRef.current.value === 'vendor') {
            
            const vendor = {
                name: this.nameRef.current.value,
                contact: this.contactRef.current.value,
                email: this.emailRef.current.value,
                phone: this.phoneRef.current.value,
                address: this.addressRef.current.value,
                specialty: [this.printRef.current.checked, this.photographyRef.current.checked, this.videoRef.current.checked, this.signageRef.current.checked, this.illustrationRef.current.checked, this.exhibitRef.current.checked],
                worked: this.workedRef.current.value
            }
            console.log(vendor);
            // this.props.addVendor(vendor);
            e.currentTarget.reset();
        }
        if (this.typeRef.current.value === 'freelancer') {
            const freelancer = {
                name: this.nameRef.current.value,
                contact: this.contactRef.current.value,
                email: this.emailRef.current.value,
                phone: this.phoneRef.current.value,
                address: this.addressRef.current.value,
                specialty: this.specialtyList(this.printRef.current.value, this.photographyRef.current.value, this.videoRef.current.value, this.signageRef.current.value, this.illustrationRef.current.value, this.exhibitRef.current.value),
                worked: this.workedRef.current.value
            }
            this.props.addFreelancer(freelancer);
        }
    };
    render() {
        return (
            <div className="addEntry">
                <hr/>
                <h2>Add a Resource</h2>
                    <form className="add-resource" onSubmit={this.createEntry}>
                        <ul>
                            <li>
                                <label for="type">Vendor or Freelancer?</label><br />  
                                    <select name="type" ref={this.typeRef}>
                                        <option value="vendor">Vendor</option>
                                        <option value="freelancer">Freelancer</option>
                                    </select>
                            </li>
                            <li>
                                <label for="name">Company Name</label><br/><input type="text" name="name" ref={this.nameRef}/>
                            </li>
                            <li>
                                <label for="ncontact">Contact Name</label><br/><input type="text" name="contact" ref={this.contactRef}/>
                            </li>
                            <li>
                                <label for="email">Contact Email</label><br/><input type="text" name="email" ref={this.emailRef}/>
                            </li>
                            <li>
                                <label for="phone">Contact Phone</label><br/><input type="text" name="phone" ref={this.phoneRef}/>
                            </li>
                            <li>
                                <label for="address">Address</label><br/><input type="text" name="address" ref={this.addressRef}/>
                            </li>
                            <li>
                                <label>Specialty (select all that apply)</label><br/>
                                    <ul className="add-entry__specialty-checklist">
                                        <li>
                                            <label for="print">Print</label><input type="checkbox" id="print" name="specialty" value="print" ref={this.printRef}/>
                                        </li>
                                        <li>
                                            <label for="photography">Photography</label><input type="checkbox" id="photography" name="specialty" value="photography" ref={this.photographyRef}/>
                                        </li>
                                        <li>
                                            <label for="video">Video</label><input type="checkbox" id="video" name="specialty" value="video" ref={this.videoRef}/>
                                        </li>
                                        <li>
                                            <label for="signage">Signage</label><input type="checkbox" id="signage" name="specialty" value="signage" ref={this.signageRef}/>
                                        </li>
                                        <li>
                                            <label for="illustration">Illustration</label><input type="checkbox" id="illustration" name="specialty" value="illustration" ref={this.illustrationRef}/>
                                        </li>
                                        <li>
                                            <label for="exhibit">Exhibit</label><input type="checkbox" id="exhibit" name="specialty" value="exhibit" ref={this.exhibitRef}/>
                                        </li>
                                        
                                    </ul>
                            </li>
                            <li>
                            <label for="worked">Have we worked with them before?</label><br />  
                                    <select name="worked" ref={this.workedRef}>
                                        <option value="yes">Yes</option>
                                        <option value="no">no</option>
                                    </select>
                            </li>
                        </ul>
                        <button type="submit">Save & Add Resource</button>
                    </form>
            </div>
        );
    }
}

export default AddEntry;