
import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';

function Component() {
  return (
    <Footer container className="bg-gray-900 text-white">
        <Footer.Divider className="border-gray-700" />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
        <Footer.Copyright
            href="#"
            by="Abdiaziz Saman™"
            year={2023}
            className="text-gray-400"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
   
    </Footer>
  );
}


export default Component;


