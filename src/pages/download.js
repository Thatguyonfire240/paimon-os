import {
    Btn,
    BtnLink,
} from "../components/Buttons/ButtonElements"

const Download = () => {
    return (
        <div>
            <div id="div2">
                <div id="center">
                    <h1>Here is where you download the Distro</h1>
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