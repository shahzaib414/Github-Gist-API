import React from 'react';
import renderer from 'react-test-renderer';
import Card from "../Card";

test("Card Component renders correctly", () => {
    const component = renderer.create(<Card title="Card title">
        <h1> Card Children </h1>
    </Card>)
    expect(component).toMatchSnapshot();
})
