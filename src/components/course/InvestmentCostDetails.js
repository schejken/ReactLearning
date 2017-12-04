import React from 'react';
//import PropTypes from 'prop-types';
import {Accordion, Button, Panel} from 'react-bootstrap';

class InvestmentCostDetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            open: true
        };
    }

    render() {
        return (
            <div>
                <Accordion>
                    <Panel header="Collapsible Group Item #1" eventKey={'1'}>
                        Content1
                    </Panel>
                    <Panel header="Collapsible Group Item #2" eventKey={'2'}>
                        Content2
                    </Panel>
                    <Panel header="Collapsible Group Item #3" eventKey={'3'}>
                        Content3
                    </Panel>
                </Accordion>
            </div>
        );
    }
}

export default InvestmentCostDetails;