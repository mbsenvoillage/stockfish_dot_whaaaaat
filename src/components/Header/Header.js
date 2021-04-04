import Logo from "./logo/Logo";
import ToggleMenu from "./togglemenu/ToggleMenu";
import { StyledHeader } from "./Header.styled";

export default function Header() {


    return (
        <StyledHeader>
            <Logo />
            <ToggleMenu/>
        </StyledHeader>
    )
}
