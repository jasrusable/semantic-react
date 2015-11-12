import React from 'react';
import { Tabs, Tab } from '../../src/components/modules';
import { Props } from '../utilities';

function renderChildren(props) {
    return props.children.map(child => {
        return (
            <Tab
                header={Props[child.key] || 'Default'}
                key={child.key || 'default'}
                segment={false}
            >
                {child}
            </Tab>
        );
    });
}

let ExampleGen = (props) => {
    let { children, ...other } = props;
    let propList = renderChildren(props);

    let tabs = (
        <Tabs
            segment={false}
            type="menu"
        >
            {propList}
        </Tabs>
    );

    return tabs;
};

export default ExampleGen;
