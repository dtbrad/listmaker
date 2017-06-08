import React from 'react';
import { Button, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ViewOne = () => {
	return (
		<div className="center-it">
			<Header>View One</Header>
			<Button basic size="mini" as={Link} name="Landing" to="/">
				Return to Index
			</Button>
		</div>
	);
};

export default ViewOne;
