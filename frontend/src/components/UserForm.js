import React, { useState } from 'react';
import axios from 'axios';
const UserForm = () => {
const [message,setMessage] = useState('');
const [formData, setFormData] = useState({
name: '',
email: '',
age: '',
});
const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};
const handleSubmit = async (e) => {
e.preventDefault();
try {
const response = await
axios.post('http://localhost:5000/api/users', formData);
if(response){
setMessage("Record Addedsuccessfully"+JSON.stringify(response.data));
}
else{
setMessage("Record NOT Added to DB");
}
setFormData({ name: '', email: '', age: '' });
} catch (error) {
alert('Failed to add user: ' + error.message);
}
};
return (
<div>
<form onSubmit={handleSubmit}>
<div>
<label>Name:</label>
<input
type="text"
name="name"
value={formData.name}
onChange={handleChange}
required
/>
</div>
<div>
<label>Email:</label>
<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
required
/>
</div>
<div>
<label>Age:</label>
<input
type="number"
name="age"
value={formData.age}
onChange={handleChange}
required
/>
</div>
<button type="submit">Add User</button>
</form>
{message && <p> {message} </p>}
</div>
);
};
export default UserForm;