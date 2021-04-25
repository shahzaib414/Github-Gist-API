import React from 'react';
import renderer from 'react-test-renderer';
import Search from "../Search";

test("Search Component renders correctly", () => {
    const component = renderer.create(<Search onClick={() => {}}/>)
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})
