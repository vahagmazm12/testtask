import React from 'react';

interface ListItemProps {
    color: string;
}

const ListItem: React.FC<ListItemProps> = ({ color }) => {
    return (
        <div
            style={{ backgroundColor: color, width: '100%', height: '100%' }}
        >Item</div>
    );
};

export default ListItem;
