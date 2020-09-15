import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const AboutPage = () => {
	return (
		<Layout pageName="about">
			<Helmet>
				<title>About</title>
			</Helmet>
			<Container>
				<h1>About Me</h1>
				<p>
					Hello! My name is Juan and after years of experience in IT and hospitality led me to a job combining
					both where I got to work closely with a web development team and their Project Manager. This got me
					interested into web and software development. And where people saw a crisis in 2020 I saw an
					opportunity to take a big step and become a web developer myself. After successfully graduating from
					a coding bootcamp I now start this path of starting a new career with a lot of willingness to keep
					learning and bettering myself in the art of coding and programming.
				</p>
			</Container>
		</Layout>
	);
};

export default AboutPage;
