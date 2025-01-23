import React from 'react';
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";
import toast from 'react-hot-toast';

function ModelSection() {

    const [openModal, setOpenModal] = useState(false);

    const [orderDetails, setOrderDetails] = useState({
      username:"",
      address:"",
      contact:"",
      pincode:""
    })
    

    function onCloseModal() {
        setOpenModal(false);
        setOrderDetails('');
    }

    const handleSubmit = (e) => {
      e.preventDefault();

      if (
        !orderDetails.username ||
        !orderDetails.address ||
        !orderDetails.contact ||
        !orderDetails.pincode
      ) {
        return toast.error('All fields are required');
      }
      else{
        toast.success('Order Successfull');
        onCloseModal();
      }
    }

    return (
        <>
          <Button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-1 text-sm text-white uppercase w-full" onClick={() => setOpenModal(true)}>Checkout</Button>
          <Modal 
            show={openModal} 
            size="md"
            onClose={onCloseModal} 
            popup 
            className="fixed inset-0 flex justify-center items-center"
          >
            <Modal.Header />
            <Modal.Body className=" max-w-sm mt-0 mx-auto  w-full bg-white rounded-lg p-6 shadow-lg">
              <div className="space-y-4 space-x-2">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">Order Drop Details</h3>
                <div>
                  <div className="mb-2 block">
                  <Label htmlFor="username" value="Enter Full Name" />
                  </div>
                  <TextInput
                    id="username"
                    placeholder="Full Name"
                    value={orderDetails.username}
                    onChange={(event) => setOrderDetails({...orderDetails, username: event.target.value})}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                  <Label htmlFor="address" value="Enter Address" /> 
                  </div>
                  <TextInput
                    id="address"
                    placeholder="Fill your Postal Address "
                    value={orderDetails.address}
                    onChange={(event) => setOrderDetails({...orderDetails, address: event.target.value})}
                    required
                  />
                </div>
                <div>
                  <div className="mb-2 block">
                  <Label htmlFor="contact" value="Enter Mobile No." /> 
                  </div>
                  <TextInput
                    id="contact"
                    placeholder="Fill your Contact Info "
                    value={orderDetails.contact}
                    onChange={(event) => setOrderDetails({...orderDetails, contact: event.target.value})}
                    required
                  />
                </div>

                <div>
                  <div className="mb-2 block">
                  <Label htmlFor="pincode" value="Enter Pincode" /> 
                  </div>
                  <TextInput
                    id="pincode"
                    placeholder="Fill your Postal Code "
                    value={orderDetails.pincode}
                    onChange={(event) => setOrderDetails({...orderDetails, pincode: event.target.value})}
                    required
                  />
                </div>


                
                <div >
                  <Button className="w-full bg-indigo-400 hover:bg-indigo-600" onClick={handleSubmit}>Order Now</Button>
                </div>
                
              </div>
            </Modal.Body>
          </Modal>
        </>
    );
}

export default ModelSection;
