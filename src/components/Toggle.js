import React from 'react';

class Main extends React.Component {
	render() {
		return (
			<main role="main">
				<h1>{this.props.title}</h1>
				{this.props.children}
         </main>
		);
	}
}

class Toggle extends React.Component {
	constructor() {
		super();
		this.state = {
			works: false
		};
		this.changeTitle = this.changeTitle.bind(this);
	}
	changeTitle() {
		this.setState({
			works: !this.state.works
		});
	}
	render() {
		let title = this.state.works ? 'Visual Mode' : 'List Mode'; 
		return (
			<div>
				<Main title={title}>
					<div>
						<button onClick={this.changeTitle}>Change Name</button>
					</div>
				</Main>
            </div>
		);
	}
}

export default Toggle;