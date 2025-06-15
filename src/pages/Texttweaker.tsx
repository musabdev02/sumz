import Mainstructure from "../components/Mainstructure"
// hook
import { UseAiTool } from "../hooks/useAiTool"
// context
import { useResult } from "../contextAPI/ResultContext";
import { useInput } from "../contextAPI/InputContext";
import { useError } from '../contextAPI/ErrorContext'


const Texttweaker = () => {
    const { setResult } = useResult();
    const { input, setLoading } = useInput();
    const { setUError } = useError();

    const textTweaker = async (): Promise<void> => {
        if (input) {
            try {
                setResult("");
                setLoading(true);
                const output = await UseAiTool('Paraphrase the following text in simpler words while preserving the original meaning', input);
                setResult(output);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    setResult("");
                    setUError(error.message)
                }
            } finally {
                setLoading(false);

            }
        } else {
            alert("Textarea can't be empty!");
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