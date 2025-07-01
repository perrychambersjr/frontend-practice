import React, { useEffect, useState } from 'react';
import Card from './Card';
import FilterTabs from './FilterTabs';

// npx json-server data.json
const CardList = ({ theme }) => {
    const [extensionList, setExtensionList] = useState([]);
    const [activeStates, setActiveStates] = useState({});
    const [filterStatus, setFilterStatus] = useState("all")

    const getExtensions = async () => {
        try {
            const response = await fetch('http://localhost:3000/extensions');
            const data = await response.json();
            setExtensionList(data);
            const initActive = data.reduce((acc, item) => {
                acc[item.id] = item.active || false;
                return acc;
            }, {});
            setActiveStates(initActive);
        } catch (error) {
            console.error(error);
        }
    }

    const toggleActive = (id) => {
        setActiveStates((prevState) => ({
            ...prevState,
            [id]:!prevState[id]
        }));
    };

    const handleFilterChange = (status) => {
        setFilterStatus(status);
    }

    const filteredList = extensionList.filter((extension) => {
        if(filterStatus === "active") return activeStates[extension.id];
        if(filterStatus === "inactive") return!activeStates[extension.id];
        return true; // return all extensions
    });

    useEffect(() => {
        getExtensions();
    }, []);

  return (
    <div>
        <FilterTabs onFilterChange={handleFilterChange} currentFilter={filterStatus}/>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 grid-rows-auto">
            {filteredList.map((extension) => (
                <li className="list-none" key={extension.id}>
                    <Card extension={extension} isActive={activeStates[extension.id]} onToggle={() => toggleActive(extension.id)} />
                </li>
            ))}
        </div>
    </div>
  )
}

export default CardList