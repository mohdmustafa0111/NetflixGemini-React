import { BG_URL } from "../utils/constants";
import GeminiMovieSuggestions from "./GeminiMovieSuggestions";
import GeminiSearchBar from "./GeminiSearchBar";

const GeminiSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen object-cover md:h-auto"
          src={BG_URL}
          alt="Logo"
        />
      </div>
      <GeminiSearchBar />
      <GeminiMovieSuggestions />
    </div>
  );
};
export default GeminiSearchPage;
