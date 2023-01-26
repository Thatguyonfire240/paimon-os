import {
    Btn,
    BtnLink,
} from "../components/Buttons/ButtonElements"

const Download = () => {
    return (
        <div>
            <div id="div2">
                <div id="center">
                    <p id="text">Here is where you download the Distro</p>
                    <Btn>
                        <BtnLink to="./test-file.txt" target="_blank" download>
                                Test
                        </BtnLink>
                    </Btn>
                </div>
            </div>
        </div>
    );
};

export default Download;