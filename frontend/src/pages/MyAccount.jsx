import React from 'react'
import "../styles/myAccountStyles.css"

const MyAccount = () => {
  return (
    <div className="bg-body-tertiary">
      <div className="container pt-4 pb-5">
        <div className="row">
          <div className="col-4 pe-1">
            <div className="p-3 bg-white rounded shadow-sm">
              <div className="d-flex align-items-center p-2 bg-secondary-subtle rounded">
                <img src="images/profile.png" alt="" className="me-3" />
                <span> Profile Info</span>
              </div>
              <div className="d-flex align-items-center p-2">
                <img src="images/my-orders.png" alt="" className="me-3" />
                <span> My Orders</span>
              </div>
              <div className="d-flex align-items-center p-2">
                <img src="images/wish-list.png" alt="" className="me-3" />
                <span> Wish List</span>
              </div>
              <div className="d-flex align-items-center p-2">
                <img src="images/location.png" alt="" className="me-3" />
                <span> Address</span>
              </div>
              <div className="d-flex align-items-center p-2">
                <img src="images/tracking.png" alt="" className="me-2" />
                <span> Track Order</span>
              </div>
            </div>
          </div>
          <div className="col-8 ps-1">
            <div className="p-4 bg-white shadow-sm rounded d-flex justify-content-between">
              <div className='profile-info'><span>Profile Info</span></div>
              <div className='d-flex flex-column mt-5'>
                <div className='align-self-center profile-img'>
                <img src="images/profile-pic.png" alt="" className='profile-pic'/>
                <img src="images/edit-profile-pic.png" alt="" className='edit-profile-pic'/>
                </div>
                
                <div className='d-flex justify-content-start mt-5 profile-details'>
                  <div className='p-3 me-5'>
                    <h4>First Name</h4>
                    <p>Karthick</p>
                    <h4>Phone Number</h4>
                    <p>63354 82916</p>
                    <h4>Address</h4>
                    <p>No.63/B, First Avenue, <br />Alwarpet, Chennai-18.</p>
                  </div>                  
                  <div className='p-3 ms-5'>
                    <h4>Last Name</h4>
                    <p>Narayan</p>
                    <h4>Email</h4>
                    <p>karthicknarayan@gmail.com</p>
                    <h4 className='membership'>Membership</h4>
                    <p>Gold</p>
                  </div>
                </div>
              </div>
              <div className='editOption'>
                <img src="images/edit.png" alt="" className='me-2' />
                <span>Edit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyAccount