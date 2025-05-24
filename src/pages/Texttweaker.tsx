import Mainstructure from "../components/Mainstructure"
// hook
import { UseAiTool } from "../hooks/useAiTool"
// context
import { useResult } from "../contextAPI/ResultContext";
import { useInput } from "../contextAPI/InputContext";


const Texttweaker = () => {
    const { setResult } = useResult();
    const { input, setLoading } = useInput();

    const textTweaker = async (): Promise<void> => {
        if (input) {
            setResult("");
            setLoading(true);
            const output = await UseAiTool('Paraphrase the following text in simpler words while preserving the original meaning', input);
            setLoading(false);
            setResult(output);
        }
    }


    return (
        <Mainstructure
            title={"Rewrite Smarter,"}
            highlightedText={"Not Harder"}
            description={"Rewrite any text in a smarter, more fluent way without changing its meaning. Ideal for improving clarity, avoiding repetition, or rewording content professionally."}
            colors={["#e940ff", "#983e9d"]}
            mode={"textarea"}
            resultTitle={"Enhanced Version"}
            func={textTweaker}
        />
    )
}

export default Texttweaker