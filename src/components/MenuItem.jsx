import React from 'react';

const MenuItem = ({name, path}) => {
    return (
        <a
            href={path}
            className="text-center text-white block px-4 py-2 text-sm bg-white bg-opacity-0 hover:bg-opacity-25  w-full transition-all"
        >
            {name}
        </a>
    );
}

export default MenuItem;
