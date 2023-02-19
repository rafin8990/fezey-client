import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import toast from 'react-hot-toast';

const Booking = ({ booking,setBooking }) => {
    const { user } = useContext(AuthContext);

    const { name, resalePrice } = booking;

    const handleBooking=(event)=>{
        event.preventDefault();
        const form=event.target;
        const customerName=form.name.value;
        const customerEmail=form.email.value;
        const productPrice=form.price.value;
        const productName=form.productName.value;
        const mobile=form.mobile.value;
        const address=form.address.value;
        const details={
            customerName,
            customerEmail,
            productName,
            productPrice,
            mobile,
            address
        }

        fetch('http://localhost:5000/booking', {
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(details)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                toast.success('Your Booking is successfully Confirmed')
                console.log(data)
                
                
            }
        })

    }


    return (
        <div>
            {/* The button to open modal */}
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            {/* Put this part before </body> tag */}
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <div className='mt-10'>
                        <form onSubmit={handleBooking}>
                            <p className='mt-2'>Your Name:</p>
                            <input name='name' disabled defaultValue={user?.displayName} placeholder='Write Your Name ' className='input input-bordered w-full mt-2' type="text" />

                            <p className='mt-2'>Your Email:</p>
                            <input name='email' disabled defaultValue={user?.email} placeholder='Write Your Name ' className='input input-bordered w-full mt-2' type="text" />

                            <p className='mt-2'>Products Name:</p>
                            <input name='productName' disabled defaultValue={name} placeholder='Products Name ' className='input input-bordered w-full mt-2' type="text" />

                            <p className='mt-2'>Buying Price:</p>
                            <input name='price' disabled defaultValue={resalePrice} placeholder='Products Price ' className='input input-bordered w-full mt-2' type="text" />

                            <p className='mt-2'>Mobile Number:</p>
                            <input name='mobile' placeholder='Enter our Mobile Number ' className='input input-bordered w-full mt-2' type="text" />

                            <p className='mt-2'>Your Address:</p>
                            <input name='address' placeholder='Enter Your Address ' className='input input-bordered w-full mt-2' type="text" />

                            <button type='submit' className='btn btn-success w-full mt-5'>Confirm Booking </button>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;