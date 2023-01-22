import React, { useEffect, useState } from 'react';

const Cheakout = () => {

    const [order, setOrder] = useState([]);

    useEffect(() => {
        fetch('url')
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    return (
        <div>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <table>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Delete</th>
                        </tr>
                    </table>
                </div>
            </div>

            {/* <div>
                <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Cheakout;