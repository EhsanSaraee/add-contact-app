import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAddContactMutation } from '../Redux/Services/contactsApi';
import './AddEdit.css';

const initialState = {
   name: '',
   email: '',
   contact: '',
};

const AddEdit = () => {
   const [formValue, setFormValue] = useState(initialState);
   const { name, email, contact } = formValue;
   const [addContact] = useAddContactMutation();
   const navigate = useNavigate();

   const handleSubmit = async (event: any) => {
      event.preventDefault();
      if (!name && !email && !contact) {
         toast.error('Please provide value into each input field');
      } else {
         await addContact(formValue);
         navigate('/');
         toast.success('Contact Added Successfully');
      }
   };
   const handleInputChange = (event: any) => {
      let { name, value } = event.target;
      setFormValue({ ...formValue, [name]: value });
   };
   return (
      <div style={{ marginTop: '100px' }}>
         <form
            style={{
               margin: 'auto',
               padding: '15px',
               maxWidth: '400px',
               alignContent: 'center',
            }}
            onSubmit={handleSubmit}
         >
            <label htmlFor="name">Name</label>
            <input
               type="text"
               id="name"
               name="name"
               placeholder="Enter Name..."
               value={name}
               onChange={handleInputChange}
            />
            <label htmlFor="email">Email</label>
            <input
               type="email"
               id="email"
               name="email"
               placeholder="Enter Email..."
               value={email}
               onChange={handleInputChange}
            />
            <label htmlFor="contact">Contact</label>
            <input
               type="number"
               id="contact"
               name="contact"
               placeholder="Enter Contact No. ..."
               value={contact}
               onChange={handleInputChange}
            />
            <input type="submit" value="Add" />
         </form>
      </div>
   );
};

export default AddEdit;
