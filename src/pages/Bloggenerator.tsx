// components
import Mainstructure from "../components/Mainstructure"

const Bloggenerator = () => {
  return (
    <Mainstructure
     title={"Generate Blogs from"}
     highlightedText={"Single Prompt"}
     placeholder={"Describe your blog"}
     description={"Turn a simple idea or prompt into a well-structured blog post. Great for students, writers, or anyone needing fast content creation."}
     colors={["#4acd6f", "#3e9d68"]}
     mode={"input"}
     func={() => console.log("hello")}
    />
  )
}

export default Bloggenerator