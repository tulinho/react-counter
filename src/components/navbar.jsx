const NavBar = (props) => {
	return (
		<nav className="navbar navbar-light bg-light">
			<a href="#" className="navbar-brand m-2">
				Total
				<span className="badge badge-pill m-2 btn-secondary">
					{props.totalCount}
				</span>
			</a>
		</nav>
	);
};

export default NavBar;
