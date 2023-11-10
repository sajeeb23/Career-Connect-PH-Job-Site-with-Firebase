import { useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import JobsByCategory from './JobsByCategory';

const BrowseByCategory = () => {
    const [tabIndex, setTabIndex] = useState(0);

    const categories = ['Web Development', 'Digital Marketing', 'Graphics Design'];

    return (
        <div className="my-8 mx-2">
            <h1 className="font-bold text-[#164863] text-6xl text-center my-16">Browse By Category</h1>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <div className="font-semibold text-xl text-[#164863]">
                    <TabList>
                        {categories.map((category, index) => (
                            <Tab key={index}>{category}</Tab>
                        ))}
                    </TabList>
                </div>
                {categories.map((category, index) => (
                    <TabPanel key={index}>
                        <JobsByCategory category={category} />
                    </TabPanel>
                ))}
            </Tabs>
        </div>
    );
};

export default BrowseByCategory;
