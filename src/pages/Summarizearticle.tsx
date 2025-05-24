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

    if(!input || !isValidUrl(input)){
      alert('Please enter a valid URL.');
      return;
    }

    if (input) {
      setLoading(true);
      const output = await UseAiTool('Summarize the following article in 6-8 sentences, keeping the main points intact', input);
      setLoading(false);
      setResult(output);
    }
  };


  return (
    <>
      <Mainstructure
        title={"Summarize Any Article"}
        highlightedText={"Instantly"}
        description={"Paste any article link and instantly get a clear, concise summary. Perfect for quick reading, note-taking, or content understanding."}
        func={summarizeArticle}
      />
    </>
  )
}

export default Home