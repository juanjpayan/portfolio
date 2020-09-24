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
					Hello! My name is Juan. After years of experience in customer success and IT working closely with
					technology and project manager teams, I realized web and software development was really my calling.
					And where people saw a crisis in 2020, I saw an opportunity to take a big step in my future and
					become a web developer. After successfully graduating from a coding bootcamp, I now start this new
					career path with a strong willingness to keep learning and bettering myself in the art of coding and
					programming.
				</p>
			</Container>
		</Layout>
	);
};

export default AboutPage;
