import React from 'react';
import renderer from 'react-test-renderer';
import Badge from "../Badge";

test("Badge Component renders correctly", () => {
    const component = renderer.create(<Badge text="Typescript"/>)
    expect(component).toMatchSnapshot();
})
