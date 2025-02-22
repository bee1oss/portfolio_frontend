import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="begahaciyew@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="0548 000 00 00" Image={FiPhone} />
      <SingleInfo text="KKTC,Nicosia" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;
