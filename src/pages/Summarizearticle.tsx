import Mainstructure from "../components/Mainstructure"
// hook
import { UseAiTool } from "../hooks/useAiTool"
// context
import { useResult } from "../contextAPI/ResultContext";
import { useInput } from "../contextAPI/InputContext";
import { useError } from "../contextAPI/ErrorContext";
// helper
import { isValidUrl } from "../helper";

const Home = () => {
  const { setResult } = useResult();
  const { input, setLoading } = useInput();
  const { setUError } = useError();

  const summarizeArticle = async (): Promise<void> => {

    if (!input || !isValidUrl(input)) {
      alert('Please enter a valid URL.');
      return;
    }

    if (input) {
      try {
        setResult("");
        setUError("");
        setLoading(true);

        const output = await UseAiTool(
          "Summarize the following article in 6-8 sentences, keeping the main points intact",
          input
        );

        setResult(output);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setResult("");
          setUError(error.message)
    }
      } finally {
        setLoading(false);
      }
    }
  };


  return (
    <>
      <Mainstructure
        title={"Summarize Any Article"}
        highlightedText={"Instantly"}
        description={"Paste any article link and instantly get a clear, concise summary. Perfect for quick reading, note-taking, or content understanding."}
        placeholder={"Paste the article link"}
        colors={["#bb7e32", "#ffaa40"]}
        mode={"input"}
        func={summarizeArticle}
      />
    </>
  )
}

export default Home