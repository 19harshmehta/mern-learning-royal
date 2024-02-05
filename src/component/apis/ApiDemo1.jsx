import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'

// import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



export const ApiDemo1 = () => {

  const [users, setusers] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [show1, setShow] = useState(false);
  const [singleUser, setsingleUser] = useState(undefined)
  const [show2, setshow2] = useState(false)
  const handleClose = () => { setShow(false); setshow2(false); navigate("/apidemo1") }
  const navigate = useNavigate()



  const fetchUserData = async () => {
    setisLoading(true);
    const res = await axios.get("https://node5.onrender.com/user/user");
    console.log(res);
    console.log(res.status);
    console.log(res.data);
    setusers(res.data.data);
    setisLoading(false);
  };

  const deleteUser = async (id) => {
    //alert(id)

    const res = await axios.delete("https://node5.onrender.com/user/user/" + id)
    if (res.status == 204) {
      //alert("User Deleted Successfully")
      // fetchUserData()
    }


  }
  useEffect(() => {

    fetchUserData();

  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm(
    {
      defaultValues: async () => {
        console.log("....")
        console.log('single user...', singleUser)
        if (singleUser !== null || singleUser !== undefined || singleUser != {}) {

          console.log("if////")
          const res = await axios.get("https://node5.onrender.com/user/user/" + singleUser?._id)
          return {
           
            isActive: res.data.data.isActive ? true : false
          }
        }
      }
    })

  const handelUpdate = async (data) => {
    console.log("handle update")
    const res = await axios.put("https://node5.onrender.com/user/user/" + singleUser?._id, data)
    console.log(res);
    console.log(res.status);
    console.log(res.data);
    handleClose();
  }





  const handleClick1 = async (id) => {
    console.log("111")
    const res = await axios.get("https://node5.onrender.com/user/user/" + id);
    //console.log(res);
    setsingleUser(res.data.data)
    setShow(true)
    setshow2(false)

  }
  const handleClick2 = async (id) => {
    console.log("222")
    const res = await axios.get("https://node5.onrender.com/user/user/" + id);
    //console.log(res);
    setsingleUser(res.data.data)
    setshow2(true)
    setShow(false)


  }
  return (
    <div>
      <h1>Get Api Demo 1</h1>
      {/* <button
        onClick={() => {
          fetchUserData();
        }}
      >
        Fetch User Data
      </button> */}


      {isLoading && <h1>Loading...</h1>}

      <table className="table table-bordered">
        <thead>
          <tr>
            <td>ID</td>
            <td>NAME</td>
            <td>EMAIL</td>
            <td>AGE</td>
            <td>STATUS</td>
            <td>ACTION</td>
          </tr>
        </thead>
        <tbody>
          {users?.map((u) => {
            return (
              <tr>
                <td>{u._id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.age}</td>
                <td>{u.isActive == true ? "Active" : "NotActive"}</td>
                <td>
                  <button className="btn btn-danger" onClick={() => { deleteUser(u._id) }}>Delete</button> &nbsp;
                  <Link to={`/updateuser/${u._id}`} className="btn btn-warning">Update</Link> &nbsp;

                  <Link to={`/userdetail/${u._id}`} className="btn btn-success">View</Link>&nbsp;
                  {/* <Link to = {`/userdetail/${u._id}`} className="btn btn-success">View</Link> */}
                  <Button variant="primary" onClick={() => {
                    handleClick1(u._id)
                  }}>VIEW</Button>&nbsp;

                  <Button variant="warning" onClick={() => {
                    handleClick2(u._id)

                  }}>Change Status</Button>

                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Modal show={show1} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{singleUser?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{singleUser?.email}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer></Modal>



      <Modal show={show2} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{singleUser?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form onSubmit={handleSubmit(handelUpdate)}>
            <div>
              <label htmlFor="">Id</label>
              <input type="text" value={singleUser?._id} disabled />
            </div>
            <div>
              <label htmlFor="">Name</label>
              <input type="text" value={singleUser?.name} disabled />
            </div>
            <div>
              <label htmlFor="">Email</label>
              <input type="text" value={singleUser?.email} disabled />
            </div>
            <div>
              <label htmlFor="">Age</label>
              <input type="text" value={singleUser?.age} disabled />
            </div>
            <div>
              <label>Active</label>&nbsp;
              <input type="radio" value="true"  {...register("isActive")} defaultChecked={singleUser?.isActive === true} />
              <br />
              <label>Inactive</label>&nbsp;
              <input type="radio" value="false"  {...register("isActive")} defaultChecked={singleUser?.isActive === false} />

            </div>
            <div>
              {/* <input type="submit"  value="update"/> */}
            </div>
          </form>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit(handelUpdate)}>
            Save Changes
          </Button>
        </Modal.Footer></Modal>
    </div>
  );


}

