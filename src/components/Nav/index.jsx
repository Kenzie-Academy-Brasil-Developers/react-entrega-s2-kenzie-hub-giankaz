import { StyledNav, StyledH1 } from "./style";
import { useHistory } from "react-router-dom";

export default function Nav({ setState }) {
	const history = useHistory();
	const handleBack = () => {
		window.localStorage.removeItem("@Khub:token");
		window.localStorage.removeItem("@Khub:user");
		setState(false);
		history.push("/");
	};
	return (
		<StyledNav>
			<div className="title">
				<StyledH1>Kenzie Hub</StyledH1>
				<button className="back" onClick={handleBack}>
					Sair
				</button>
			</div>
		</StyledNav>
	);
}
