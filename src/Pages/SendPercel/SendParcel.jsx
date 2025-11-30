import React from 'react';

const SendParcel = () => {
    return (
         <div className='my-10 max-w-[1500px] mx-auto'>
            <h2 className='text-5xl font-bold '>Send A Parcel</h2>
            <p className='mt-10 font-bold'> Enter Your percel Details </p>
            <div className='w-full h-px bg-gray-300 my-3'></div>
            <form  className=''>
                <div className="percel-category flex gap-4">
                    <label className="label">
                        <input type="radio"  value="document" className="radio" defaultChecked />
                        Document</label>

                    <label className="label">
                        <input type="radio"  value=" non-document" className="radio" />
                        Non-Document</label>
                </div>


                <div className="percel-info grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5 my-6">
                    <fieldset className="fieldset percel-name">
                        <label className="label font-bold text-secondary text-[18px]">Percel Name</label>
                        <input type="text"  className="input w-full border-secondary " placeholder="Percel Name" />
                    </fieldset>

                    <fieldset className="fieldset percel-weight">
                        <label className="label font-bold text-secondary text-[18px]">Percel Weight</label>
                        <input type="text"  className="input w-full border-secondary " placeholder="Percel Weight(KG)" />
                    </fieldset>
                </div>


                <div className="percel-details grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
                    <fieldset className="fieldset sender-details">
                        <h2 className='text-3xl font-bold'>Sender Details</h2>
                        <label className="label font-bold text-secondary text-[18px]">Sender Name</label>
                        <input type="text"  className="input w-full border-secondary " placeholder="Sender Name" />

                        <label className="label font-bold text-secondary text-[18px]">Sender Email</label>
                        <input  className="input w-full border-secondary" placeholder="Sender Email" />


                        <label className="label font-bold text-secondary text-[18px]">Sender Address</label>
                        <input type="text"  className="input w-full border-secondary" placeholder="Sender Address" />

                        <label className="label font-bold text-secondary text-[18px]">Sender Phone No</label>
                        <input type="text"  className="input w-full border-secondary" placeholder="Sender Phone No" />

                        <label className="label font-bold text-secondary text-[18px]">Your Region</label>
                        <select defaultValue="Select Your Region"  className="select w-full border-secondary">
                            <option disabled={true}>Select Your Region</option>

                        </select>

                        <label className="label font-bold text-secondary text-[18px]">Your District</label>
                        <select defaultValue="Select Your District"  className="select w-full border-secondary">
                            <option disabled={true}>Select Your District</option>

                        </select>

                        <label className="label font-bold text-secondary text-[18px]">Pickup Instruction</label>
                        <textarea className="textarea w-full border-secondary"  placeholder="Pickup Instruction"></textarea>
                    </fieldset>

                    <fieldset className="fieldset receiver-details">
                        <h2 className='text-3xl font-bold'>Receiver Details</h2>
                        <label className="label font-bold text-secondary text-[18px]">Receiver Name</label>
                        <input type="text"  className="input w-full border-secondary" placeholder="Receiver Name" />

                        <label className="label font-bold text-secondary text-[18px]">Receiver Email</label>
                        <input type="email"  className="input w-full border-secondary" placeholder="Receiver Email" />

                        <label className="label font-bold text-secondary text-[18px]">Receiver Address</label>
                        <input type="text"  className="input w-full border-secondary" placeholder="Receiver Address" />

                        <label className="label font-bold text-secondary text-[18px]">Receiver Contact No</label>
                        <input type="text"  className="input w-full border-secondary" placeholder="Receiver Phone No" />

                        <label className="label font-bold text-secondary text-[18px]">Receiver Region</label>
                        <select defaultValue="Select Receiver Region"  className="select w-full border-secondary">
                            <option disabled={true}>Select Receiver Region</option>
                           
                        </select>

                        <label className="label font-bold text-secondary text-[18px]">Receiver District</label>
                        <select defaultValue="Select Receiver District" className="select w-full border-secondary">
                            <option disabled={true}>Select Receiver District</option>

                        </select>

                        <label className="label font-bold text-secondary text-[18px]">Pickup Instruction</label>
                        <textarea className="textarea w-full border-secondary"  placeholder="Receiver Pickup Instruction"></textarea>
                    </fieldset>
                </div>
                <input type="submit" value="Submit" className='btn btn-secondary my-5' />
            </form>
        </div>
    );
};

export default SendParcel;