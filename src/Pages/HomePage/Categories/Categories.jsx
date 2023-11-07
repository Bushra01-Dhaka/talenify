import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import WebDevelopment from "./Webdev/WebDevelopment";
import DigitalMarketing from "./DigitalMarketing/DigitalMarketing";
import Graphics from "./Graphics/Graphics";

const Categories = () => {
  return (
    <div className="container ">
      <Tabs className="">
        <TabList style={{ transform: 'skewX(-20deg)' }} className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full lg:w-[60%] mx-auto bg-primary text-white py-10  px-10 rounded">
          <Tab className="outline-none text-xl">Web Development</Tab>
          <Tab className="outline-none text-xl">Digital Marketing</Tab>
          <Tab className="outline-none text-xl">Graphics Design</Tab>
        </TabList>

        <TabPanel>
           <div>
              <WebDevelopment></WebDevelopment>
           </div>
        </TabPanel>
        <TabPanel>
            <DigitalMarketing></DigitalMarketing>
        </TabPanel>
        <TabPanel>
          <Graphics></Graphics>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
