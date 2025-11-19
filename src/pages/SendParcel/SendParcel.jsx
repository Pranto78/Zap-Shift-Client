import React from "react";
import { useForm } from "react-hook-form";

const SendParcel = () => {
  const { register, handleSubmit } = useForm();

  const handleSendParcel = (data) => {};
  return (
    <div>
      <h2 className="text-5xl font-bold">Send a parcel</h2>

      <form onSubmit={handleSubmit(handleSendParcel)} className="mt-12 p-4">
        {/* Document type */}
        <div>
          <label className="label mr-4">
            <input
              type="radio"
              name="radio-1"
              className="radio"
              value="document"
              {...register("parcelType")}
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              type="radio"
              name="radio-1"
              className="radio"
              value="non-document"
              {...register("parcelType")}
            />
            Non-Document
          </label>
        </div>

        {/* parcel info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          <fieldset className="fieldset">
            <label className="label">Parcel Name</label>
            <input
              type="text"
              className="input w-full"
              {...register("parcelName")}
              placeholder="Parcel Name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label">Parcel Weight (Kg)</label>
            <input
              type="number"
              className="input w-full"
              {...register("parcelWeight")}
              placeholder="Parcel weight"
            />
          </fieldset>
        </div>

        {/* two column */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-8">
          {/* sender info */}
          <div>
            <fieldset className="fieldset">
              <h2 className="text-2xl font-semibold">Sender Details</h2>

              <label className="label">Sender Name</label>
              <input
                type="text"
                className="input w-full"
                {...register("senderName")}
                placeholder="sender Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Sender Address</label>
              <input
                type="text"
                className="input w-full mt-4"
                {...register("senderAddress")}
                placeholder="sender Address"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Sender Phone</label>
              <input
                type="text"
                className="input w-full mt-4"
                {...register("senderPhone")}
                placeholder="sender Phone"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Sender District</label>
              <input
                type="text"
                className="input w-full mt-4"
                {...register("senderDistrict")}
                placeholder="sender District"
              />
            </fieldset>
          </div>

          {/* receiver */}
          <div>
            {/* Receiver */}
            <fieldset className="fieldset">
              <h2 className="text-2xl font-semibold">Receiver Details</h2>

              <label className="label">Receiver Name</label>
              <input
                type="text"
                className="input w-full"
                {...register("ReceiverName")}
                placeholder="Receiver Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Receiver Address</label>
              <input
                type="text"
                className="input w-full mt-4"
                {...register("ReceiverAddress")}
                placeholder="Receiver Address"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Receiver Phone</label>
              <input
                type="text"
                className="input w-full mt-4"
                {...register("ReceiverPhone")}
                placeholder="Receiver Phone"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Receiver District</label>
              <input
                type="text"
                className="input w-full mt-4"
                {...register("ReceiverDistrict")}
                placeholder="Receiver District"
              />
            </fieldset>
          </div>

          {/* button */}
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
