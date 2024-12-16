import React, {useState} from 'react';

function UserForm() {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        age:'',
        }
    );


    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormData({...formData, [name]:value});
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        alert(formData);

    // Optionally, reset the form after submission
    setFormData({
        name: '',
        email: '',
        age: ''
      });

    };

    return (<div>

        <h3>Handle User form submission</h3>
        <form onSubmit={handleSubmit}>
        
        <input type="text" name="name" value={formData.name} onChange ={handleChange} placeholder="Input the name"  />

        <input type="email" name="email" value={formData.email} onChange ={handleChange} placeholder="Input the email"  />
        <input type="number" name="age" value={formData.age} onChange ={handleChange} placeholder="Input the age"  />

        <button type="submit">Submit</button>

        </form>


    </div>);

}


export default UserForm;