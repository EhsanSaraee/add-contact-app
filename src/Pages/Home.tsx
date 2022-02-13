import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useContactsQuery } from '../Redux/Services/contactsApi';
import './Home.css';

const Home = () => {
   const { data, error, isLoading } = useContactsQuery();

  //  useEffect(() => {
  //     toast.error('Something went wrong!');
  //  }, [error]);

   if (isLoading) {
      return <h3>Loading...</h3>;
   }

   return (
      <div style={{ marginTop: '100px' }}>
         <Link to="/addContact">
            <button className="btn btn-add">Add Contact</button>
         </Link>
         <br />
         <br />
         <table className="styled-table">
            <thead>
               <tr>
                  <th style={{ textAlign: 'center' }}>No.</th>
                  <th style={{ textAlign: 'center' }}>Name</th>
                  <th style={{ textAlign: 'center' }}>Email</th>
                  <th style={{ textAlign: 'center' }}>Contact</th>
                  <th style={{ textAlign: 'center' }}>Action</th>
               </tr>
            </thead>
            <tbody>
               {data?.map(({ id, name, email, contact }: any, index: any) => (
                  <tr key={id}>
                     <th scope="row">{index + 1}</th>
                     <td>{name}</td>
                     <td>{email}</td>
                     <td>{contact}</td>
                     <td>
                        <Link to={`/editContact/${id}`}>
                           <button className="btn btn-edit">Edit</button>
                        </Link>
                        <button className="btn btn-delete">Delete</button>
                        <Link to={`/info/${id}`}>
                           <button className="btn btn-view">View</button>
                        </Link>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default Home;
