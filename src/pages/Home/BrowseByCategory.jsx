import { useState } from "react";
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const BrowseByCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <div className="my-8">
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className="font-semibold text-xl text-[#164863]">
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Digital Marketing</Tab>
                        <Tab>Graphics Design</Tab>
                    </TabList>
                </div>
                <TabPanel>
                    Content for Category 1
                </TabPanel>
                <TabPanel>
                    Content for Category 2
                </TabPanel>
                <TabPanel>
                    Content for Category 3
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default BrowseByCategory;
