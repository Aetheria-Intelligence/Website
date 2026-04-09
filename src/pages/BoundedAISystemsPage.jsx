import { KeywordExplainerPage } from '../components/KeywordExplainerPage';
import { KEYWORD_PAGE_CONTENT } from '../data/experienceData';

export function BoundedAISystemsPage() {
  return <KeywordExplainerPage {...KEYWORD_PAGE_CONTENT['bounded-ai-systems']} />;
}
