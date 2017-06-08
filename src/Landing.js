import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';
import '../node_modules/semantic-ui-css/semantic.min.css';

const Landing = () =>
	<div className="landing">
		<Menu>
			<Menu.Item as={Link} name="view1" to="view1">
				View 1
			</Menu.Item>
			<Menu.Item as={Link} name="view2" to="view2">
				View 2
			</Menu.Item>
		</Menu>
	</div>;

export default Landing;
