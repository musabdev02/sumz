import Mainstructure from "../components/Mainstructure"
// hook
import { UseAiTool } from "../hooks/useAiTool"
// context
import { useResult } from "../contextAPI/ResultContext";
import { useInput } from "../contextAPI/InputContext";
// helper
import { isValidUrl } from "../helper";

const Home = () => {
  const { setResult } = useResult();
  const { input, setLoading } = useInput();

  const summarizeArticle = async (): Promise<void> => {

    if (!input || !isValidUrl(input)) {
      alert('Please enter a valid URL.');
      return;
    }

    if (input) {
      try {
        setResult("");
        setLoading(true);

        const output = await UseAiTool(
          "Summarize the following article in 6-8 sentences, keeping the main points intact",
          input
        );

        setResult(output);
      } catch (error) {
        setResult(`Something went wrong while summarizing. ${error}`);
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