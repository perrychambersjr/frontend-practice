import React, { useEffect, useState } from 'react';
import Card from './Card';

// npx json-server data.json
const CardList = () => {
    const [extensionList, setExtensionList] = useState([]);

    const getExtensions = async () => {
        try {
            const response = await fetch('http://localhost:3000/extensions');
            const data = await response.json();
            console.log(data);
            setExtensionList(data);
        } catch (error) {
            console.error(error);
        }

    }

    useEffect(() => {
        getExtensions();
    }, []);

  return (
    <div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-2 grid-rows-auto">
            {extensionList.map((extension) => (
                <li className="list-none" key={extension.id}>
                    <Card key={extension.id} extension={extension} />
                </li>
            ))}
        </div>
    </div>
  )
}

export default CardList