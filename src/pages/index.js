import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

import img_gatsby from 'assets/images/cover.png';

const IndexPage = () => {
	return (
		<Layout pageName="home">
			<Helmet>
				<title>Juan J Perez Payan, Web Developer</title>
			</Helmet>
			<Container>
				<p className="cover">
					<img src={img_gatsby} alt="Juan bitmoji" />
				</p>
				<h1 className="heading">Hello! I'm Juan</h1>
				<p>Welcome to my personal site.</p>
			</Container>
		</Layout>
	);
};

export default IndexPage;
