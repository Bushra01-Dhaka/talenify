import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import WebDevelopment from "./Webdev/WebDevelopment";
import DigitalMarketing from "./DigitalMarketing/DigitalMarketing";
import Graphics from "./Graphics/Graphics";


// style={{ transform: 'skewX(-20deg)' }}

const Categories = () => {
  return (
    <div className="container bg-base-200">
      <Tabs className="">
        <TabList className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full lg:w-[60%] mx-auto bg-primary text-white py-16  px-10  rounded">
          <Tab className="outline-none text-xl text-neutral font-bold hover:underline">Web Development
         </Tab>
          <Tab className="outline-none text-xl text-neutral font-bold hover:underline">Digital Marketing</Tab>
          <Tab className="outline-none text-xl text-neutral font-bold hover:underline">Graphics Design</Tab>
        </TabList>

        <TabPanel className="lg:w-[80%] mx-auto">
           <div>
              <WebDevelopment></WebDevelopment>
           </div>
        </TabPanel>
        <TabPanel  className="lg:w-[80%] mx-auto">
           <div>
           <DigitalMarketing></DigitalMarketing>
           </div>
        </TabPanel>
        <TabPanel className="lg:w-[80%] mx-auto">
          <div>
          <Graphics></Graphics>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
