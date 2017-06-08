import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ViewTwo = () => {
	return (
		<div className="center-it">
			<Header>View Two</Header>
			<Button basic size="mini" as={Link} name="Landing" to="/">
				Return to Index
			</Button>
		</div>
	);
};

export default ViewTwo;
