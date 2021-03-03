import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

import Level from "../../public/icons/level.svg";
import * as S from "../styles/components/Profile";

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <S.ProfileContainer>
            <img src="https://github.com/dirosaki.png" alt="Diego Gomes" />
            <div>
                <strong>Diego Gomes</strong>
                <p>
                    <Level />
                    Level {level}
                </p>
            </div>
        </S.ProfileContainer>
    );
}
