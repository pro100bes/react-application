class Component extends React.Component {
	render() {
		return (
			<div>Hi</div>
		)
	}
}

React.DOM.render(
	<Component />, document.get.ElementById('app')
)